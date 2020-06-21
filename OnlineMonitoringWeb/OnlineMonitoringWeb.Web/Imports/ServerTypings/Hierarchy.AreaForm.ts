
namespace OnlineMonitoringWeb.Hierarchy {
    export class AreaForm extends Serenity.PrefixedContext {
        static formKey = 'Hierarchy.Area';
    }

    export interface AreaForm {
        Name: Serenity.StringEditor;
        DistributionId: Serenity.IntegerEditor;
    }

    [,
        ['Name', () => Serenity.StringEditor],
        ['DistributionId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(AreaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}