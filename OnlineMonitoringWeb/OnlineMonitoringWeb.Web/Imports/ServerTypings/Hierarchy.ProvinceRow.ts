namespace OnlineMonitoringWeb.Hierarchy {
    export interface ProvinceRow {
        ProvinceId?: number;
        Name?: string;
        RegionalId?: number;
        RegionalName?: string;
    }

    export namespace ProvinceRow {
        export const idProperty = 'ProvinceId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Hierarchy.Province';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ProvinceId = "ProvinceId",
            Name = "Name",
            RegionalId = "RegionalId",
            RegionalName = "RegionalName"
        }
    }
}

