using Kitchen_Master.API.ApiModels.Recipe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.ApiModels.Menu
{
    public class ExtendedMenuModel
    {
        public int Id { get; set; }
        public string MenuName { get; set; }
        public int UserId { get; set; }
        public int RecipeCount { get; set; }
        public IEnumerable<RecipeModel> Recipes { get; set; }
        public IEnumerable<MenuIngredientModel> Ingredients { get; set; }
        public DateTime CreatedTime { get; set; }
    }
}
