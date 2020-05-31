
namespace OnlineMonitoringWeb.Hierarchy {
    export class DistributionForm extends Serenity.PrefixedContext {
        static formKey = 'Hierarchy.Distribution';
    }

    export interface DistributionForm {
        Name: Serenity.StringEditor;
        RegionalId: Serenity.IntegerEditor;
    }

    [,
        ['Name', () => Serenity.StringEditor],
        ['RegionalId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(DistributionForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}