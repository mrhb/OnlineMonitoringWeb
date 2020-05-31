
using Serenity.Extensibility;
using System.ComponentModel;

namespace OnlineMonitoringWeb.Hierarchy
{
    [NestedPermissionKeys]
    [DisplayName("Hierarchy")]
    public class PermissionKeys
    {
        [Description("view regionals,Provinces,Areas and ...")]
        public const string ViewHierarchy = "Hierarchy:view";
        [Description("Modify regionals,Provinces,Areas and ...")]
        public const string ModifyHierarchy = "Hierarchy:modify";
    }
}
