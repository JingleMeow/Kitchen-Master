using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Kitchen_Master.Data.Repositories
{
    public abstract class BaseRepository<TEntity, TId> : IRepository<TEntity, TId>
        where TEntity : class
        where TId : struct
    {
        protected readonly KitchenMasterDbContext dbcontext;
        protected readonly DbSet<TEntity> entitySet;

        public BaseRepository(KitchenMasterDbContext context)
        {
            dbcontext = context;
            entitySet = context.Set<TEntity>();
        }

        public TEntity GetById(TId id)
        {
            return entitySet.Find(id);
        }

        public IQueryable<TEntity> Query()
        {
            return entitySet;
        }

        public void Add(TEntity entity)
        {
            entitySet.Add(entity);
        }

        public void Remove(TEntity entity)
        {
            if (dbcontext.Entry(entity).State == EntityState.Detached)
            {
                entitySet.Attach(entity);
            }
            entitySet.Remove(entity);
        }
    }
}
