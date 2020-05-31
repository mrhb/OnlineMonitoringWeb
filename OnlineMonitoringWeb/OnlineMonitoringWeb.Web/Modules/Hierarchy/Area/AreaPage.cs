
namespace OnlineMonitoringWeb.Hierarchy.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Hierarchy/Area"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AreaRow))]
    public class AreaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Hierarchy/Area/AreaIndex.cshtml");
        }
    }
}