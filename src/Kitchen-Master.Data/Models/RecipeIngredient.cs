using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Text.Json.Serialization;

namespace Kitchen_Master.Data.Models
{
    public class RecipeIngredient
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [ForeignKey("Recipe")]
        public int RecipeId { get; set; }
        [Required]
        [ForeignKey("Ingredient")]
        public int IngredientId { get; set; }
        [Required]
        public float Amount { get; set; }
        [JsonIgnore]
        public Recipe Recipe { get; set; }
        [JsonIgnore]
        public Ingredient Ingredient { get; set; }
    }
}
