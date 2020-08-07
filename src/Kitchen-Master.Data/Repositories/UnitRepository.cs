using Kitchen_Master.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Kitchen_Master.Data.Repositories
{
    public class UnitRepository : BaseRepository<Unit, int>, IRepository<Unit, int>
    {
        public UnitRepository(KitchenMasterDbContext dbContext)
            :base(dbContext)
        {

        }
    }
}
