using FluentMigrator;
using System.Text;

namespace OnlineMonitoringWeb.Migrations.DefaultDB
{
        [Migration(20200404165000)]
        public class DefaultDB_20200404_165000_Unit : AutoReversingMigration
        {
        //هر واحد تولید برق  به تعلق ایستگاه دارد
        public override void Up()
            {
                Create.Table("Unit").InSchema("hier")
                 .WithColumn("UnitId").AsInt32()
                     .Identity().PrimaryKey().NotNullable()
                    .WithColumn("Name").AsString(100).NotNullable()
             .WithColumn("StationID").AsInt32().NotNullable()
                 .ForeignKey("FK_Unit_StationID", "hier", "Station", "StationId");
            }

        }
    }