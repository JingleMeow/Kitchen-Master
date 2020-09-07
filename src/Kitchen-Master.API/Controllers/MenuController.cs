using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Kitchen_Master.API.ApiModels.Recipe;
using Kitchen_Master.API.Services.Menu;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Kitchen_Master.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class MenuController : ControllerBase
    {
        private readonly UserMenuService _userMenuService;

        public MenuController(UserMenuService userMenuService)
        {
            this._userMenuService = userMenuService;
        }

        [HttpGet]
        public ActionResult<List<RecipeModel>> GetCurrentMenu()
        {
            var menu = this._userMenuService.GetUserMenu();
            return Ok(menu);
        }

        [HttpPost("add")]
        public ActionResult<RecipeModel> AddRecipe([FromBody]int recipeId)
        {
            var recipe = this._userMenuService.AddRecipeToMenu(recipeId);
            return Ok(recipe);
        }

        [HttpDelete("remove")]
        public IActionResult RemoveRecipe([FromBody]int recipeId)
        {
            this._userMenuService.RemoveRecipeFromMenu(recipeId);
            return Ok();
        }
    }
}