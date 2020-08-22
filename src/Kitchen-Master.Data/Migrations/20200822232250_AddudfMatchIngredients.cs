using Microsoft.EntityFrameworkCore.Migrations;

namespace Kitchen_Master.Data.Migrations
{
    public partial class AddudfMatchIngredients : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sql = @"CREATE FUNCTION [dbo].[udfMatchIngredients]
                        (
	                        @RecipeId INT,
	                        @SearchKeywords dbo.udtSearchKeywordsType READONLY
                        )
                        RETURNS INT
                        AS
                        BEGIN
	                        DECLARE @Matches INT
	                        SELECT  @Matches = count(*)
	                        FROM [dbo].[RecipeIngredients] ri
	                        JOIN [dbo].[Ingredients] i
	                        ON ri.IngredientId = i.Id
	                        JOIN @SearchKeywords sk
	                        ON i.Name like '%' + sk.Keyword + '%'
	                        WHERE ri.RecipeId = @RecipeId
	                        RETURN @Matches
                        END";
            migrationBuilder.Sql(sql);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP FUNCTION [dbo].[udfMatchIngredients]");
        }
    }
}
