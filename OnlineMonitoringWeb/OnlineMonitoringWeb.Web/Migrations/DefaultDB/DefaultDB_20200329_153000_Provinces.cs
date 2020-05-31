using FluentMigrator;

namespace OnlineMonitoringWeb.Migrations.DefaultDB
{
    [Migration(20200329153000)]
    public class DefaultDB_20200329_153000_Provinces : Migration
    {
        public override void Up()
        {
           
            Create.Schema("seq");

            Create.Table("Province").InSchema("seq")
             .WithColumn("ProvinceID").AsInt32()
                 .Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(100).NotNullable();
               
      }
        public override void Down()
        {
        }

    }
}