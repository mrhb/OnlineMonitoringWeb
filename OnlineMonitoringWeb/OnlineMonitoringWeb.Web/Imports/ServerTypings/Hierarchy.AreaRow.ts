
namespace OnlineMonitoringWeb.Hierarchy {
    export interface AreaRow {
        AreaId?: number;
        Name?: string;
        DistributionId?: number;
        DistributionName?: string;
        DistributionRegionalId?: number;
    }

    export namespace AreaRow {
        export const idProperty = 'AreaId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Hierarchy.Area';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const AreaId;
            export declare const Name;
            export declare const DistributionId;
            export declare const DistributionName;
            export declare const DistributionRegionalId;
        }

        [
            'AreaId',
            'Name',
            'DistributionId',
            'DistributionName',
            'DistributionRegionalId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}