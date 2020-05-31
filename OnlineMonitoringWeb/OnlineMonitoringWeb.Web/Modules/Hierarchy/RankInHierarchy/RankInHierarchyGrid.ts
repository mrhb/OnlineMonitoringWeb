
namespace OnlineMonitoringWeb.Hierarchy {

    @Serenity.Decorators.registerClass()
    export class RankInHierarchyGrid extends Serenity.EntityGrid<RankInHierarchyRow, any> {
        protected getColumnsKey() { return 'Hierarchy.RankInHierarchy'; }
        protected getDialogType() { return RankInHierarchyDialog; }
        protected getIdProperty() { return RankInHierarchyRow.idProperty; }
        protected getInsertPermission() { return RankInHierarchyRow.insertPermission; }
        protected getLocalTextPrefix() { return RankInHierarchyRow.localTextPrefix; }
        protected getService() { return RankInHierarchyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}