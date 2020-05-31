
namespace OnlineMonitoringWeb.Hierarchy.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Hierarchy/Distribution"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DistributionRow))]
    public class DistributionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Hierarchy/Distribution/DistributionIndex.cshtml");
        }
    }
}