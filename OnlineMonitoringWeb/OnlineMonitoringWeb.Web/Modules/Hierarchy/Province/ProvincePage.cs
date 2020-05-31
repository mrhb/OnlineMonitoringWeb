
namespace OnlineMonitoringWeb.Hierarchy.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Hierarchy/Province"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProvinceRow))]
    public class ProvinceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Hierarchy/Province/ProvinceIndex.cshtml");
        }
    }
}