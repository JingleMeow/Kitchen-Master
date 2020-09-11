using AutoMapper;
using Kitchen_Master.API.ApiModels.Menu;
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
        private readonly MenuHistoryRepository _menuHistoryRepository;
        private readonly IMapper _mapper;

        public UserMenuService(KitchenMasterDbContext dbContext,
            CurrentUserService currentUser,
            RecipeRepository recipeRepository,
            MenuHistoryRepository menuHistoryRepository,
            IMapper mapper)
            : base(dbContext)
        {
            this._dbContext = dbContext;
            this._currentUser = currentUser;
            this._recipeRepository = recipeRepository;
            this._menuHistoryRepository = menuHistoryRepository;
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

        public int SubmitMenu(string menuName)
        {
            var currentUserId = this._currentUser.UserId;
            var userMenu = this._dbContext.UserMenus
                .Where(x => x.UserId == this._currentUser.UserId)
                .ToList();
            var menuHistory = new MenuHistory
            {
                MenuName = menuName,
                UserId = currentUserId,
                RecipeCount = userMenu.Count,
                Items = userMenu.Select(x => new MenuRecipe
                {
                    RecipeId = x.RecipeId
                }).ToList(),
                CreatedTime = DateTime.Now
            };
            this._menuHistoryRepository.Add(menuHistory);
            this._dbContext.UserMenus.RemoveRange(userMenu);
            this.SaveChanges();
            return menuHistory.Id;
        }

        public ExtendedMenuModel GetHistoryMenuById(int menuId)
        {
            var currentUserId = this._currentUser.UserId;
            var menu = this._menuHistoryRepository.Query()
                .Include(x => x.Items)
                .ThenInclude(x => x.Recipe)
                .ThenInclude(x => x.RecipeIngredients)
                .ThenInclude(x => x.Ingredient)
                .Include(x => x.Items)
                .ThenInclude(x => x.Recipe)
                .ThenInclude(x => x.RecipeIngredients)
                .ThenInclude(x => x.Unit)
                .FirstOrDefault(x => x.Id == menuId && x.UserId == currentUserId);
            return this._mapper.Map<ExtendedMenuModel>(menu);
        }
    }
}
