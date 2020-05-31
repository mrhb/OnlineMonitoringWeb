
namespace OnlineMonitoringWeb.Common
{
    public class DashboardPageModel
    {
       
        public int OperatingUnitsCapacity { get; set; }
        public int TotalUnitsCapacity { get; set; }
        public int OperatingUnitCount { get; set; }
        public int TotalUnitsCount { get; set; }
        public string UserDisplayName{ get; set; }
    }
}