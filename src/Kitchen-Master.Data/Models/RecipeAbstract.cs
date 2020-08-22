using Kitchen_Master.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Kitchen_Master.Data.Models
{
    public class RecipeAbstract
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CoverImageId { get; set; }
        public Spicy Spicy { get; set; }
        public Difficulty Difficulty { get; set; }
        public int AuthorId { get; set; }
        public string AuthorName { get; set; }
        public int Likes { get; set; }
        public DateTime CreatedTime { get; set; }
    }
}
