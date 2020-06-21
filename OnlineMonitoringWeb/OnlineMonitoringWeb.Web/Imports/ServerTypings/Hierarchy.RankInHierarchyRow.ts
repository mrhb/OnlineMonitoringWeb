namespace OnlineMonitoringWeb.Hierarchy {
    export interface RankInHierarchyRow {
        RankId?: number;
        UserId?: number;
        RegionalId?: number;
        DistributionId?: number;
        AreaId?: number;
        StationId?: number;
        UnitId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        RegionalName?: string;
        DistributionName?: string;
        DistributionRegionalId?: number;
        AreaName?: string;
        AreaDistributionId?: number;
        StationName?: string;
        StationAreaId?: number;
        UnitName?: string;
        UnitStationId?: number;
        UnitCapacity?: number;
    }

    export namespace RankInHierarchyRow {
        export const idProperty = 'RankId';
        export const localTextPrefix = 'Hierarchy.RankInHierarchy';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            RankId = "RankId",
            UserId = "UserId",
            RegionalId = "RegionalId",
            DistributionId = "DistributionId",
            AreaId = "AreaId",
            StationId = "StationId",
            UnitId = "UnitId",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            RegionalName = "RegionalName",
            DistributionName = "DistributionName",
            DistributionRegionalId = "DistributionRegionalId",
            AreaName = "AreaName",
            AreaDistributionId = "AreaDistributionId",
            StationName = "StationName",
            StationAreaId = "StationAreaId",
            UnitName = "UnitName",
            UnitStationId = "UnitStationId",
            UnitCapacity = "UnitCapacity"
        }
    }
}

