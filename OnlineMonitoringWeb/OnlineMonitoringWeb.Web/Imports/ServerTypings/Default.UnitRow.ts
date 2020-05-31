
namespace OnlineMonitoringWeb.Default {
    export interface UnitRow {
        UnitId?: number;
        Name?: string;
        StationId?: number;
        StationName?: string;
        StationAreaId?: number;
    }

    export namespace UnitRow {
        export const idProperty = 'UnitId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Unit';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const UnitId;
            export declare const Name;
            export declare const StationId;
            export declare const StationName;
            export declare const StationAreaId;
        }

        [
            'UnitId',
            'Name',
            'StationId',
            'StationName',
            'StationAreaId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}