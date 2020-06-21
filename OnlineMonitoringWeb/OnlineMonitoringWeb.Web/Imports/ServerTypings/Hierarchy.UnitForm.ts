namespace OnlineMonitoringWeb.Hierarchy {
    export interface UnitForm {
        Name: Serenity.StringEditor;
        Capacity: Serenity.IntegerEditor;
        StationId: Serenity.LookupEditor;
    }

    export class UnitForm extends Serenity.PrefixedContext {
        static formKey = 'Hierarchy.Unit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UnitForm.init)  {
                UnitForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(UnitForm, [
                    'Name', w0,
                    'Capacity', w1,
                    'StationId', w2
                ]);
            }
        }
    }
}

