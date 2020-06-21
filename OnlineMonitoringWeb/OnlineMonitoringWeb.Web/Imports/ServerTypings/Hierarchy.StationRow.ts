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
        export const lookupKey = 'Default.Station';

        export function getLookup(): Q.Lookup<StationRow> {
            return Q.getLookup<StationRow>('Default.Station');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            StationId = "StationId",
            Name = "Name",
            AreaId = "AreaId",
            AreaName = "AreaName",
            AreaDistributionId = "AreaDistributionId"
        }
    }
}

