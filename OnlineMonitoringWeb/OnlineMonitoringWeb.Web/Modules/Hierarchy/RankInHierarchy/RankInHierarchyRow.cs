
namespace OnlineMonitoringWeb.Hierarchy.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Hierarchy"), TableName("[hier].[RankInHierarchy]")]
    [DisplayName("Rank In Hierarchy"), InstanceName("Rank In Hierarchy")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RankInHierarchyRow : Row, IIdRow
    {
        [DisplayName("Rank Id"), Identity]
        public Int32? RankId
        {
            get { return Fields.RankId[this]; }
            set { Fields.RankId[this] = value; }
        }

        [DisplayName("User"), Column("UserID"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        [LookupEditor(typeof(Administration.Entities.UserRow))]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Regional"), Column("RegionalID"), ForeignKey("[hier].[Regional]", "RegionalId"), LeftJoin("jRegional"), TextualField("RegionalName")]
        [LookupEditor(typeof(RegionalRow))]
        public Int32? RegionalId
        {
            get { return Fields.RegionalId[this]; }
            set { Fields.RegionalId[this] = value; }
        }

        [DisplayName("Distribution"), Column("DistributionID"), ForeignKey("[hier].[Distribution]", "DistributionId"), LeftJoin("jDistribution"), TextualField("DistributionName")]
        [LookupEditor(typeof(DistributionRow))]
        public Int32? DistributionId
        {
            get { return Fields.DistributionId[this]; }
            set { Fields.DistributionId[this] = value; }
        }

        [DisplayName("Area"), Column("AreaID"), ForeignKey("[hier].[Area]", "AreaId"), LeftJoin("jArea"), TextualField("AreaName")]
        [LookupEditor(typeof(AreaRow))]
        public Int32? AreaId
        {
            get { return Fields.AreaId[this]; }
            set { Fields.AreaId[this] = value; }
        }

        [DisplayName("Station"), Column("StationID"), ForeignKey("[hier].[Station]", "StationId"), LeftJoin("jStation"), TextualField("StationName")]
        [LookupEditor(typeof(StationRow))]
        public Int32? StationId
        {
            get { return Fields.StationId[this]; }
            set { Fields.StationId[this] = value; }
        }

        [DisplayName("Unit"), Column("UnitID"), ForeignKey("[hier].[Unit]", "UnitId"), LeftJoin("jUnit"), TextualField("UnitName")]
        [LookupEditor(typeof(UnitRow))]
        public Int32? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String UserUsername
        {
            get { return Fields.UserUsername[this]; }
            set { Fields.UserUsername[this] = value; }
        }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
        public String UserDisplayName
        {
            get { return Fields.UserDisplayName[this]; }
            set { Fields.UserDisplayName[this] = value; }
        }

        [DisplayName("User Email"), Expression("jUser.[Email]")]
        public String UserEmail
        {
            get { return Fields.UserEmail[this]; }
            set { Fields.UserEmail[this] = value; }
        }

        [DisplayName("User Source"), Expression("jUser.[Source]")]
        public String UserSource
        {
            get { return Fields.UserSource[this]; }
            set { Fields.UserSource[this] = value; }
        }

        [DisplayName("User Password Hash"), Expression("jUser.[PasswordHash]")]
        public String UserPasswordHash
        {
            get { return Fields.UserPasswordHash[this]; }
            set { Fields.UserPasswordHash[this] = value; }
        }

        [DisplayName("User Password Salt"), Expression("jUser.[PasswordSalt]")]
        public String UserPasswordSalt
        {
            get { return Fields.UserPasswordSalt[this]; }
            set { Fields.UserPasswordSalt[this] = value; }
        }

        [DisplayName("User Last Directory Update"), Expression("jUser.[LastDirectoryUpdate]")]
        public DateTime? UserLastDirectoryUpdate
        {
            get { return Fields.UserLastDirectoryUpdate[this]; }
            set { Fields.UserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("User User Image"), Expression("jUser.[UserImage]")]
        public String UserUserImage
        {
            get { return Fields.UserUserImage[this]; }
            set { Fields.UserUserImage[this] = value; }
        }

        [DisplayName("User Insert Date"), Expression("jUser.[InsertDate]")]
        public DateTime? UserInsertDate
        {
            get { return Fields.UserInsertDate[this]; }
            set { Fields.UserInsertDate[this] = value; }
        }

        [DisplayName("User Insert User Id"), Expression("jUser.[InsertUserId]")]
        public Int32? UserInsertUserId
        {
            get { return Fields.UserInsertUserId[this]; }
            set { Fields.UserInsertUserId[this] = value; }
        }

        [DisplayName("User Update Date"), Expression("jUser.[UpdateDate]")]
        public DateTime? UserUpdateDate
        {
            get { return Fields.UserUpdateDate[this]; }
            set { Fields.UserUpdateDate[this] = value; }
        }

        [DisplayName("User Update User Id"), Expression("jUser.[UpdateUserId]")]
        public Int32? UserUpdateUserId
        {
            get { return Fields.UserUpdateUserId[this]; }
            set { Fields.UserUpdateUserId[this] = value; }
        }

        [DisplayName("User Is Active"), Expression("jUser.[IsActive]")]
        public Int16? UserIsActive
        {
            get { return Fields.UserIsActive[this]; }
            set { Fields.UserIsActive[this] = value; }
        }

        [DisplayName("Regional Name"), Expression("jRegional.[Name]")]
        public String RegionalName
        {
            get { return Fields.RegionalName[this]; }
            set { Fields.RegionalName[this] = value; }
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

        [DisplayName("Station Name"), Expression("jStation.[Name]")]
        public String StationName
        {
            get { return Fields.StationName[this]; }
            set { Fields.StationName[this] = value; }
        }

        [DisplayName("Station Area Id"), Expression("jStation.[AreaID]")]
        public Int32? StationAreaId
        {
            get { return Fields.StationAreaId[this]; }
            set { Fields.StationAreaId[this] = value; }
        }

        [DisplayName("Unit Name"), Expression("jUnit.[Name]")]
        public String UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
        }

        [DisplayName("Unit Station Id"), Expression("jUnit.[StationID]")]
        public Int32? UnitStationId
        {
            get { return Fields.UnitStationId[this]; }
            set { Fields.UnitStationId[this] = value; }
        }

        [DisplayName("Unit Capacity"), Expression("jUnit.[Capacity]")]
        public Int32? UnitCapacity
        {
            get { return Fields.UnitCapacity[this]; }
            set { Fields.UnitCapacity[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RankId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RankInHierarchyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RankId;
            public Int32Field UserId;
            public Int32Field RegionalId;
            public Int32Field DistributionId;
            public Int32Field AreaId;
            public Int32Field StationId;
            public Int32Field UnitId;

            public StringField UserUsername;
            public StringField UserDisplayName;
            public StringField UserEmail;
            public StringField UserSource;
            public StringField UserPasswordHash;
            public StringField UserPasswordSalt;
            public DateTimeField UserLastDirectoryUpdate;
            public StringField UserUserImage;
            public DateTimeField UserInsertDate;
            public Int32Field UserInsertUserId;
            public DateTimeField UserUpdateDate;
            public Int32Field UserUpdateUserId;
            public Int16Field UserIsActive;

            public StringField RegionalName;

            public StringField DistributionName;
            public Int32Field DistributionRegionalId;

            public StringField AreaName;
            public Int32Field AreaDistributionId;

            public StringField StationName;
            public Int32Field StationAreaId;

            public StringField UnitName;
            public Int32Field UnitStationId;
            public Int32Field UnitCapacity;
        }
    }
}
