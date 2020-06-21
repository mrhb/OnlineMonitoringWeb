namespace OnlineMonitoringWeb.Hierarchy {
    export interface UnitRow {
        UnitId?: number;
        Name?: string;
        Capacity?: number;
        StationId?: number;
        StationName?: string;
        StationAreaId?: number;
    }

    export namespace UnitRow {
        export const idProperty = 'UnitId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Hierarchy.Unit';
        export const lookupKey = 'Default.Unit';

        export function getLookup(): Q.Lookup<UnitRow> {
            return Q.getLookup<UnitRow>('Default.Unit');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            UnitId = "UnitId",
            Name = "Name",
            Capacity = "Capacity",
            StationId = "StationId",
            StationName = "StationName",
            StationAreaId = "StationAreaId"
        }
    }
}

