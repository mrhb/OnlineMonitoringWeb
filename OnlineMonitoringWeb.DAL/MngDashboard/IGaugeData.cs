using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineMonitoringWeb.DAL.MngDashboard
{
    public class GaugeData 
    {
        public int? value;
        public int min;
        public int max;
        public int warning;
        public int alarm;
    }
    public interface IGaugeData
    {
             int? value { get; }
             int min { get; }
    int max { get; }
    int Alarm { get; }
    int Warning { get; }

}
}
