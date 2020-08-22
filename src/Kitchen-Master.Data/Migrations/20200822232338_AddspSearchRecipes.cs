using Microsoft.EntityFrameworkCore.Migrations;

namespace Kitchen_Master.Data.Migrations
{
    public partial class AddspSearchRecipes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sql = @"CREATE PROCEDURE [dbo].[spSearchRecipes] 
							@QueryText NVARCHAR(200),
							@Difficulty INT,
							@Spicy INT
						AS
						BEGIN
							-- SET NOCOUNT ON added to prevent extra result sets from
							-- interfering with SELECT statements.
							SET NOCOUNT ON;
	
							DECLARE @SearchKeywords dbo.udtSearchKeywordsType;

							INSERT INTO @SearchKeywords
							SELECT value as Keyword
							FROM STRING_SPLIT(@queryText, ' ');

							SELECT RecipeAbstract.Id, Name, CoverImageId, Difficulty, Spicy, CreatedTime, AuthorId, u.FirstName + ' ' + u.LastName AS AuthorName, Likes
							FROM (
								SELECT r.Id, r.Name, r.CoverImageId, r.Difficulty, r.Spicy, r.CreatedTime, r.AuthorId,
									dbo.udfCountRecipeLikes(r.id) as Likes,
									dbo.udfMatchRecipeName(r.Name, @SearchKeywords) AS NameMatches,
									dbo.udfMatchIngredients(r.id, @SearchKeywords) AS IngredientMatches
								FROM [dbo].[Recipes] r
								WHERE (@difficulty IS NULL OR r.Difficulty = @difficulty)
									AND (@spicy IS NULL OR r.Spicy = @spicy)
							) AS RecipeAbstract
							INNER JOIN [dbo].[AspNetUsers] u
							ON AuthorId = u.Id
							WHERE NameMatches > 0 OR IngredientMatches > 0
							ORDER BY NameMatches desc, IngredientMatches desc
						END";
            migrationBuilder.Sql(sql);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP PROCEDURE [dbo].[spSearchRecipes]");
        }
    }
}
