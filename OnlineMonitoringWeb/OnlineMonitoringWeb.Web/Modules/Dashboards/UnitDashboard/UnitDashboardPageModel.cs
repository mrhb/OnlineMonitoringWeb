
using OnlineMonitoringWeb.DAL.MngDashboard;
using System.Collections.Generic;

namespace OnlineMonitoringWeb.Dashboards
{
    public class UnitDashboardPageModel
    {
       
        public int OperatingUnitsCapacity { get; set; }
        public int TotalUnitsCapacity { get; set; }
        public int OperatingUnitCount { get; set; }
        public int TotalUnitsCount { get; set; }
        public string UserDisplayName{ get; set; }
        public section ActiveSection { get; set; }
        public List<section> Subdivisions { get; set; }
    }
}