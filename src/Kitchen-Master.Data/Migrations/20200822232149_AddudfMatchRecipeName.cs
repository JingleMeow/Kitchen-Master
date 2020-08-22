using Microsoft.EntityFrameworkCore.Migrations;

namespace Kitchen_Master.Data.Migrations
{
    public partial class AddudfMatchRecipeName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sql = @"CREATE FUNCTION [dbo].[udfMatchRecipeName]
                        (
	                        @RecipeName NVARCHAR(200),
	                        @SearchKeywords dbo.udtSearchKeywordsType READONLY
                        )
                        RETURNS INT
                        AS
                        BEGIN
	                        DECLARE @Matches INT
	                        SELECT @Matches = count(Keyword) FROM @SearchKeywords
	                        WHERE @RecipeName LIKE '%' + Keyword + '%'
	                        RETURN @Matches
                        END";
            migrationBuilder.Sql(sql);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP FUNCTION [dbo].[udfMatchRecipeName]");
        }
    }
}
