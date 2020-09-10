using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Kitchen_Master.Data.Migrations
{
    public partial class AddMenuHistory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MenuHistory",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MenuName = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false),
                    RecipeCount = table.Column<int>(nullable: false),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuHistory", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MenuHistory_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MenuRecipes",
                columns: table => new
                {
                    MenuId = table.Column<int>(nullable: false),
                    RecipeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuRecipes", x => new { x.MenuId, x.RecipeId });
                    table.ForeignKey(
                        name: "FK_MenuRecipes_MenuHistory_MenuId",
                        column: x => x.MenuId,
                        principalTable: "MenuHistory",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MenuRecipes_Recipes_RecipeId",
                        column: x => x.RecipeId,
                        principalTable: "Recipes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MenuHistory_UserId",
                table: "MenuHistory",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_MenuRecipes_RecipeId",
                table: "MenuRecipes",
                column: "RecipeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MenuRecipes");

            migrationBuilder.DropTable(
                name: "MenuHistory");
        }
    }
}
