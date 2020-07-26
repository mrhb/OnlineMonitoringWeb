
namespace OnlineMonitoringWeb.Dashboards.Pages
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
    using Common.Pages;

    [RoutePrefix("UnitDashboard"), Route("{action=UnitDashboard}")]
    public class UnitDashboardController : Controller
    {
        hierarchyInfo hierarchyInfo;

         [Authorize, HttpGet, Route("~/Dashboards/")]
        public ActionResult UnitDashboard()
        {

             hierarchyInfo = new hierarchyInfo(Authorization.UserId);

            return Overview(hierarchyInfo);
        }


        [Authorize, HttpGet, Route("~/Dashboards/Overview/")]
        public ActionResult Overview(hierarchyInfo HierarchyInfo)//, Hierarchy hier)
        {
            var model = new UnitDashboardPageModel();
                         
            model.TotalUnitsCapacity = HierarchyInfo.SubdivisionUnits.Sum(item=> (int)item.Capacity);
            model.TotalUnitsCount = HierarchyInfo.SubdivisionUnits.Count();
            model.OperatingUnitsCapacity = model.TotalUnitsCapacity;
            model.OperatingUnitCount = model.TotalUnitsCount;
            model.UserDisplayName = Authorization.UserDefinition.DisplayName;
            model.ActiveSection = HierarchyInfo.TopSection;
            model.Subdivisions = hierarchyInfo.Subdivisions;
          
            return View(MVC.Views.Dashboards.UnitDashboard.UnitDashboardIndex, model);
        }
        [Authorize, HttpGet, Route("~/Dashboards/dbnames")]
        public async System.Threading.Tasks.Task<ActionResult> TodayPowerData()
        {
            hierarchyInfo = new hierarchyInfo(Authorization.UserId);

            var sdf = await MnDashboard.PowerData( DateTime.Now.AddDays(-1), DateTime.Now, hierarchyInfo.TopSection);

            return Json(sdf.series, JsonRequestBehavior.AllowGet);
        }
        [Authorize, HttpGet, Route("~/Dashboards/TimeseriesAPI/id={id}")]
        public async System.Threading.Tasks.Task<ActionResult> TimeseriesAPI(int id)
        {
            hierarchyInfo = new hierarchyInfo(Authorization.UserId);

            var sdf = await MnDashboard.PowerData(DateTime.Now.Subtract(DateTime.Now.TimeOfDay).AddDays(-7), DateTime.Now, hierarchyInfo.TopSection);

            return Json(sdf.series, JsonRequestBehavior.AllowGet);
        }


        [Authorize, HttpGet, Route("~/Dashboards/dbnames2")]
        public async System.Threading.Tasks.Task<ActionResult> ThisWeekPowerData()
        {
            hierarchyInfo = new hierarchyInfo(Authorization.UserId);
            var sdf = await MnDashboard.PowerData(DateTime.Now.Subtract(DateTime.Now.TimeOfDay).AddDays(-7), DateTime.Now, hierarchyInfo.TopSection);

            return Json(sdf.series, JsonRequestBehavior.AllowGet);
        }





        [Authorize, HttpGet, Route("~/Dashboards/UnitGaugeAPI/id={id}")]
        public async System.Threading.Tasks.Task<ActionResult> UnitGaugeAPI(int id)
        {
            hierarchyInfo = new hierarchyInfo(Authorization.UserId);

            var data = await GaugeDataReader.GaugeDataRead(DateTime.Now.Subtract(DateTime.Now.TimeOfDay).AddDays(-7), DateTime.Now, hierarchyInfo.TopSection);

            return Json(data, JsonRequestBehavior.AllowGet);
        }



    }
  
}
