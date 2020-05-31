
namespace OnlineMonitoringWeb.Hierarchy {

    @Serenity.Decorators.registerClass()
    export class AreaGrid extends Serenity.EntityGrid<AreaRow, any> {
        protected getColumnsKey() { return 'Hierarchy.Area'; }
        protected getDialogType() { return AreaDialog; }
        protected getIdProperty() { return AreaRow.idProperty; }
        protected getInsertPermission() { return AreaRow.insertPermission; }
        protected getLocalTextPrefix() { return AreaRow.localTextPrefix; }
        protected getService() { return AreaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}