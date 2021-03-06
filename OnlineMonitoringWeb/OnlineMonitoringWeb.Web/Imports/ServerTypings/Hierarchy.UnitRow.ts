﻿
namespace OnlineMonitoringWeb.Hierarchy {
    export interface UnitRow {
        UnitId?: number;
        Name?: string;
        StationId?: number;
        Capacity?: number;
        Type?: number;
        StringIp?: string;
        StationName?: string;
        StationAreaId?: number;
    }

    export namespace UnitRow {
        export const idProperty = 'UnitId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Hierarchy.Unit';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const UnitId;
            export declare const Name;
            export declare const StationId;
            export declare const Capacity;
            export declare const Type;
            export declare const StringIp;
            export declare const StationName;
            export declare const StationAreaId;
        }

        [
            'UnitId',
            'Name',
            'StationId',
            'Capacity',
            'Type',
            'StringIp',
            'StationName',
            'StationAreaId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}