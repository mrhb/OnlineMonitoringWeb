
namespace OnlineMonitoringWeb.Common.Pages
{
    using OnlineMonitoringWeb.Hierarchy.Entities;
    using Serenity;
    using Serenity.Data;
    using System.Net;
    using System.Web.Mvc;

    using System.Linq;
    using System.Collections.Generic;
 

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
       // private InfluxDBClient clientDb;

        public DashboardController()
        {
            // API Address, Account, Password for Connecting Influx Db
            var infuxUrl = "http://localhost:8086/";
            var infuxUser = "admin";
            var infuxPwd = "admin";

            // Create an instance of Influx DbClient
            //clientDb = new InfluxDBClient(infuxUrl, infuxUser, infuxPwd, InfluxDbVersion.Latest);
        }

        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {

            hierarchyInfo hierarchyInfo = new hierarchyInfo(Serenity.Authorization.UserId);

            return Overview(hierarchyInfo);
        }


        [Authorize, HttpGet, Route("~/Overview/")]
        public ActionResult Overview(hierarchyInfo HierarchyInfo)//, Hierarchy hier)
        {
            var model = new DashboardPageModel();
                         
            model.TotalUnitsCapacity = HierarchyInfo.SubdivisionUnits.Sum(item=> (int)item.Capacity);
            model.TotalUnitsCount = HierarchyInfo.SubdivisionUnits.Count();
            model.OperatingUnitsCapacity = model.TotalUnitsCapacity;
            model.OperatingUnitCount = model.TotalUnitsCount;
          
            return View(MVC.Views.Common.Dashboard.DashboardIndex, model);
        }

        [Authorize, HttpGet, Route("~/createChartData")]
        public ActionResult createChartData()
        {

            var users = data.Getdata();
            return Json(users, JsonRequestBehavior.AllowGet);
        }
        class data
        {
            public   string y;
            public int item1;
            public int item2;

            public static List<data> Getdata()
            {
                var usersList = new List<data>
            {
                new data{ y= "2011 Q1", item1= 2666, item2= 2666 },
                new data{ y= "2011 Q2", item1= 2778, item2= 2294 },
                new data{ y= "2011 Q3", item1= 4912, item2= 1969 },
                new data{ y= "2011 Q4", item1= 3767, item2= 3597 },
                new data{ y= "2012 Q1", item1= 6810, item2= 1914 },
                new data{ y= "2012 Q2", item1= 5670, item2= 4293 },
                new data{ y= "2012 Q3", item1= 4820, item2= 3795 },
                new data{ y= "2012 Q4", item1= 15073, item2= 5967 },
                new data{ y= "2013 Q1", item1= 10687, item2= 4460 },
                new data{ y= "2013 Q2", item1= 8432, item2= 5713 }
            };

                return usersList;
            }

        }

    }

    public class hierarchyInfo
    {
       public List<UnitRow> SubdivisionUnits { get; set; }
        public hierarchyInfo()
        {
        }
        public hierarchyInfo(string userId)
        {

            var o = RankInHierarchyRow.Fields;
            using (var conn = SqlConnections.NewFor<RankInHierarchyRow>())
            {
                var mm = RankInHierarchyRow.Fields;
                var RankRow = conn.First<RankInHierarchyRow>(mm.UserId == userId);



                var u = UnitRow.Fields.As("u");
                var s = StationRow.Fields.As("s");
                var a = AreaRow.Fields.As("a");
                var d = DistributionRow.Fields.As("d");
                var r = RegionalRow.Fields.As("r");
                var query = new SqlQuery()
                            .From(u)
                             .Select("*")
                             .LeftJoin(s, s.StationId == u.StationId)
                             .LeftJoin(a, a.AreaId== s.AreaId)
                             .LeftJoin(d, d.DistributionId== a.AreaId)
                             .LeftJoin(r, r.RegionalId == d.RegionalId);
                if (RankRow.StationId != null)
                    query.Where(s.StationId == (int)RankRow.StationId);
                if (RankRow.AreaId != null)
                    query.Where(a.AreaId == (int)RankRow.AreaId);
                if (RankRow.DistributionId != null)
                    query.Where(d.DistributionId == (int)RankRow.DistributionId);
                if (RankRow.RegionalId != null)
                    query.Where(r.RegionalId == (int)RankRow.RegionalId);

                SubdivisionUnits = conn.Query<UnitRow>(query).ToList();

                sectionId = RankRow.DistributionId ?? -1;
                section = Hierarchy.Area;



            }
        }
        public int sectionId { get; set; }
        public Hierarchy section { get; set; }

        public enum Hierarchy
        {
            Regional = 0,
            Distribution = 1,
            Area = 2,
            Station = 3,
            Unit = 4,
        }

        public string UnitSelectionQuery()
        {
            var u = UnitRow.Fields.As("u");
            var s = StationRow.Fields.As("s");
            var a = AreaRow.Fields.As("a");
            var d = DistributionRow.Fields.As("d");
            var r = RegionalRow.Fields.As("r");
            var query = new SqlQuery()
                        .From(u)
                         .Select("*")
                         .LeftJoin(s, s.StationId == u.StationId);

            query.Where(s.StationId == 2);
            //.InnerJoin((new Alias("[hier].[Area]", "Area"))
            //  ,new Criteria("Stion", a.AreaId)==new Criteria( s.AreaId))
            //.InnerJoin((new Alias("[hier].[Distribution]", "Distribution")),a.DistributionId==d.DistributionId)
            //.InnerJoin((new Alias("[hier].[Regional]", "Regional")),d.RegionalId==r.RegionalId)

            return query.ToString();

        }
    }
}
