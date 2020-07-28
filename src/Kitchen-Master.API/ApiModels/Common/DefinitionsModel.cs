using Kitchen_Master.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.ApiModels.Common
{
    public class DefinitionsModel
    {
        public List<EnumModel<Difficulty>> Difficulties { get; } = EnumModel<Difficulty>.GetEnumModels();
        public List<EnumModel<IngredientType>> IngredientTypes { get; } = EnumModel<IngredientType>.GetEnumModels();
        public List<EnumModel<Spicy>> Spicies { get; } = EnumModel<Spicy>.GetEnumModels();
        public List<EnumModel<UnitCategory>> UnitCategories { get; } = EnumModel<UnitCategory>.GetEnumModels();

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
