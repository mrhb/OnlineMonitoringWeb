namespace OnlineMonitoringWeb.Hierarchy {
    export interface ProvinceForm {
        Name: Serenity.StringEditor;
        RegionalId: Serenity.LookupEditor;
    }

    export class ProvinceForm extends Serenity.PrefixedContext {
        static formKey = 'Hierarchy.Province';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProvinceForm.init)  {
                ProvinceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(ProvinceForm, [
                    'Name', w0,
                    'RegionalId', w1
                ]);
            }
        }
    }
}

