using Kitchen_Master.Data;
using Kitchen_Master.Data.Models;
using Kitchen_Master.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Services.Common
{
    public class UnitService : UnitOfWorkService, IFeatureService
    {
        private readonly UnitRepository _unitRepository;

        public UnitService(KitchenMasterDbContext dbContext,
            UnitRepository unitRepository)
            :base(dbContext)
        {
            this._unitRepository = unitRepository;
        }
        public List<Unit> GetAllUnits()
        {
            return this._unitRepository.Query().ToList();
        }
    }
}
