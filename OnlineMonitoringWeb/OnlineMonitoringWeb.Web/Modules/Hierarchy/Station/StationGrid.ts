
namespace OnlineMonitoringWeb.Hierarchy {

    @Serenity.Decorators.registerClass()
    export class StationGrid extends Serenity.EntityGrid<StationRow, any> {
        protected getColumnsKey() { return 'Hierarchy.Station'; }
        protected getDialogType() { return StationDialog; }
        protected getIdProperty() { return StationRow.idProperty; }
        protected getInsertPermission() { return StationRow.insertPermission; }
        protected getLocalTextPrefix() { return StationRow.localTextPrefix; }
        protected getService() { return StationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}