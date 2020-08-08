using Microsoft.EntityFrameworkCore.Migrations;

namespace Kitchen_Master.Data.Migrations
{
    public partial class ChangeDirectionTableName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Direction",
                table: "RecipeDirections");

            migrationBuilder.AddColumn<string>(
                name: "Text",
                table: "RecipeDirections",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Text",
                table: "RecipeDirections");

            migrationBuilder.AddColumn<string>(
                name: "Direction",
                table: "RecipeDirections",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
