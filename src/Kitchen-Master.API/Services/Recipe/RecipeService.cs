﻿using AutoMapper;
using Kitchen_Master.API.ApiModels.Recipe;
using Kitchen_Master.API.Services.Account;
using Kitchen_Master.Data;
using Kitchen_Master.Data.Models;
using Kitchen_Master.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DbModels = Kitchen_Master.Data.Models;

namespace Kitchen_Master.API.Services.Recipe
{
    public class RecipeService : UnitOfWorkService, IFeatureService
    {
        private readonly RecipeRepository _recipeRepository;
        private readonly UserRepository _userRepository;
        private readonly CurrentUserService _currentUser;
        private readonly IMapper _mapper;

        public RecipeService(KitchenMasterDbContext dbContext,
            RecipeRepository recipeRepository,
            UserRepository userRepository,
            CurrentUserService currentUser,
            IMapper mapper)
            : base(dbContext)
        {
            this._recipeRepository = recipeRepository;
            this._userRepository = userRepository;
            this._currentUser = currentUser;
            this._mapper = mapper;
        }

        public ExtendedRecipeModel GeFullRecipeById(int recipeId)
        {
            var recipe = this._recipeRepository
                .Query()
                .Where(r => r.Id == recipeId)
                .Include(r => r.RecipeIngredients).ThenInclude(ri => ri.Ingredient)
                .Include(r => r.RecipeIngredients).ThenInclude(ri => ri.Unit)
                .Include(r => r.Directions)
                .Include(r => r.Author)
                .Include(r => r.Liked)
                .FirstOrDefault();
            return this._mapper.Map<ExtendedRecipeModel>(recipe);
        }

        public DbModels.Recipe AddRecipe(DetailRecipeModel recipeModel)
        {
            var recipe = _mapper.Map<DbModels.Recipe>(recipeModel);
            recipe.AuthorId = this._currentUser.UserId;
            recipe.CreatedTime = DateTime.Now;
            this._recipeRepository.Add(recipe);
            this.SaveChanges();
            return recipe;
        }

        public List<RecipeAbstractModel> GetHotRecipes()
        {
            //var recipes = this._recipeRepository.Query()
            //    .Include(x => x.Author)
            //    .Include(x => x.Liked)
            //    .OrderBy(x => x.Liked.Aggregate(0, (c, lr) => c + 1))
            //    .TakeLast(10)
            //    .ToList();
            var recipes = this._recipeRepository.GetHotRecipes();
            return this._mapper.Map<List<RecipeAbstractModel>>(recipes);
        }

        public List<RecipeAbstractModel> SearchRecipes(RecipeSearchOptions options)
        {
            if (options.QueryText == null)
                return this.SearchRecipesWithoutQueryText(options);
            else
                return this.SearchRecipesWithQueryText(options);
        }

        public List<DbModels.Recipe> GetLikedRecipes(int? userId = null)
        {
            return this._recipeRepository.GetRecipesLikedByUser(userId ?? this._currentUser.UserId);
        }

        public void LikeRecipe(int recipeId)
        {
            var user = this._userRepository.Query()
                .Include(x => x.LikedRecipes)
                .FirstOrDefault(x => x.Id == this._currentUser.UserId);
            if (user.LikedRecipes.All(x => x.RecipeId != recipeId))
            {
                user.LikedRecipes.Add(new DbModels.LikedRecipe
                {
                    UserId = this._currentUser.UserId,
                    RecipeId = recipeId
                });
                this.dbContext.SaveChanges();
            }
        }

        public void CancelLikeRecipe(int recipeId)
        {
            var user = this._userRepository.Query()
                .Include(x => x.LikedRecipes)
                .FirstOrDefault(x => x.Id == this._currentUser.UserId);
            var likedRecipe = user.LikedRecipes.FirstOrDefault(x => x.RecipeId == recipeId);
            if (likedRecipe != null)
            {
                user.LikedRecipes.Remove(likedRecipe);
                this.dbContext.SaveChanges();
            }
        }

        #region Private Methods
        public List<RecipeAbstractModel> SearchRecipesWithoutQueryText(RecipeSearchOptions options)
        {
            var query = this._recipeRepository.Query();
            if (options.Difficulty != null)
                query = query.Where(x => x.Difficulty == options.Difficulty);
            if (options.Spicy != null)
                query = query.Where(x => x.Spicy == options.Spicy);
            if (options.AuthorId != null)
                query = query.Where(x => x.AuthorId == options.AuthorId);
            if (options.LikeByUserId != null)
                query = query.Where(x => x.Liked.Any(lr => lr.UserId == options.LikeByUserId));
            var recipes = query.Include(x => x.Author).Include(x => x.Liked);
            return this._mapper.Map<List<RecipeAbstractModel>>(recipes.ToList());
        }

        public List<RecipeAbstractModel> SearchRecipesWithQueryText(RecipeSearchOptions options)
        {
            var recipes = this.dbContext.Set<RecipeAbstract>()
                .FromSqlInterpolated($"spSearchRecipes @QueryText={options.QueryText}, @Difficulty={options.Difficulty}, @Spicy={options.Spicy}")
                .ToList();
            return this._mapper.Map<List<RecipeAbstractModel>>(recipes);
        }
        #endregion
    }
}
