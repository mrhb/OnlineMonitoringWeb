using AdysTech.InfluxDB.Client.Net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace InfluxdbQueryPrototype
{
    class Program
    {
        static  void Main(string[] args)
        {
            InfluxDBClient client = new InfluxDBClient("http://localhost:8086", "", "");
            //List<String> dbNames = await client.GetInfluxDBNamesAsync();
            string sadf = "SELECT mean(\"Context_Switches_persec\") AS \"dadd\" FROM \"telegraf\".\"autogen\".\"win_system\" WHERE time > now() - 5m GROUP BY time(5000ms) FILL(null)";
            //sadf="SHOW STATS";
            var query = client.QueryMultiSeriesAsync("telegraf", sadf);
            query.Wait();

            var resulrss = query.Result.FirstOrDefault().Entries;
  
            List<double> values = new List<double>();          

            foreach (var entry in resulrss)
            {               
                   if(entry.Dadd!=null)
                    values.Add(Convert.ToDouble(entry.Dadd));

            }

            Console.WriteLine(string.Join("_", values.Select(i => i.ToString()).ToArray()));
            Console.ReadKey();
        }
    }
}
