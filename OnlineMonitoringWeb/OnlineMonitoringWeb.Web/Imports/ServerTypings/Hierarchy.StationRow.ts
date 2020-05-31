
namespace OnlineMonitoringWeb.Hierarchy {
    export interface StationRow {
        StationId?: number;
        Name?: string;
        AreaId?: number;
        AreaName?: string;
        AreaDistributionId?: number;
    }

    export namespace StationRow {
        export const idProperty = 'StationId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Hierarchy.Station';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const StationId;
            export declare const Name;
            export declare const AreaId;
            export declare const AreaName;
            export declare const AreaDistributionId;
        }

        [
            'StationId',
            'Name',
            'AreaId',
            'AreaName',
            'AreaDistributionId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}