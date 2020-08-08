using Kitchen_Master.API.Services.Account;
using Kitchen_Master.Data;
using Kitchen_Master.Data.Repositories;
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

        public RecipeService(KitchenMasterDbContext dbContext,
            RecipeRepository recipeRepository,
            CurrentUserService currentUser)
            : base(dbContext)
        {
            this._recipeRepository = recipeRepository;
            this._currentUser = currentUser;
        }

        public DbModels.Recipe AddRecipe(DbModels.Recipe recipe)
        {
            recipe.AuthorId = this._currentUser.UserId;
            recipe.CreatedTime = DateTime.Now;
            this._recipeRepository.Add(recipe);
            this.SaveChanges();
            return recipe;
        }
    }
}
