
namespace OnlineMonitoringWeb.Default {
    export class ProvinceForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Province';
    }

    export interface ProvinceForm {
        Name: Serenity.StringEditor;
    }

    [,
        ['Name', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ProvinceForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}