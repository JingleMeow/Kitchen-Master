using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Kitchen_Master.DataModel.Repository
{
    public interface IRepository
    {
    }

    public interface IRepository<TEntity, TId> : IRepository
    {
        TEntity GetById(TId id);

        IQueryable<TEntity> Query();

        void Add(TEntity entity);

        void Remove(TEntity entity);
    }
}
