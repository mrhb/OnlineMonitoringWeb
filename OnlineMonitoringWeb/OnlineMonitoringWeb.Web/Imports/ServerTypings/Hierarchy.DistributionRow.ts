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
        export const lookupKey = 'Default.Distribution';

        export function getLookup(): Q.Lookup<DistributionRow> {
            return Q.getLookup<DistributionRow>('Default.Distribution');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            DistributionId = "DistributionId",
            Name = "Name",
            RegionalId = "RegionalId",
            RegionalName = "RegionalName"
        }
    }
}

