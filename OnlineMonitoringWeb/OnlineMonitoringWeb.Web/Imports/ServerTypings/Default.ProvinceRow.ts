
namespace OnlineMonitoringWeb.Default {
    export interface ProvinceRow {
        ProvinceId?: number;
        Name?: string;
    }

    export namespace ProvinceRow {
        export const idProperty = 'ProvinceId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Province';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ProvinceId;
            export declare const Name;
        }

        [
            'ProvinceId',
            'Name'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}