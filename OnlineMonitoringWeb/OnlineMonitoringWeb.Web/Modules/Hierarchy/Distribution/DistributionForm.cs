
namespace OnlineMonitoringWeb.Hierarchy.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Hierarchy.Distribution")]
    [BasedOnRow(typeof(Entities.DistributionRow), CheckNames = true)]
    public class DistributionForm
    {
        public String Name { get; set; }
        public Int32 RegionalId { get; set; }
    }
}