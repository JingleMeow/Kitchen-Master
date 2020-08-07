using Kitchen_Master.API.Services.Common;
using Kitchen_Master.Data.Models;
using Kitchen_Master.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.ApiModels.Common
{
    public class DefinitionsModel
    {
        public DefinitionsModel(UnitService unitService)
        {
            this.Difficulties = EnumModel<Difficulty>.GetEnumModels();
            this.IngredientTypes = EnumModel<IngredientType>.GetEnumModels();
            this.Spicies = EnumModel<Spicy>.GetEnumModels();
            this.UnitCategories = EnumModel<UnitCategory>.GetEnumModels();
            this.Units = unitService.GetAllUnits();
        }
        public List<EnumModel<Difficulty>> Difficulties { get; }
        public List<EnumModel<IngredientType>> IngredientTypes { get; }
        public List<EnumModel<Spicy>> Spicies { get; }
        public List<EnumModel<UnitCategory>> UnitCategories { get; }
        public List<Unit> Units { get; }

        public class EnumModel<T> where T : Enum
        {
            public int Value { get; private set; }
            public string Label { get; private set; }

            public static List<EnumModel<T>> GetEnumModels()
            {
                var list = new List<EnumModel<T>>();
                foreach (var enumObject in Enum.GetValues(typeof(T)).Cast<T>())
                {
                    list.Add(new EnumModel<T>()
                    {
                        Value = Convert.ToInt32(enumObject),
                        Label = enumObject.ToString(),
                    });
                }
                return list;
            }
        }
    }
}
