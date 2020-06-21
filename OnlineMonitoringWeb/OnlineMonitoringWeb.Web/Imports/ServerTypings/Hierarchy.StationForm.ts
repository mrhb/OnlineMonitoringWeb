namespace OnlineMonitoringWeb.Hierarchy {
    export interface StationForm {
        Name: Serenity.StringEditor;
        AreaId: Serenity.LookupEditor;
    }

    export class StationForm extends Serenity.PrefixedContext {
        static formKey = 'Hierarchy.Station';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StationForm.init)  {
                StationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(StationForm, [
                    'Name', w0,
                    'AreaId', w1
                ]);
            }
        }
    }
}

