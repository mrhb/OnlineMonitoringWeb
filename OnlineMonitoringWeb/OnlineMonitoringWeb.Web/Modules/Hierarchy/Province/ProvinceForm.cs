
namespace OnlineMonitoringWeb.Hierarchy.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Hierarchy.Province")]
    [BasedOnRow(typeof(Entities.ProvinceRow), CheckNames = true)]
    public class ProvinceForm
    {
        public String Name { get; set; }
        public Int32 RegionalId { get; set; }
    }
}