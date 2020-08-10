using Kitchen_Master.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Kitchen_Master.Data.Models
{
    public class Recipe
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(200)]
        public string Name { get; set; }
        [Column(TypeName ="char(64)")]
        public string CoverImageId { get; set; }
        [Required]
        public Spicy Spicy { get; set; }
        [Required]
        public Difficulty Difficulty { get; set; }
        public ICollection<RecipeIngredient> RecipeIngredients { get; set; }
        public ICollection<Direction> Directions { get; set; }
        [Required]
        [ForeignKey("Author")]
        public int AuthorId { get; set; }
        public KmUser Author { get; set; }
        [Required]
        public DateTime CreatedTime { get; set; }
    }
}
