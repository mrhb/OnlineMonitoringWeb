using FluentMigrator;
using System.Text;

namespace OnlineMonitoringWeb.Migrations.DefaultDB
{
        [Migration(20200708094000)]
        public class DefaultDB_20200708_094000_AddTypAndIp_Unit : AutoReversingMigration
        {
            public override void Up()
            {
            Alter.Table("Unit").InSchema("hier")
                .AddColumn("Type").AsInt32().NotNullable()
                .WithDefaultValue(2)
                  .AddColumn("StringIp").AsFixedLengthString(15).Nullable();
        }

    }
    }