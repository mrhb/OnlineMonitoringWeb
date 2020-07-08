using FluentMigrator;
using System.Text;

namespace OnlineMonitoringWeb.Migrations.DefaultDB
{
        [Migration(20200405160500)]
        public class DefaultDB_20200405_160500_AddCapacityField_Unit : AutoReversingMigration
        {
            public override void Up()
            {
            Alter.Table("Unit").InSchema("hier")
                .AddColumn("Capacity").AsInt32().NotNullable()
                .WithDefaultValue(200);
        }

    }
    }