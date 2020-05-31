using FluentMigrator;
using System.Text;

namespace OnlineMonitoringWeb.Migrations.DefaultDB
{
        [Migration(20200405080500)]
        public class DefaultDB_20200405_080500_DataInitialization : AutoReversingMigration
        {
            public override void Up()
            {
            IfDatabase("SqlServer", "SqlServer2000", "SqlServerCe")
              .Execute.EmbeddedScript("OnlineMonitoringWeb.Migrations.DefaultDB.Hierarchy.DefaultDb_DataScript.sql");
              //"Serene1.Migrations.NorthwindDB.NorthwindDBScript_SqlServer.sql");






        }

    }
    }