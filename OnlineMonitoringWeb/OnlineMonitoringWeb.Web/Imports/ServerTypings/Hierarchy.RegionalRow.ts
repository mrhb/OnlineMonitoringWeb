
namespace OnlineMonitoringWeb.Hierarchy {
    export interface RegionalRow {
        RegionalId?: number;
        Name?: string;
    }

    export namespace RegionalRow {
        export const idProperty = 'RegionalId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Hierarchy.Regional';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const RegionalId;
            export declare const Name;
        }

        [
            'RegionalId',
            'Name'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}