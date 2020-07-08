using Kitchen_Master.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Kitchen_Master.DataModel.Repository
{
    public abstract class BaseRepository<TEntity, TId> : IRepository<TEntity, TId>
        where TEntity : class
        where TId : struct
    {
        protected readonly KitchenMasterDbContext dbcontext;
        protected readonly DbSet<TEntity> entitySet;

        public BaseRepository(KitchenMasterDbContext context)
        {
            this.dbcontext = context;
            this.entitySet = context.Set<TEntity>();
        }

        public TEntity GetById(TId id)
        {
            return this.entitySet.Find(id);
        }

        public IQueryable<TEntity> Query()
        {
            return this.entitySet;
        }

        public void Add(TEntity entity)
        {
            this.entitySet.Add(entity);
        }

        public void Remove(TEntity entity)
        {
            if (this.dbcontext.Entry(entity).State == EntityState.Detached)
            {
                this.entitySet.Attach(entity);
            }
            this.entitySet.Remove(entity);
        }
    }
}
