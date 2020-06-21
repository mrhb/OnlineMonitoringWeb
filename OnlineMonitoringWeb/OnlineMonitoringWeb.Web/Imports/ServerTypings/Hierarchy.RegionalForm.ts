namespace OnlineMonitoringWeb.Hierarchy {
    export interface RegionalForm {
        Name: Serenity.StringEditor;
    }

    export class RegionalForm extends Serenity.PrefixedContext {
        static formKey = 'Hierarchy.Regional';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RegionalForm.init)  {
                RegionalForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RegionalForm, [
                    'Name', w0
                ]);
            }
        }
    }
}

