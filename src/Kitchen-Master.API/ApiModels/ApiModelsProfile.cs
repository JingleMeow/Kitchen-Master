using AutoMapper;
using Kitchen_Master.API.ApiModels.Recipe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DbModels = Kitchen_Master.Data.Models;

namespace Kitchen_Master.API.ApiModels
{
    public class ApiModelsProfile : Profile
    {
        public ApiModelsProfile()
        {
            CreateMap<RecipeModel, DbModels.Recipe>();
        }
    }
}
