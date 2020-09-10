using Kitchen_Master.Data.Models;
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
        public DbSet<UserMenu> UserMenus { get; set; }
        public DbSet<MenuHistory> MenuHistory { get; set; }
        public DbSet<MenuRecipe> MenuRecipes { get; set; }
        public DbSet<Unit> Units { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<RecipeAbstract>().HasNoKey().ToView(null);
            builder.Entity<UserMenu>().HasKey(x => new { x.UserId, x.RecipeId });
            builder.Entity<MenuRecipe>().HasKey(x => new { x.MenuId, x.RecipeId });
        }
    }
}
