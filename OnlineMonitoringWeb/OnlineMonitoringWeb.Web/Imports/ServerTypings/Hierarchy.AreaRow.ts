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
        export const lookupKey = 'Default.Area';

        export function getLookup(): Q.Lookup<AreaRow> {
            return Q.getLookup<AreaRow>('Default.Area');
        }
        export const deletePermission = 'Hierarchy:modify';
        export const insertPermission = 'Hierarchy:modify';
        export const readPermission = 'Hierarchy:view';
        export const updatePermission = 'Hierarchy:modify';

        export declare const enum Fields {
            AreaId = "AreaId",
            Name = "Name",
            DistributionId = "DistributionId",
            DistributionName = "DistributionName",
            DistributionRegionalId = "DistributionRegionalId"
        }
    }
}

