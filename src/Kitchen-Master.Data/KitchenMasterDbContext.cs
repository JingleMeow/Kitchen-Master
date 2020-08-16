﻿using Kitchen_Master.Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Kitchen_Master.Data
{
    public class KitchenMasterDbContext : IdentityDbContext<KmUser, KmRole, int>
    {
        public KitchenMasterDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Direction> RecipeDirections { get; set; }
        public DbSet<RecipeIngredient> RecipeIngredients { get; set; }
        public DbSet<LikedRecipe> LikedRecipes { get; set; }
        public DbSet<Unit> Units { get; set; }
    }
}
