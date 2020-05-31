
namespace OnlineMonitoringWeb.Hierarchy.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Hierarchy.Regional")]
    [BasedOnRow(typeof(Entities.RegionalRow), CheckNames = true)]
    public class RegionalForm
    {
        public String Name { get; set; }
    }
}