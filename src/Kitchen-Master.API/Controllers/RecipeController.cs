﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Kitchen_Master.API.ApiModels.Recipe;
using Kitchen_Master.API.Services.Recipe;
using Microsoft.AspNetCore.Authorization;
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

        [HttpGet("{id}")]
        [AllowAnonymous]
        public ActionResult<ExtendedRecipeModel> Get(int id)
        {
            return this._recipeService.GeFullRecipeById(id);
        }

        [HttpPost]
        public IActionResult Post(DetailRecipeModel recipe)
        {
            var result = this._recipeService.AddRecipe(recipe);
            return Ok();
        }

        [HttpGet("hot")]
        [AllowAnonymous]
        public ActionResult<List<RecipeAbstractModel>> GetHotRecipes()
        {
            return this._recipeService.GetHotRecipes();
        }

        [HttpGet("search")]
        [AllowAnonymous]
        public ActionResult<List<RecipeAbstractModel>> Search([FromQuery]RecipeSearchOptions options)
        {
            return this._recipeService.SearchRecipes(options);
        }

        [HttpGet("likedRecipeIds")]
        public ActionResult<List<int>> GetLikedRecipeIds()
        {
            var likedRecipes = this._recipeService.GetLikedRecipes();
            return likedRecipes.Select(x => x.Id).ToList();
        }

        [HttpPost("likeRecipe")]
        public IActionResult LikeRecipe(RecipeIdModel likeRecipeModel)
        {
            this._recipeService.LikeRecipe(likeRecipeModel.RecipeId);
            return Ok();
        }

        [HttpPost("cancelLikeRecipe")]
        public IActionResult CancelLikeRecipe(RecipeIdModel likeRecipeModel)
        {
            this._recipeService.CancelLikeRecipe(likeRecipeModel.RecipeId);
            return Ok();
        }
    }
}