using Kitchen_Master.Data.Models;
using Kitchen_Master.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;
using DbModels = Kitchen_Master.Data.Models;

namespace Kitchen_Master.API.ApiModels.Recipe
{
    public class ExtendedRecipeModel : DetailRecipeModel
    {
        public int? AuthorId { get; set; }
        public string AuthorName { get; set; }
        public int Likes { get; set; }
        public DateTime CreatedTime { get; set; }
    }
}
