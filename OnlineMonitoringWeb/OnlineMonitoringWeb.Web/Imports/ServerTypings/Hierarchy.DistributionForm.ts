namespace OnlineMonitoringWeb.Hierarchy {
    export interface DistributionForm {
        Name: Serenity.StringEditor;
        RegionalId: Serenity.LookupEditor;
    }

    export class DistributionForm extends Serenity.PrefixedContext {
        static formKey = 'Hierarchy.Distribution';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DistributionForm.init)  {
                DistributionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(DistributionForm, [
                    'Name', w0,
                    'RegionalId', w1
                ]);
            }
        }
    }
}

