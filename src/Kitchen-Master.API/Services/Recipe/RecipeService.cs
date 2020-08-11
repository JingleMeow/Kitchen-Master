using AutoMapper;
using Kitchen_Master.API.ApiModels.Recipe;
using Kitchen_Master.API.Services.Account;
using Kitchen_Master.Data;
using Kitchen_Master.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DbModels = Kitchen_Master.Data.Models;

namespace Kitchen_Master.API.Services.Recipe
{
    public class RecipeService : UnitOfWorkService, IFeatureService
    {
        private readonly RecipeRepository _recipeRepository;
        private readonly CurrentUserService _currentUser;
        private readonly IMapper _mapper;

        public RecipeService(KitchenMasterDbContext dbContext,
            RecipeRepository recipeRepository,
            CurrentUserService currentUser,
            IMapper mapper)
            : base(dbContext)
        {
            this._recipeRepository = recipeRepository;
            this._currentUser = currentUser;
            this._mapper = mapper;
        }

        public DbModels.Recipe GetRecipeById(int recipeId)
        {
            return this._recipeRepository.GetById(recipeId);
        }

        public DbModels.Recipe GeFulltRecipeById(int recipeId)
        {
            var recipe = this._recipeRepository
                .Query()
                .Where(r => r.Id == recipeId)
                .Include(r => r.RecipeIngredients).ThenInclude(ri => ri.Ingredient)
                .Include(r => r.RecipeIngredients).ThenInclude(ri => ri.Unit)
                .Include(r => r.Directions)
                .Include(r => r.Author)
                .FirstOrDefault();
            return recipe;
        }

        public DbModels.Recipe AddRecipe(RecipeModel recipeModel)
        {
            var recipe = _mapper.Map<DbModels.Recipe>(recipeModel);
            recipe.AuthorId = this._currentUser.UserId;
            recipe.CreatedTime = DateTime.Now;
            this._recipeRepository.Add(recipe);
            this.SaveChanges();
            return recipe;
        }
    }
}
