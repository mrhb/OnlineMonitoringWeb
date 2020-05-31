
namespace OnlineMonitoringWeb.Hierarchy {

    @Serenity.Decorators.registerClass()
    export class RankInHierarchyDialog extends Serenity.EntityDialog<RankInHierarchyRow, any> {
        protected getFormKey() { return RankInHierarchyForm.formKey; }
        protected getIdProperty() { return RankInHierarchyRow.idProperty; }
        protected getLocalTextPrefix() { return RankInHierarchyRow.localTextPrefix; }
        protected getService() { return RankInHierarchyService.baseUrl; }
        protected getDeletePermission() { return RankInHierarchyRow.deletePermission; }
        protected getInsertPermission() { return RankInHierarchyRow.insertPermission; }
        protected getUpdatePermission() { return RankInHierarchyRow.updatePermission; }

        protected form = new RankInHierarchyForm(this.idPrefix);

    }
}