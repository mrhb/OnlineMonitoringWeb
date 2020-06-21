
namespace OnlineMonitoringWeb.Hierarchy {
    export class ProvinceForm extends Serenity.PrefixedContext {
        static formKey = 'Hierarchy.Province';
    }

    export interface ProvinceForm {
        Name: Serenity.StringEditor;
        RegionalId: Serenity.IntegerEditor;
    }

    [,
        ['Name', () => Serenity.StringEditor],
        ['RegionalId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(ProvinceForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}