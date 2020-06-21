namespace OnlineMonitoringWeb.Hierarchy {
    export namespace RankInHierarchyService {
        export const baseUrl = 'Hierarchy/RankInHierarchy';

        export declare function Create(request: Serenity.SaveRequest<RankInHierarchyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<RankInHierarchyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RankInHierarchyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RankInHierarchyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Hierarchy/RankInHierarchy/Create",
            Update = "Hierarchy/RankInHierarchy/Update",
            Delete = "Hierarchy/RankInHierarchy/Delete",
            Retrieve = "Hierarchy/RankInHierarchy/Retrieve",
            List = "Hierarchy/RankInHierarchy/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>RankInHierarchyService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

