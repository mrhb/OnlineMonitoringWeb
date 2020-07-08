
namespace OnlineMonitoringWeb.Hierarchy {
    export class UnitForm extends Serenity.PrefixedContext {
        static formKey = 'Hierarchy.Unit';
    }

    export interface UnitForm {
        Name: Serenity.StringEditor;
        StationId: Serenity.IntegerEditor;
        Capacity: Serenity.IntegerEditor;
        Type: Serenity.IntegerEditor;
        StringIp: Serenity.StringEditor;
    }

    [,
        ['Name', () => Serenity.StringEditor],
        ['StationId', () => Serenity.IntegerEditor],
        ['Capacity', () => Serenity.IntegerEditor],
        ['Type', () => Serenity.IntegerEditor],
        ['StringIp', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(UnitForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}