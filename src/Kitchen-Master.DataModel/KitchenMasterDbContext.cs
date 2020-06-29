using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Kitchen_Master.DataModel
{
    public class KitchenMasterDbContext : IdentityDbContext<KmUser, KmRole, int>
    {
        public KitchenMasterDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<KmUserConfirmation> UserConfirmations { get; set; }
    }
}
