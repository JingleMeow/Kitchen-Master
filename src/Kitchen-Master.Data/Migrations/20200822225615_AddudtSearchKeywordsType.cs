using Microsoft.EntityFrameworkCore.Migrations;

namespace Kitchen_Master.Data.Migrations
{
    public partial class AddudtSearchKeywordsType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sql = @"CREATE TYPE [dbo].[udtSearchKeywordsType] AS TABLE(
	                        [Keyword] [nvarchar](50) NOT NULL
                        )";
            migrationBuilder.Sql(sql);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP TYPE [dbo].[udtSearchKeywordsType]");
        }
    }
}
