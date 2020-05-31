
namespace OnlineMonitoringWeb.Hierarchy.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Hierarchy.Area")]
    [BasedOnRow(typeof(Entities.AreaRow), CheckNames = true)]
    public class AreaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AreaId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String DistributionName { get; set; }
    }
}