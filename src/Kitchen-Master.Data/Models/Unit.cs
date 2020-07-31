using Kitchen_Master.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Kitchen_Master.Data.Models
{
    public class Unit
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(10)]
        public string Label { get; set; }
        [Required]
        public UnitCategory UnitCategory { get; set; }
        [Required]
        public float Coefficient { get; set; }
    }
}
