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
    public class RecipeController : ControllerBase
    {
        private readonly RecipeService _recipeService;

        public RecipeController(RecipeService recipeService)
        {
            this._recipeService = recipeService;
        }

        [HttpPost]
        public ActionResult<Recipe> Post(Recipe recipe)
        {
            var result = this._recipeService.AddRecipe(recipe);
            return Ok(result);
        }
    }
}