namespace OnlineMonitoringWeb.Hierarchy {
    export interface RankInHierarchyForm {
        UserId: Serenity.LookupEditor;
        RegionalId: Serenity.LookupEditor;
        DistributionId: Serenity.LookupEditor;
        AreaId: Serenity.LookupEditor;
        StationId: Serenity.LookupEditor;
        UnitId: Serenity.LookupEditor;
    }

    export class RankInHierarchyForm extends Serenity.PrefixedContext {
        static formKey = 'Hierarchy.RankInHierarchy';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RankInHierarchyForm.init)  {
                RankInHierarchyForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(RankInHierarchyForm, [
                    'UserId', w0,
                    'RegionalId', w0,
                    'DistributionId', w0,
                    'AreaId', w0,
                    'StationId', w0,
                    'UnitId', w0
                ]);
            }
        }
    }
}

