using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Kitchen_Master.DataModel
{
    public class KmUserConfirmation
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Email { get; set; }
    }
}
