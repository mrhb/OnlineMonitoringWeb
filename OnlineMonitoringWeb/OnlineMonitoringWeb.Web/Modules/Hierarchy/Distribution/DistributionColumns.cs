
namespace OnlineMonitoringWeb.Hierarchy.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Hierarchy.Distribution")]
    [BasedOnRow(typeof(Entities.DistributionRow), CheckNames = true)]
    public class DistributionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DistributionId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String RegionalName { get; set; }
    }
}