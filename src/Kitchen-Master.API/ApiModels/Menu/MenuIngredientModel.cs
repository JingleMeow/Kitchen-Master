using Kitchen_Master.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.ApiModels.Menu
{
    public class MenuIngredientModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IngredientType Type { get; set; }
        public UnitCategory UnitCategory { get; set; }
        public float Amount { get; set; }
    }
}
