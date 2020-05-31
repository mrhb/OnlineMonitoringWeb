
namespace OnlineMonitoringWeb.Hierarchy {

    @Serenity.Decorators.registerClass()
    export class ProvinceDialog extends Serenity.EntityDialog<ProvinceRow, any> {
        protected getFormKey() { return ProvinceForm.formKey; }
        protected getIdProperty() { return ProvinceRow.idProperty; }
        protected getLocalTextPrefix() { return ProvinceRow.localTextPrefix; }
        protected getNameProperty() { return ProvinceRow.nameProperty; }
        protected getService() { return ProvinceService.baseUrl; }
        protected getDeletePermission() { return ProvinceRow.deletePermission; }
        protected getInsertPermission() { return ProvinceRow.insertPermission; }
        protected getUpdatePermission() { return ProvinceRow.updatePermission; }

        protected form = new ProvinceForm(this.idPrefix);

    }
}