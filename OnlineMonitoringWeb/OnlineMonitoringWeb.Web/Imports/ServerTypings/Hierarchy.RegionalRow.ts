namespace OnlineMonitoringWeb.Hierarchy {
    export interface RegionalRow {
        RegionalId?: number;
        Name?: string;
    }

    export namespace RegionalRow {
        export const idProperty = 'RegionalId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Hierarchy.Regional';
        export const lookupKey = 'Default.Regional';

        export function getLookup(): Q.Lookup<RegionalRow> {
            return Q.getLookup<RegionalRow>('Default.Regional');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            RegionalId = "RegionalId",
            Name = "Name"
        }
    }
}

