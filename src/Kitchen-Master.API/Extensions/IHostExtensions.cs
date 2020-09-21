using Kitchen_Master.Data;
using Kitchen_Master.Data.Extensions;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Extensions
{
    public static class IHostExtensions
    {
        public static IHost MigrateAndSeedDatabase(this IHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                var dbContext = scope.ServiceProvider.GetService<KitchenMasterDbContext>();
                dbContext.MigrateAndSeed();
            }
            return host;
        }
    }
}
