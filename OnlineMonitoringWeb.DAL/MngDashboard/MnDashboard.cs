using AdysTech.InfluxDB.Client.Net;
using OnlineMonitoringWeb.DAL.MngDashboard;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineMonitoringWeb.DAL
{
    public class MnDashboard
    {
        static string InfluxUrl = "http://localhost:8086";
        public static async Task<IChartData> PowerData(DateTime start,DateTime End,section Section)
        {
            var users = new IChartData();

            InfluxDBClient client = new InfluxDBClient(InfluxUrl, "", "");
            //List<String> dbNames = await client.GetInfluxDBNamesAsync();
           //string sadf = "SELECT mean(\"Context_Switches_persec\") AS \"dadd\" FROM \"telegraf\".\"autogen\".\"win_system\" WHERE  time >'" + start.ToString("yyyy-MM-dd HH:mm:ss")+ "' - 270m  AND time <'" + End.ToString("yyyy-MM-dd HH:mm:ss") + "' - 270m GROUP BY time(1800000ms) FILL(previous)";
           string measurmentQuery = "SELECT sum(\"ElecPower\") AS \"dadd\" FROM \"OnlineMonitoringDb\".\"autogen\".\"ModbusLogger\" WHERE \"AreaID\"='3' AND time >'" + start.ToString("yyyy-MM-dd HH:mm:ss")+ "' - 270m  AND time <'" + End.ToString("yyyy-MM-dd HH:mm:ss") + "' - 270m GROUP BY time(1800000ms) FILL(previous)";
            //sadf="SHOW STATS";
            measurmentQuery.Replace("WHERE", Section.Criteria());
            var Series = await client.QueryMultiSeriesAsync("telegraf", measurmentQuery);

            foreach (var entry in Series.FirstOrDefault().Entries)
            {
                try
                {
                    double i1 = 0;
                    if (entry.Dadd != null)
                    {
                        i1=Convert.ToDouble(entry.Dadd);
                    }
                    DateTime time = entry.Time;
                        users.series.Add(new data() { y = time, item1 = (int)i1 });
                }
                catch
                { }


                //users.series.Clear();
                //int[] list = new int[] {10 ,15,23,25,27,29,30,45,55,42,41,35,39,30,20 };
                //for (int i=1;i<list.Count();i++)
                //{
                //    if(i<4 || i>8)
                //    users.series.Add(new data() { y = start.AddMinutes(10*i), item1 = list[i] });
                //}

            }

            return users;
        }

      
    }
}
