
namespace OnlineMonitoringWeb.Default {
    export class CityForm extends Serenity.PrefixedContext {
        static formKey = 'Default.City';
    }

    export interface CityForm {
        Name: Serenity.StringEditor;
        ProvinceId: Serenity.IntegerEditor;
    }

    [,
        ['Name', () => Serenity.StringEditor],
        ['ProvinceId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(CityForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}