
namespace OnlineMonitoringWeb.Hierarchy.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Hierarchy.Station")]
    [BasedOnRow(typeof(Entities.StationRow), CheckNames = true)]
    public class StationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 StationId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String AreaName { get; set; }
    }
}