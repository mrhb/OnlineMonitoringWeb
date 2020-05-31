
namespace OnlineMonitoringWeb.Hierarchy.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Hierarchy"), TableName("[hier].[Province]")]
    [DisplayName("Province"), InstanceName("Province")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ProvinceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Province Id"), Identity]
        public Int32? ProvinceId
        {
            get { return Fields.ProvinceId[this]; }
            set { Fields.ProvinceId[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Regional"), Column("RegionalID"), NotNull, ForeignKey("[hier].[Regional]", "RegionalId"), LeftJoin("jRegional"), TextualField("RegionalName")]
        [LookupEditor(typeof(RegionalRow))]
        public Int32? RegionalId
        {
            get { return Fields.RegionalId[this]; }
            set { Fields.RegionalId[this] = value; }
        }

        [DisplayName("Regional Name"), Expression("jRegional.[Name]")]
        public String RegionalName
        {
            get { return Fields.RegionalName[this]; }
            set { Fields.RegionalName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProvinceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProvinceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProvinceId;
            public StringField Name;
            public Int32Field RegionalId;

            public StringField RegionalName;
        }
    }
}
