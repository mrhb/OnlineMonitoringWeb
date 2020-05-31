using FluentMigrator;
using System.Text;

namespace OnlineMonitoringWeb.Migrations.DefaultDB
{
        [Migration(20200406103000)]
        public class DefaultDB_20200406_103000_RankInHierarchy : AutoReversingMigration
        {
        //جدول ارتباط بین کاربرها و سلسله مراتب برق منطقه ای ، توزیع ها و ...
        public override void Up()
            {
            Create.Table("RankInHierarchy").InSchema("hier")
             .WithColumn("RankId").AsInt32()
                 .Identity().PrimaryKey().NotNullable()
                

                  .WithColumn("UserID").AsInt32().NotNullable()
               .ForeignKey("FK_RankInHierarchy_UserID", "dbo", "Users", "UserId")

            .WithColumn("RegionalID").AsInt32().Nullable()
                 .ForeignKey("FK_RankInHierarchy_RegionalID", "hier", "Regional", "RegionalId")

            .WithColumn("DistributionID").AsInt32().Nullable()
             .ForeignKey("FK_RankInHierarchy_DistributionID", "hier", "Distribution", "DistributionId")

             .WithColumn("AreaID").AsInt32().Nullable()
             .ForeignKey("FK_RankInHierarchy_AreaID", "hier", "Area", "AreaId")

             .WithColumn("StationID").AsInt32().Nullable()
             .ForeignKey("FK_RankInHierarchy_StationID", "hier", "Station", "StationId")

             .WithColumn("UnitID").AsInt32().Nullable()
             .ForeignKey("FK_RankInHierarchy_UnitID", "hier", "Unit", "UnitId");

            }

        }
    }