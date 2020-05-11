using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Kitchen_Master.DataModel
{
    public class KmUser : IdentityUser<int>
    {
        public int? Age { get; set; }
    }
}
