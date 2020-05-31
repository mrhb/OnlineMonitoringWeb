
namespace OnlineMonitoringWeb.Hierarchy.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Hierarchy.Area")]
    [BasedOnRow(typeof(Entities.AreaRow), CheckNames = true)]
    public class AreaForm
    {
        public String Name { get; set; }
        public Int32 DistributionId { get; set; }
    }
}