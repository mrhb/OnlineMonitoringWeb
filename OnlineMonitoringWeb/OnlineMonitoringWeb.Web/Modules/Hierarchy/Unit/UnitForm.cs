
namespace OnlineMonitoringWeb.Hierarchy.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Hierarchy.Unit")]
    [BasedOnRow(typeof(Entities.UnitRow), CheckNames = true)]
    public class UnitForm
    {
        public String Name { get; set; }
        public Int32 StationId { get; set; }
        public Int32 Capacity { get; set; }
        public Int32 Type { get; set; }
        public String StringIp { get; set; }
    }
}