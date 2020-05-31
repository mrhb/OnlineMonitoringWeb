
namespace OnlineMonitoringWeb.Hierarchy {

    @Serenity.Decorators.registerClass()
    export class DistributionDialog extends Serenity.EntityDialog<DistributionRow, any> {
        protected getFormKey() { return DistributionForm.formKey; }
        protected getIdProperty() { return DistributionRow.idProperty; }
        protected getLocalTextPrefix() { return DistributionRow.localTextPrefix; }
        protected getNameProperty() { return DistributionRow.nameProperty; }
        protected getService() { return DistributionService.baseUrl; }
        protected getDeletePermission() { return DistributionRow.deletePermission; }
        protected getInsertPermission() { return DistributionRow.insertPermission; }
        protected getUpdatePermission() { return DistributionRow.updatePermission; }

        protected form = new DistributionForm(this.idPrefix);

    }
}