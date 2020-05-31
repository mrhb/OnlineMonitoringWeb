
namespace OnlineMonitoringWeb.Hierarchy {

    @Serenity.Decorators.registerClass()
    export class StationDialog extends Serenity.EntityDialog<StationRow, any> {
        protected getFormKey() { return StationForm.formKey; }
        protected getIdProperty() { return StationRow.idProperty; }
        protected getLocalTextPrefix() { return StationRow.localTextPrefix; }
        protected getNameProperty() { return StationRow.nameProperty; }
        protected getService() { return StationService.baseUrl; }
        protected getDeletePermission() { return StationRow.deletePermission; }
        protected getInsertPermission() { return StationRow.insertPermission; }
        protected getUpdatePermission() { return StationRow.updatePermission; }

        protected form = new StationForm(this.idPrefix);

    }
}