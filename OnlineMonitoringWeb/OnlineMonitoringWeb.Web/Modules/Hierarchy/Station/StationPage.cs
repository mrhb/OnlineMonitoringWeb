
namespace OnlineMonitoringWeb.Hierarchy.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Hierarchy/Station"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StationRow))]
    public class StationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Hierarchy/Station/StationIndex.cshtml");
        }
    }
}