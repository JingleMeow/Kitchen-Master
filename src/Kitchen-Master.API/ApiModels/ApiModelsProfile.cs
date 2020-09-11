using AutoMapper;
using Kitchen_Master.API.ApiModels.Menu;
using Kitchen_Master.API.ApiModels.Recipe;
using Kitchen_Master.Data.Models;
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
            CreateMap<DbModels.Recipe, RecipeModel>();
            CreateMap<DetailRecipeModel, DbModels.Recipe>();
            CreateMap<DbModels.Recipe, ExtendedRecipeModel>()
                .ForMember(erm => erm.AuthorName, opt => opt.MapFrom(r => $"{r.Author.FirstName} {r.Author.LastName}"))
                .ForMember(erm => erm.Likes, opt => opt.MapFrom(r => r.Liked.Count));
            CreateMap<DbModels.Recipe, DetailRecipeModel>();
            CreateMap<DbModels.Recipe, RecipeAbstractModel>()
                .ForMember(ram => ram.AuthorName, opt => opt.MapFrom(r => $"{r.Author.FirstName} {r.Author.LastName}"))
                .ForMember(ram => ram.Likes, opt => opt.MapFrom(r => r.Liked.Count));
            CreateMap<RecipeAbstract, RecipeAbstractModel>();

            CreateMap<MenuHistory, ExtendedMenuModel>()
                .ForMember(emm => emm.Recipes, opt => opt.MapFrom(x => x.Items.Select(i => i.Recipe)))
                .ForMember(emm => emm.Ingredients, opt => opt.MapFrom<MenuHistoryIngredientResolver>());
        }

        class MenuHistoryIngredientResolver : IValueResolver<MenuHistory, ExtendedMenuModel, IEnumerable<MenuIngredientModel>>
        {
            public IEnumerable<MenuIngredientModel> Resolve(MenuHistory source, ExtendedMenuModel destination, IEnumerable<MenuIngredientModel> destMember, ResolutionContext context)
            {
                return source.Items
                    .SelectMany(i => i.Recipe.RecipeIngredients)
                    .Select(x => new MenuIngredientModel
                    {
                        IngredientId = x.IngredientId,
                        IngredientName = x.Ingredient.Name,
                        IngredientType = x.Ingredient.Type,
                        UnitCategory = x.Unit.UnitCategory,
                        Amount = x.Amount * x.Unit.Coefficient
                    })
                    .GroupBy(x => x.IngredientId)
                    .Select(x => x.Aggregate((a, b) =>
                    {
                        a.Amount += b.Amount;
                        return a;
                    }));
                
            }
        }
    }
}
