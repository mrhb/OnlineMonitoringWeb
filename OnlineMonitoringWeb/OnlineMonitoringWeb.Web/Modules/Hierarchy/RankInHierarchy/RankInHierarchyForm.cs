
namespace OnlineMonitoringWeb.Hierarchy.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Hierarchy.RankInHierarchy")]
    [BasedOnRow(typeof(Entities.RankInHierarchyRow), CheckNames = true)]
    public class RankInHierarchyForm
    {
        public Int32 UserId { get; set; }
        public Int32 RegionalId { get; set; }
        public Int32 DistributionId { get; set; }
        public Int32 AreaId { get; set; }
        public Int32 StationId { get; set; }
        public Int32 UnitId { get; set; }
    }
}