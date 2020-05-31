using FluentMigrator;
using System.Text;

namespace OnlineMonitoringWeb.Migrations.DefaultDB
{
        [Migration(20200404080500)]
        public class DefaultDB_20200404_080500_Regional : AutoReversingMigration
        {
            public override void Up()
            {
                Create.Schema("hier");

                Create.Table("Regional").InSchema("hier")
                 .WithColumn("RegionalId").AsInt32()
                     .Identity().PrimaryKey().NotNullable()
                    .WithColumn("Name").AsString(100).NotNullable();
            }

        }
    }