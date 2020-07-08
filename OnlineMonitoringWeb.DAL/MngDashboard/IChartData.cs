using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineMonitoringWeb.DAL.MngDashboard
{
  public class IChartData
    {

        public List<data> series = new List<data>();
    }
    public class data
        {
            public DateTime y;
            public int item1;
            public int item2;
        }
}
