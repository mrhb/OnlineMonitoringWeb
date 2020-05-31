
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

        export namespace Fields {
            export declare const RankId;
            export declare const UserId;
            export declare const RegionalId;
            export declare const DistributionId;
            export declare const AreaId;
            export declare const StationId;
            export declare const UnitId;
            export declare const UserUsername;
            export declare const UserDisplayName;
            export declare const UserEmail;
            export declare const UserSource;
            export declare const UserPasswordHash;
            export declare const UserPasswordSalt;
            export declare const UserLastDirectoryUpdate;
            export declare const UserUserImage;
            export declare const UserInsertDate;
            export declare const UserInsertUserId;
            export declare const UserUpdateDate;
            export declare const UserUpdateUserId;
            export declare const UserIsActive;
            export declare const RegionalName;
            export declare const DistributionName;
            export declare const DistributionRegionalId;
            export declare const AreaName;
            export declare const AreaDistributionId;
            export declare const StationName;
            export declare const StationAreaId;
            export declare const UnitName;
            export declare const UnitStationId;
            export declare const UnitCapacity;
        }

        [
            'RankId',
            'UserId',
            'RegionalId',
            'DistributionId',
            'AreaId',
            'StationId',
            'UnitId',
            'UserUsername',
            'UserDisplayName',
            'UserEmail',
            'UserSource',
            'UserPasswordHash',
            'UserPasswordSalt',
            'UserLastDirectoryUpdate',
            'UserUserImage',
            'UserInsertDate',
            'UserInsertUserId',
            'UserUpdateDate',
            'UserUpdateUserId',
            'UserIsActive',
            'RegionalName',
            'DistributionName',
            'DistributionRegionalId',
            'AreaName',
            'AreaDistributionId',
            'StationName',
            'StationAreaId',
            'UnitName',
            'UnitStationId',
            'UnitCapacity'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}