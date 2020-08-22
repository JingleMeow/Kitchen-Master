using Microsoft.EntityFrameworkCore.Migrations;

namespace Kitchen_Master.Data.Migrations
{
    public partial class AddudfCountRecipeLikes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sql = @"CREATE FUNCTION [dbo].[udfCountRecipeLikes]
                        (
	                        @RecipeId INT
                        )
                        RETURNS INT
                        AS
                        BEGIN
	                        DECLARE @Likes INT
	                        SELECT  @Likes = count(*)
	                        FROM [dbo].[LikedRecipes] lr
	                        WHERE lr.RecipeId = @RecipeId
	                        RETURN @Likes
                        END";
            migrationBuilder.Sql(sql);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP FUNCTION [dbo].[udfCountRecipeLikes]");
        }
    }
}
