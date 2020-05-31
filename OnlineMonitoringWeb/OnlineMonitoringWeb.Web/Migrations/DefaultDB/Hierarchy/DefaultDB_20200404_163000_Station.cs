using FluentMigrator;
using System.Text;

namespace OnlineMonitoringWeb.Migrations.DefaultDB
{
        [Migration(20200404163000)]
        public class DefaultDB_20200404_163000_Station : AutoReversingMigration
        {
        //هر ایستگاه به یک امور ناحیه  تعلق دارد
        public override void Up()
            {
                Create.Table("Station").InSchema("hier")
                 .WithColumn("StationId").AsInt32()
                     .Identity().PrimaryKey().NotNullable()
                    .WithColumn("Name").AsString(100).NotNullable()
             .WithColumn("AreaID").AsInt32().NotNullable()
                 .ForeignKey("FK_Station_AreaID", "hier", "Area", "AreaId");
            }

        }
    }