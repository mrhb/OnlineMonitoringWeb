
namespace OnlineMonitoringWeb.Common.Pages
{
    using OnlineMonitoringWeb.Hierarchy.Entities;
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Web.Mvc;

    using System.Linq;
    using System.Collections.Generic;
    using AdysTech.InfluxDB.Client.Net;
    using DAL;
    using DAL.MngDashboard;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
     
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {

            hierarchyInfo hierarchyInfo = new hierarchyInfo(Authorization.UserId);

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
        [Authorize, HttpGet, Route("~/dbnames")]
        public async System.Threading.Tasks.Task<ActionResult> TodayPowerData()
        {
           var sdf = await MnDashboard.PowerData( DateTime.Now.AddDays(-1), DateTime.Now);

            return Json(sdf.series, JsonRequestBehavior.AllowGet);
        }


        [Authorize, HttpGet, Route("~/dbnames2")]
        public async System.Threading.Tasks.Task<ActionResult> ThisWeekPowerData()
        {
            var sdf = await MnDashboard.PowerData(DateTime.Now.Subtract(DateTime.Now.TimeOfDay).AddDays(-7), DateTime.Now);

            return Json(sdf.series, JsonRequestBehavior.AllowGet);
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
