using Kitchen_Master.Data.Models;
using Microsoft.EntityFrameworkCore;
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

        public List<Recipe> GetHotRecipes()
        {
            var recipes = from r in this.dbcontext.Recipes.Include(x => x.Liked).Include(x => x.Author)
                          orderby r.Liked.Count() descending
                          select r;
            return recipes.Take(10).ToList();
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
