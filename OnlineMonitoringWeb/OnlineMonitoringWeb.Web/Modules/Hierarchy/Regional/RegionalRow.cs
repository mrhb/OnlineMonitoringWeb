
namespace OnlineMonitoringWeb.Hierarchy.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Hierarchy"), TableName("[hier].[Regional]")]
    [DisplayName("Regional"), InstanceName("Regional")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Regional")]
    public sealed class RegionalRow : Row, IIdRow, INameRow
    {
        [DisplayName("Regional Id"), Identity]
        public Int32? RegionalId
        {
            get { return Fields.RegionalId[this]; }
            set { Fields.RegionalId[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RegionalId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RegionalRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RegionalId;
            public StringField Name;
        }
    }
}
