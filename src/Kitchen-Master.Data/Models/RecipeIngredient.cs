using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Kitchen_Master.Data.Models
{
    public class RecipeIngredient
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Recipe")]
        public int RecipeId { get; set; }
        [ForeignKey("Ingredient")]
        public int IngredientId { get; set; }
        [Required]
        public int Order { get; set; }
        [Required]
        public float Amount { get; set; }
        public Recipe Recipe { get; set; }
        public Ingredient Ingredient { get; set; }
    }
}
