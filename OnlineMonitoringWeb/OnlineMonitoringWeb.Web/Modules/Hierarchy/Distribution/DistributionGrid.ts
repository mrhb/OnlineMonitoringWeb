
namespace OnlineMonitoringWeb.Hierarchy {

    @Serenity.Decorators.registerClass()
    export class DistributionGrid extends Serenity.EntityGrid<DistributionRow, any> {
        protected getColumnsKey() { return 'Hierarchy.Distribution'; }
        protected getDialogType() { return DistributionDialog; }
        protected getIdProperty() { return DistributionRow.idProperty; }
        protected getInsertPermission() { return DistributionRow.insertPermission; }
        protected getLocalTextPrefix() { return DistributionRow.localTextPrefix; }
        protected getService() { return DistributionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}