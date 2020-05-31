
namespace OnlineMonitoringWeb.Hierarchy {
    export class RankInHierarchyForm extends Serenity.PrefixedContext {
        static formKey = 'Hierarchy.RankInHierarchy';
    }

    export interface RankInHierarchyForm {
        UserId: Serenity.IntegerEditor;
        RegionalId: Serenity.IntegerEditor;
        DistributionId: Serenity.IntegerEditor;
        AreaId: Serenity.IntegerEditor;
        StationId: Serenity.IntegerEditor;
        UnitId: Serenity.IntegerEditor;
    }

    [,
        ['UserId', () => Serenity.IntegerEditor],
        ['RegionalId', () => Serenity.IntegerEditor],
        ['DistributionId', () => Serenity.IntegerEditor],
        ['AreaId', () => Serenity.IntegerEditor],
        ['StationId', () => Serenity.IntegerEditor],
        ['UnitId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(RankInHierarchyForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}