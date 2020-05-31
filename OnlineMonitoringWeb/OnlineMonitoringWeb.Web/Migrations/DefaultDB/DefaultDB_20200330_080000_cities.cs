using FluentMigrator;

namespace OnlineMonitoringWeb.Migrations.DefaultDB
{
    [Migration(20200330080000)]
    public class DefaultDB_20200330_080000_cities : Migration
    {
        public override void Up()
        {
            Create.Table("City").InSchema("seq")
             .WithColumn("cityID").AsInt32()
                 .Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(100).NotNullable()
                 .WithColumn("ProvinceID").AsInt32().NotNullable()
                 .ForeignKey("FK_CityProvince_ProvinceID", "seq", "Province", "ProvinceID");
       }
        public override void Down()
        {
        }

    }
}