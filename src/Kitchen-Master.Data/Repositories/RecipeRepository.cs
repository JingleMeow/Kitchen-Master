using Kitchen_Master.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Kitchen_Master.Data.Repositories
{
    public class RecipeRepository : BaseRepository<Recipe, int>, IRepository<Recipe, int>
    {
        public RecipeRepository(KitchenMasterDbContext dbContext)
            : base(dbContext)
        {

        }
    }
}
