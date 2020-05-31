using FluentMigrator;
using System.Text;

namespace OnlineMonitoringWeb.Migrations.DefaultDB
{
        [Migration(20200404153000)]
        public class DefaultDB_20200404_153000_Area : AutoReversingMigration
        {
        //هر امور ناحیه  به یک شرکت وزیع برق  تعلق دارد
            public override void Up()
            {
                Create.Table("Area").InSchema("hier")
                 .WithColumn("AreaId").AsInt32()
                     .Identity().PrimaryKey().NotNullable()
                    .WithColumn("Name").AsString(100).NotNullable()
             .WithColumn("DistributionID").AsInt32().NotNullable()
                 .ForeignKey("FK_Area_DistributionID", "hier", "Distribution", "DistributionId");
            }

        }
    }