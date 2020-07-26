using AdysTech.InfluxDB.Client.Net;
using OnlineMonitoringWeb.DAL.MngDashboard;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineMonitoringWeb.DAL
{
    public class GaugeDataReader
    {
        static string InfluxUrl = "http://localhost:8086";
        static int a = 0;
        public static async Task<GaugeData> GaugeDataRead(DateTime start,DateTime End,section Section)
        {
            int rnd = 60;// (new Random()).Next(50, 80);

            var gaugedata = new GaugeData() {

                value = a,
                max = 100,
                min = 0,
                warning = rnd,
                alarm = 90// (new Random()).Next(rnd+10, 95)
            };
            a = a + 10;
            if (a > 90)
                a = 0;
            
           // InfluxDBClient client = new InfluxDBClient(InfluxUrl, "", "");
           // //List<String> dbNames = await client.GetInfluxDBNamesAsync();
           ////string sadf = "SELECT mean(\"Context_Switches_persec\") AS \"dadd\" FROM \"telegraf\".\"autogen\".\"win_system\" WHERE  time >'" + start.ToString("yyyy-MM-dd HH:mm:ss")+ "' - 270m  AND time <'" + End.ToString("yyyy-MM-dd HH:mm:ss") + "' - 270m GROUP BY time(1800000ms) FILL(previous)";
           //string measurmentQuery = "SELECT sum(\"ElecPower\") AS \"dadd\" FROM \"OnlineMonitoringDb\".\"autogen\".\"ModbusLogger\" WHERE   time >'" + start.ToString("yyyy-MM-dd HH:mm:ss")+ "' - 270m  AND time <'" + End.ToString("yyyy-MM-dd HH:mm:ss") + "' - 270m GROUP BY time(900000ms) FILL(null)";
           // //sadf="SHOW STATS";
           // measurmentQuery=measurmentQuery.Replace("WHERE", Section.Criteria());
           // var Series = await client.QueryMultiSeriesAsync("telegraf", measurmentQuery);

           // foreach (var entry in Series.FirstOrDefault().Entries)
           // {
           //     try
           //     {
           //         double i1 = 0;
           //         if (entry.Dadd != null)
           //         {
           //             i1=Convert.ToDouble(entry.Dadd);
           //     }
           //         DateTime time = entry.Time;
           //             users.series.Add(new data() { y = time, item1 = (entry.Dadd==null)? null:(int?)i1 });
           //         }
           //     catch
           //     { }


           // }



            return gaugedata;
        }

      
    }
}
