using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Kitchen_Master.API.Services.Recipe;
using Kitchen_Master.Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Kitchen_Master.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class IngredientController : ControllerBase
    {
        private readonly IngredientService _ingredientService;

        public IngredientController(IngredientService ingredientService)
        {
            this._ingredientService = ingredientService;
        }

        [HttpPost]
        public ActionResult<Ingredient> Post(Ingredient ingredient)
        {
            var result = _ingredientService.AddIngredient(ingredient);
            return Ok(result);
        }

        [HttpGet("search/{searchText}")]
        public ActionResult<List<Ingredient>> Search(string searchText)
        {
            var result = this._ingredientService.SearchIngredientsWithNameStart(searchText);
            return Ok(result);
        }
    }
}