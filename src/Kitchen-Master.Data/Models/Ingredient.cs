using Kitchen_Master.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Kitchen_Master.Data.Models
{
    public class Ingredient
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int Name { get; set; }
        [Required]
        public IngredientType Type { get; set; }
        [Required]
        public UnitCategory UnitCategory { get; set; }
    }
}
