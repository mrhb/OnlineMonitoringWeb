
namespace OnlineMonitoringWeb.Hierarchy.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Hierarchy.Station")]
    [BasedOnRow(typeof(Entities.StationRow), CheckNames = true)]
    public class StationForm
    {
        public String Name { get; set; }
        public Int32 AreaId { get; set; }
    }
}