
namespace OnlineMonitoringWeb.Hierarchy.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Hierarchy"), TableName("[hier].[Area]")]
    [DisplayName("Area"), InstanceName("Area")]
    [ReadPermission(PermissionKeys.ViewHierarchy)]
    [ModifyPermission(PermissionKeys.ModifyHierarchy)]
    [LookupScript("Default.Area")]
    public sealed class AreaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Area Id"), Identity]
        public Int32? AreaId
        {
            get { return Fields.AreaId[this]; }
            set { Fields.AreaId[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Distribution"), Column("DistributionID"), NotNull, ForeignKey("[hier].[Distribution]", "DistributionId"), LeftJoin("jDistribution"), TextualField("DistributionName")]
        [LookupEditor(typeof(DistributionRow))]
        public Int32? DistributionId
        {
            get { return Fields.DistributionId[this]; }
            set { Fields.DistributionId[this] = value; }
        }

        [DisplayName("Distribution Name"), Expression("jDistribution.[Name]")]
        public String DistributionName
        {
            get { return Fields.DistributionName[this]; }
            set { Fields.DistributionName[this] = value; }
        }

        [DisplayName("Distribution Regional Id"), Expression("jDistribution.[RegionalID]")]
        public Int32? DistributionRegionalId
        {
            get { return Fields.DistributionRegionalId[this]; }
            set { Fields.DistributionRegionalId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AreaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AreaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AreaId;
            public StringField Name;
            public Int32Field DistributionId;

            public StringField DistributionName;
            public Int32Field DistributionRegionalId;
        }
    }
}
