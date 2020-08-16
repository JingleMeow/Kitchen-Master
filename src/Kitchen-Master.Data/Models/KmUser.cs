using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Kitchen_Master.Data.Models
{
    public class KmUser : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<LikedRecipe> LikedRecipes { get; set; }
    }
}
