using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Kitchen_Master.Data.Models
{
    public class MenuHistory
    {
        [Key]
        public int Id { get; set; }
        public string MenuName { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public int RecipeCount { get; set; }
        [Required]
        public DateTime CreatedTime { get; set; }
        [ForeignKey("UserId")]
        public KmUser User { get; set; }
        public ICollection<MenuRecipe> Items { get; set; }
    }
}
