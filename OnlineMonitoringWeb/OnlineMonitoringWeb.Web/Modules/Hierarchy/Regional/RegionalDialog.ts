
namespace OnlineMonitoringWeb.Hierarchy {

    @Serenity.Decorators.registerClass()
    export class RegionalDialog extends Serenity.EntityDialog<RegionalRow, any> {
        protected getFormKey() { return RegionalForm.formKey; }
        protected getIdProperty() { return RegionalRow.idProperty; }
        protected getLocalTextPrefix() { return RegionalRow.localTextPrefix; }
        protected getNameProperty() { return RegionalRow.nameProperty; }
        protected getService() { return RegionalService.baseUrl; }
        protected getDeletePermission() { return RegionalRow.deletePermission; }
        protected getInsertPermission() { return RegionalRow.insertPermission; }
        protected getUpdatePermission() { return RegionalRow.updatePermission; }

        protected form = new RegionalForm(this.idPrefix);

    }
}