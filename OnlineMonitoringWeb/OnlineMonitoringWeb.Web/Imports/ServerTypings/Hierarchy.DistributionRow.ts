
namespace OnlineMonitoringWeb.Hierarchy {
    export interface DistributionRow {
        DistributionId?: number;
        Name?: string;
        RegionalId?: number;
        RegionalName?: string;
    }

    export namespace DistributionRow {
        export const idProperty = 'DistributionId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Hierarchy.Distribution';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const DistributionId;
            export declare const Name;
            export declare const RegionalId;
            export declare const RegionalName;
        }

        [
            'DistributionId',
            'Name',
            'RegionalId',
            'RegionalName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}