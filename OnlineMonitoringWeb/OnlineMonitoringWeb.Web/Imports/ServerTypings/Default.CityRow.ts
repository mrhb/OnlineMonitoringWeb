
namespace OnlineMonitoringWeb.Default {
    export interface CityRow {
        CityId?: number;
        Name?: string;
        ProvinceId?: number;
        ProvinceName?: string;
    }

    export namespace CityRow {
        export const idProperty = 'CityId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.City';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CityId;
            export declare const Name;
            export declare const ProvinceId;
            export declare const ProvinceName;
        }

        [
            'CityId',
            'Name',
            'ProvinceId',
            'ProvinceName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}