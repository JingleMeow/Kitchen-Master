using Kitchen_Master.Data;
using Kitchen_Master.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Kitchen_Master.DataModel.Repository
{
    public class UserRepository : BaseRepository<KmUser, int>, IRepository<KmUser, int>
    {

        public UserRepository(KitchenMasterDbContext dbContext)
            : base(dbContext)
        {
            
        }

        public KmUser GetUserByEmail(string email)
        {
            return this.entitySet.FirstOrDefault(x => x.Email == email);
        }
    }
}
