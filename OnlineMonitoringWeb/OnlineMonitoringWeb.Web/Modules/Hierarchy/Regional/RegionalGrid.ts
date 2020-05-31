
namespace OnlineMonitoringWeb.Hierarchy {

    @Serenity.Decorators.registerClass()
    export class RegionalGrid extends Serenity.EntityGrid<RegionalRow, any> {
        protected getColumnsKey() { return 'Hierarchy.Regional'; }
        protected getDialogType() { return RegionalDialog; }
        protected getIdProperty() { return RegionalRow.idProperty; }
        protected getInsertPermission() { return RegionalRow.insertPermission; }
        protected getLocalTextPrefix() { return RegionalRow.localTextPrefix; }
        protected getService() { return RegionalService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}