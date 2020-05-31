
namespace OnlineMonitoringWeb.Hierarchy.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Hierarchy/RankInHierarchy"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RankInHierarchyRow))]
    public class RankInHierarchyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Hierarchy/RankInHierarchy/RankInHierarchyIndex.cshtml");
        }
    }
}