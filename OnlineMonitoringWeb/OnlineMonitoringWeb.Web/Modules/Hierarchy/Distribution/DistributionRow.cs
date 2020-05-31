
namespace OnlineMonitoringWeb.Hierarchy.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Hierarchy"), TableName("[hier].[Distribution]")]
    [DisplayName("Distribution"), InstanceName("Distribution")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Distribution")]
    public sealed class DistributionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Distribution Id"), Identity]
        public Int32? DistributionId
        {
            get { return Fields.DistributionId[this]; }
            set { Fields.DistributionId[this] = value; }
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
            get { return Fields.DistributionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DistributionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DistributionId;
            public StringField Name;
            public Int32Field RegionalId;

            public StringField RegionalName;
        }
    }
}
