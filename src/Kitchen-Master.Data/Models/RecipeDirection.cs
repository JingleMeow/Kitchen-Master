using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Kitchen_Master.Data.Models
{
    public class RecipeDirection
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [ForeignKey("Recipe")]
        public int RecipeId { get; set; }
        [Required]
        public int Order { get; set; }
        [Required]
        public string Direction { get; set; }
    }
}
