using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Kitchen_Master.Data.Models
{
    public class UserMenu
    {
        public int UserId { get; set; }
        public int RecipeId { get; set; }
        [ForeignKey("UserId")]
        public KmUser User { get; set; }
        [ForeignKey("RecipeId")]
        public Recipe Recipe { get; set; }
    }
}
