using Kitchen_Master.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Kitchen_Master.Data.Models
{
    public class Recipe
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string CoverImageId { get; set; }
        [Required]
        public DateTime CreatedTime { get; set; }
        [Required]
        public Spicy Spicy { get; set; }
        [Required]
        public Difficulty Difficulty { get; set; }
        public ICollection<RecipeDirection> Directions { get; set; }
    }
}
