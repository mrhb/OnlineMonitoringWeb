namespace OnlineMonitoringWeb.Hierarchy {
    export interface AreaForm {
        Name: Serenity.StringEditor;
        DistributionId: Serenity.LookupEditor;
    }

    export class AreaForm extends Serenity.PrefixedContext {
        static formKey = 'Hierarchy.Area';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AreaForm.init)  {
                AreaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(AreaForm, [
                    'Name', w0,
                    'DistributionId', w1
                ]);
            }
        }
    }
}

