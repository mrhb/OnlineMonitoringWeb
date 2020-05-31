
namespace OnlineMonitoringWeb.Hierarchy.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Hierarchy.Regional")]
    [BasedOnRow(typeof(Entities.RegionalRow), CheckNames = true)]
    public class RegionalColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RegionalId { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}