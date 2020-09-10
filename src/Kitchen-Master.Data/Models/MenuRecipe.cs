using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Kitchen_Master.Data.Models
{
    public class MenuRecipe
    {
        public int MenuId { get; set; }
        public int RecipeId { get; set; }
        [ForeignKey("MenuId")]
        public MenuHistory Menu { get; set; }
        [ForeignKey("RecipeId")]
        public Recipe Recipe { get; set; }
    }
}
