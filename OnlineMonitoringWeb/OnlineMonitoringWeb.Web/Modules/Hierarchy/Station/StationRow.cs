
namespace OnlineMonitoringWeb.Hierarchy.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Hierarchy"), TableName("[hier].[Station]")]
    [DisplayName("Station"), InstanceName("Station")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Station")]
    public sealed class StationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Station Id"), Identity]
        public Int32? StationId
        {
            get { return Fields.StationId[this]; }
            set { Fields.StationId[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Area"), Column("AreaID"), NotNull, ForeignKey("[hier].[Area]", "AreaId"), LeftJoin("jArea"), TextualField("AreaName")]
        [LookupEditor(typeof(AreaRow))]
        public Int32? AreaId
        {
            get { return Fields.AreaId[this]; }
            set { Fields.AreaId[this] = value; }
        }

        [DisplayName("Area Name"), Expression("jArea.[Name]")]
        public String AreaName
        {
            get { return Fields.AreaName[this]; }
            set { Fields.AreaName[this] = value; }
        }

        [DisplayName("Area Distribution Id"), Expression("jArea.[DistributionID]")]
        public Int32? AreaDistributionId
        {
            get { return Fields.AreaDistributionId[this]; }
            set { Fields.AreaDistributionId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.StationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field StationId;
            public StringField Name;
            public Int32Field AreaId;

            public StringField AreaName;
            public Int32Field AreaDistributionId;
        }
    }
}
