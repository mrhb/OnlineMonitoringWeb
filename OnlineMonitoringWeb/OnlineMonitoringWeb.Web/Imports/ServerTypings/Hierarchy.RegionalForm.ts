
namespace OnlineMonitoringWeb.Hierarchy {
    export class RegionalForm extends Serenity.PrefixedContext {
        static formKey = 'Hierarchy.Regional';
    }

    export interface RegionalForm {
        Name: Serenity.StringEditor;
    }

    [,
        ['Name', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(RegionalForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}