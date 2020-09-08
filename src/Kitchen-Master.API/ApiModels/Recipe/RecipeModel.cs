using Kitchen_Master.Data.Models;
using Kitchen_Master.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.ApiModels.Recipe
{
    public class RecipeModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CoverImageId { get; set; }
        public Spicy Spicy { get; set; }
        public Difficulty Difficulty { get; set; }
        public ICollection<RecipeIngredient> RecipeIngredients { get; set; }
        public ICollection<Direction> Directions { get; set; }
    }
}
