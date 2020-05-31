
namespace OnlineMonitoringWeb.Hierarchy.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Hierarchy.RankInHierarchy")]
    [BasedOnRow(typeof(Entities.RankInHierarchyRow), CheckNames = true)]
    public class RankInHierarchyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Width(50, Max = 70, Min = 25)]
        public Int32 RankId { get; set; }
        [Width(100, Max = 150, Min = 50)]
        public String UserUsername { get; set; }
        [Width(150, Max = 400, Min = 100)]
        public String RegionalName { get; set; }
        [Width(150, Max = 400, Min = 100)]
        public String DistributionName { get; set; }
        [Width(150, Max = 400, Min = 100)]
        public String AreaName { get; set; }
        [Width(150, Max = 400, Min = 100)]
        public String StationName { get; set; }
        [Width(150, Max = 400, Min = 100)]
        public String UnitName { get; set; }
    }
}