
namespace OnlineMonitoringWeb.Hierarchy.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Hierarchy/Regional"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RegionalRow))]
    public class RegionalController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Hierarchy/Regional/RegionalIndex.cshtml");
        }
    }
}