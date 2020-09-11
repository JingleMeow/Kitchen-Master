using Kitchen_Master.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Kitchen_Master.Data.Repositories
{
    public class MenuHistoryRepository : BaseRepository<MenuHistory, int>, IRepository<MenuHistory, int>
    {
        public MenuHistoryRepository(KitchenMasterDbContext context) : base(context)
        {
        }
    }
}
