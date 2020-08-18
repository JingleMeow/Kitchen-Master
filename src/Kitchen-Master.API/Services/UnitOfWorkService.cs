using Kitchen_Master.Data;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Services
{
    public abstract class UnitOfWorkService
    {
        protected readonly KitchenMasterDbContext dbContext;

        public UnitOfWorkService(KitchenMasterDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        protected virtual IDbContextTransaction BeginTransaction()
        {
            return this.dbContext.Database.BeginTransaction();
        }

        protected virtual void CommitTransaction()
        {
            this.dbContext.Database.CommitTransaction();
        }

        protected virtual void SaveChanges()
        {
            this.dbContext.SaveChanges();
        }

        protected async Task SaveChangesAsync()
        {
            await this.dbContext.SaveChangesAsync();
        }
    }
}
