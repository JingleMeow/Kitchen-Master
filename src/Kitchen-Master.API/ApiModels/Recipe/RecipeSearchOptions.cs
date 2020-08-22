using Kitchen_Master.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.ApiModels.Recipe
{
    public class RecipeSearchOptions
    {
        public string QueryText { get; set; }
        public int? AuthorId { get; set; }
        public Difficulty? Difficulty { get; set; }
        public Spicy? Spicy { get; set; }
    }
}
