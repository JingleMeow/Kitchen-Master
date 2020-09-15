using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.ApiModels.Menu
{
    public class MenuModel
    {
        public int Id { get; set; }
        public string MenuName { get; set; }
        public int RecipeCount { get; set; }
        public DateTime CreatedTime { get; set; }
    }
}
