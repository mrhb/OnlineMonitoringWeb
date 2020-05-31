using FluentMigrator;
using System.Text;

namespace OnlineMonitoringWeb.Migrations.DefaultDB
{
        [Migration(20200404111700)]
        public class DefaultDB_20200404_111700_Province : AutoReversingMigration
        {
        //هر استان به یک برق منطقه ای تعلق دارد
            public override void Up()
            {
                Create.Table("Province").InSchema("hier")
                 .WithColumn("ProvinceId").AsInt32()
                 .Identity().PrimaryKey().NotNullable()
                 .WithColumn("Name").AsString(100).NotNullable()
             .WithColumn("RegionalID").AsInt32().NotNullable()
                 .ForeignKey("FK_Province_RegionalID", "hier", "Regional", "RegionalId");

            //Insert.IntoTable("Province").InSchema("hier").Row(new
            //    {
            //        Name = Encoding.Unicode.GetBytes("خراسان رضوی")
            //    });
            //    Insert.IntoTable("Province").InSchema("hier").Row(new
            //    {
            //        Name = Encoding.Unicode.GetBytes("آذربایجان غربی")
            //    });
            //    Insert.IntoTable("Province").InSchema("hier").Row(new
            //    {
            //        Name = Encoding.Unicode.GetBytes("آذربایجان شرقی")
            //    });

           }

        }
    }