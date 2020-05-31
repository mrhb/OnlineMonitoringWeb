
namespace OnlineMonitoringWeb.Default {
    export class UnitForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Unit';
    }

    export interface UnitForm {
        Name: Serenity.StringEditor;
        StationId: Serenity.IntegerEditor;
    }

    [,
        ['Name', () => Serenity.StringEditor],
        ['StationId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(UnitForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}