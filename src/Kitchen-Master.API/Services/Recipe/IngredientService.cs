using Kitchen_Master.Data;
using Kitchen_Master.Data.Models;
using Kitchen_Master.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Services.Recipe
{
    public class IngredientService : UnitOfWorkService, IFeatureService
    {
        private readonly IngredientRepository _ingredientRepository;

        public IngredientService(KitchenMasterDbContext dbContext,
            IngredientRepository ingredientRepository)
            :base(dbContext)
        {
            this._ingredientRepository = ingredientRepository;
        }

        public Ingredient AddIngredient(Ingredient ingredient)
        {
            this._ingredientRepository.Add(ingredient);
            this.SaveChanges();
            return ingredient;
        }

        public List<Ingredient> SearchIngredientsWithNameStart(string searchText)
        {
            return this._ingredientRepository
                .Query()
                .Where(x => x.Name.StartsWith(searchText))
                .OrderBy(x => x.Name)
                .ToList();
        }
    }
}
