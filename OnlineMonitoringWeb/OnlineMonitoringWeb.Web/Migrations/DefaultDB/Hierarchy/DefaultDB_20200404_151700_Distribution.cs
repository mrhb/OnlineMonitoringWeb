using FluentMigrator;
using System.Text;

namespace OnlineMonitoringWeb.Migrations.DefaultDB
{
        [Migration(20200404151700)]
        public class DefaultDB_20200404_151700_Distribution : AutoReversingMigration
        {
        //هر توزیع  به یک برق منطقه ای تعلق دارد
            public override void Up()
            {
                Create.Table("Distribution").InSchema("hier")
                 .WithColumn("DistributionId").AsInt32()
                     .Identity().PrimaryKey().NotNullable()
                    .WithColumn("Name").AsString(100).NotNullable()
             .WithColumn("RegionalID").AsInt32().NotNullable()
                 .ForeignKey("FK_Distribution_RegionalID", "hier", "Regional", "RegionalId");
            }

        }
    }