using Kitchen_Master.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Kitchen_Master.Data.Extensions
{
    public static class DbContextExtension
    {
        public static void MigrateAndSeed(this KitchenMasterDbContext dbContext)
        {
            if (!dbContext.AllMigrationsApplied())
            {
                dbContext.Database.Migrate();
            }

            dbContext.EnureSeeded();
        }

        private static bool AllMigrationsApplied(this KitchenMasterDbContext dbContext)
        {
            var applied = dbContext.GetService<IHistoryRepository>()
                .GetAppliedMigrations()
                .Select(m => m.MigrationId);

            var all = dbContext.GetService<IMigrationsAssembly>()
                .Migrations
                .Select(m => m.Key);

            return !all.Except(applied).Any();
        }

        private static void EnureSeeded(this KitchenMasterDbContext dbContext)
        {
            if (!dbContext.Units.Any())
            {
                using (var transaction = dbContext.Database.BeginTransaction())
                {
                    try
                    {
                        var path = Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), "Seeding", "Units.sql");
                        var sql = File.ReadAllText(path);
                        dbContext.Database.ExecuteSqlRaw(sql);
                        transaction.Commit();
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                    }
                }
            }
        }
    }
}
