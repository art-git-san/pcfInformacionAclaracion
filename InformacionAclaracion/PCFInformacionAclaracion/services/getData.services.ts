import { DataClient, DataIncident } from './../interfaces/general';

export interface ResponseInterface {
  url: string;
  body?: any;
  data?: any,
  status?: number,
  ok?: boolean,
  error?: any
}

export class DataService {
  private headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "OData-MaxVersion": "4.0",
    "OData-Version": "4.0",
    "Prefer": "odata.include-annotations=*"
  });
  private crmDynamics = typeof Xrm !== "undefined" ? Xrm.Utility.getGlobalContext().getClientUrl() : "https://mx-evolucioncxm-dyn-dev.crm.dynamics.com";
  private isCrmDynamics = false;

  setHeaders(headers: HeadersInit | undefined) {
    this.headers = new Headers(headers);
  }
  setURLDynamics(flag: boolean) {
    this.isCrmDynamics = flag
  }
  addToken(token: string) {
    this.headers.append("Authorization", token);
  }

  requestGet(url: string): Promise<ResponseInterface> {
    return this.request(url, "GET");
  }

  requestPost(url: string, data?: any): Promise<ResponseInterface> {
    return this.request(url, "POST", data);
  }

  requestPut(url: string, data?: any): Promise<ResponseInterface> {
    return this.request(url, "PUT", data);
  }

  requestPatch(url: string, data?: any): Promise<ResponseInterface> {
    return this.request(url, "PATCH", data);
  }

  requestDelete(url: string, data?: any): Promise<ResponseInterface> {
    return this.request(url, "DELETE", data);
  }

  async getDataClient(clientId: any): Promise<DataClient> {
    let id =  clientId !== null ? clientId : '8350ADE1-813A-ED11-9DB0-000D3A36B2EC'   
    let reqData = await this.requestGet("/api/data/v9.2/contacts(" + id + ")?$select=cxm_clientereincidenteaclaraciones,cxm_clientevulnerableaclaraciones,cxm_clienterecurrenteaclaraciones,cxm_clientesensibleaclaraciones")
    console.log("ID es="+id);
    if (reqData.ok)
      return reqData.data
    else if (typeof Xrm === "undefined")
      return {
        "@odata.context": "https://mx-evolucioncxm-dyn-dev.crm.dynamics.com/api/data/v9.2/$metadata#contacts(cxm_clientereincidenteaclaraciones,cxm_clientevulnerableaclaraciones,cxm_clienterecurrenteaclaraciones,cxm_clientesensibleaclaraciones)/$entity",
        "@odata.etag": "W/\"246036222\"",
        "cxm_clientereincidenteaclaraciones": false,
        "cxm_clientevulnerableaclaraciones": false,
        "cxm_clienterecurrenteaclaraciones": false,
        "cxm_clientesensibleaclaraciones": true,
        "fake_clientelistasnegrasaclaraciones":false,
      }
    return {} as any;
  }

  getIncidentId() {
    let id = typeof Xrm !== "undefined" ? (Xrm.Utility.getPageContext().input as any).entityId : '{d83dbea1-62ce-ed11-b596-6045bd0388ff}'
    return id.substring(1, id.length - 1);
  }
  
  async getDataAclaracion(): Promise<DataIncident> {   
    let reqData = await this.requestGet("/api/data/v9.2/incidents(" +  this.getIncidentId() + ")?$select=_createdby_value,_cxm_categoriaid_value,_cxm_subcategoriaid_value,casetypecode,_cxm_motornormativoid_value,cxm_cadenanormativa,cxm_montototal,cxm_fechaestimadacierre,numberofchildincidents,cxm_motornormativodescripcion")       
    if (reqData.ok)
      return reqData.data
    else if (typeof Xrm === "undefined")
      return {
        "@odata.context": "https://mx-evolucioncxm-dyn-dev.crm.dynamics.com/api/data/v9.2/$metadata#incidents(_createdby_value,_cxm_categoriaid_value,_cxm_subcategoriaid_value,casetypecode,_cxm_motornormativoid_value,cxm_cadenanormativa,cxm_montototal,cxm_fechaestimadacierre,numberofchildincidents)/$entity",
        "@odata.etag": "W/\"270255439\"",
        "_createdby_value@OData.Community.Display.V1.FormattedValue":"EDGAR URQUIZU FRANCO",
        "_createdby_value@Microsoft.Dynamics.CRM.lookuplogicalname":"systemuser",
        _createdby_value:"29e5eb6c-1db1-ed11-83fd-6045bd038b42",
        "_cxm_categoriaid_value@OData.Community.Display.V1.FormattedValue":"Tarjeta de Crédito",
        "_cxm_categoriaid_value@Microsoft.Dynamics.CRM.lookuplogicalname":"cxm_mx_cat_acl_categoria",    
        _cxm_categoriaid_value:"51682b0e-a22f-ed11-9db1-00224806bd15",
        "_cxm_subcategoriaid_value@OData.Community.Display.V1.FormattedValue":"Compra No Reconocida - Nacional",   
        "_cxm_subcategoriaid_value@Microsoft.Dynamics.CRM.lookuplogicalname":"cxm_mx_cat_acl_subcateg",
        _cxm_subcategoriaid_value:"13f5eccf-492d-ed11-9db1-0022480872ec",
        "casetypecode@OData.Community.Display.V1.FormattedValue":"Aclaración",
        casetypecode:1,
        "_cxm_motornormativoid_value@OData.Community.Display.V1.FormattedValue":"CXM-NORM-0018",
        "_cxm_motornormativoid_value@Microsoft.Dynamics.CRM.lookuplogicalname":"cxm_mx_mst_acl_motor",
        _cxm_motornormativoid_value:"57729b22-80a2-ed11-aad0-6045bd03864d",
        cxm_cadenanormativa:"TDC:Cancelación",
        "cxm_montototal@OData.Community.Display.V1.FormattedValue":"$4,179.82",
       cxm_montototal:4179.82,
       cxm_fechaestimadacierre:"25-10-2022",   
       numberofchildincidents:1,
       cxm_motornormativodescripcion:"Aplicado",
       fake_cedularesolutoria:"TDC"    
      }
    return {} as any;
  }

  private async request(url: string, method: string, body?: any): Promise<ResponseInterface> {
    let resReq: ResponseInterface = { url: url };
    let initReq: RequestInit = {
      method: method,
      headers: this.headers,
    };

    if (body) {
      initReq.body = JSON.stringify(body);
      resReq.body = body;
    }
    if (this.isCrmDynamics)
      url = this.crmDynamics + url

    try {
      let request = new Request(url, initReq);
      const response = await fetch(request)
      resReq.status = response.status;
      resReq.ok = response.ok;
      if (response.ok)
        try {
          resReq.data = await response.json();
        } catch {
          resReq.data = response
        }
      else
        resReq.error = response
    } catch (error) {
      resReq.status = 400
      resReq.ok = false;
      resReq.error = error
    }
    console.log(resReq);
    return resReq;
  }
}
