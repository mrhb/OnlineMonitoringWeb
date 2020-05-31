
namespace OnlineMonitoringWeb.Hierarchy.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Hierarchy/Unit"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UnitRow))]
    public class UnitController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Hierarchy/Unit/UnitIndex.cshtml");
        }
    }
}