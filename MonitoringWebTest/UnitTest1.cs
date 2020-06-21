using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OnlineMonitoringWeb;
using OnlineMonitoringWeb.Hierarchy.Entities;
using OnlineMonitoringWeb.Common.Pages;
using AdysTech.InfluxDB.Client.Net;
using System.Collections.Generic;

namespace MonitoringWebTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public async void TestMethod1()
        {
            InfluxDBClient client = new InfluxDBClient("http://localhost:8086", "", "");
            List<String> dbNames = await client.GetInfluxDBNamesAsync();


            var r = await client.GetContinuousQueriesAsync();
            Console.WriteLine(r);

        }
    }
}
