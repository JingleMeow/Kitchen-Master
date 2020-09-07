using AutoMapper;
using Kitchen_Master.API.ApiModels.Recipe;
using Kitchen_Master.API.Services.Account;
using Kitchen_Master.Data;
using Kitchen_Master.Data.Models;
using Kitchen_Master.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Services.Menu
{
    public class UserMenuService : UnitOfWorkService, IFeatureService
    {
        private readonly KitchenMasterDbContext _dbContext;
        private readonly CurrentUserService _currentUser;
        private readonly RecipeRepository _recipeRepository;
        private readonly IMapper _mapper;

        public UserMenuService(KitchenMasterDbContext dbContext,
            CurrentUserService currentUser,
            RecipeRepository recipeRepository,
            IMapper mapper)
            : base(dbContext)
        {
            this._dbContext = dbContext;
            this._currentUser = currentUser;
            this._recipeRepository = recipeRepository;
            this._mapper = mapper;
        }

        public List<RecipeModel> GetUserMenu()
        {
            var currentUserId = this._currentUser.UserId;
            var userMenu = this._dbContext.UserMenus
                .Where(x => x.UserId == this._currentUser.UserId)
                .Include(x => x.Recipe)
                .Select(x => x.Recipe)
                .ToList();
            return this._mapper.Map<List<RecipeModel>>(userMenu);
        }

        public RecipeModel AddRecipeToMenu(int recipeId)
        {
            var currentUserId = this._currentUser.UserId;
            var menuItem = this._dbContext.UserMenus.FirstOrDefault(x => x.UserId == currentUserId && x.RecipeId == recipeId);
            if (menuItem == null)
            {
                menuItem = new UserMenu
                {
                    UserId = currentUserId,
                    RecipeId = recipeId
                };
                this._dbContext.UserMenus.Add(menuItem);
                this._dbContext.SaveChanges();
            }

            var recipe = this._recipeRepository.GetById(recipeId);
            return this._mapper.Map<RecipeModel>(recipe);
        }

        public void RemoveRecipeFromMenu(int recipeId)
        {
            var currentUserId = this._currentUser.UserId;
            var menuItem = this._dbContext.UserMenus.FirstOrDefault(x => x.UserId == currentUserId && x.RecipeId == recipeId);
            if (menuItem == null)
                return;

            this._dbContext.UserMenus.Remove(menuItem);
            this._dbContext.SaveChanges();
        }
    }
}
