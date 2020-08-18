using Kitchen_Master.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Kitchen_Master.Data.Repositories
{
    public class RecipeRepository : BaseRepository<Recipe, int>, IRepository<Recipe, int>
    {
        public RecipeRepository(KitchenMasterDbContext dbContext)
            : base(dbContext)
        {

        }

        public List<Recipe> GetRecipesLikedByUser(int userId)
        {
            var recipes = from lr in this.dbcontext.LikedRecipes
                          join r in this.dbcontext.Recipes
                          on lr.RecipeId equals r.Id
                          where lr.UserId == userId
                          select r;
            return recipes.ToList();
        }
    }
}
