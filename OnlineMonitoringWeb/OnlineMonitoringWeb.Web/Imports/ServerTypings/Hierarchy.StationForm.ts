
namespace OnlineMonitoringWeb.Hierarchy {
    export class StationForm extends Serenity.PrefixedContext {
        static formKey = 'Hierarchy.Station';
    }

    export interface StationForm {
        Name: Serenity.StringEditor;
        AreaId: Serenity.IntegerEditor;
    }

    [,
        ['Name', () => Serenity.StringEditor],
        ['AreaId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(StationForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}