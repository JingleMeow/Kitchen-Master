using Kitchen_Master.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Kitchen_Master.Data.Repositories
{
    public class UserRepository : BaseRepository<KmUser, int>, IRepository<KmUser, int>
    {

        public UserRepository(KitchenMasterDbContext dbContext)
            : base(dbContext)
        {

        }

        public KmUser GetUserByEmail(string email)
        {
            return entitySet.FirstOrDefault(x => x.Email == email);
        }
    }
}
