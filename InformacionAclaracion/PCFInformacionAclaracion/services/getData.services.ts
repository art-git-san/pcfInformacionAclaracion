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

  getEjecutivoId() {
    let id = typeof Xrm !== "undefined" ? Xrm.Utility.getGlobalContext().userSettings.userId : '{04408CB4-C1F7-EC11-BB3D-6045BD007B10}'
    return id.substring(1, id.length - 1);
  }

  getClientId() {
    let id = typeof Xrm !== "undefined" ? (Xrm.Utility.getPageContext().input as any).entityId : '{8350ADE1-813A-ED11-9DB0-000D3A36B2EC}'
    return id.substring(1, id.length - 1);
  }

  async getDataClient(clientId: any): Promise<DataClient> {
    let id =  clientId !== null ? clientId : '8350ADE1-813A-ED11-9DB0-000D3A36B2EC'   
    let reqData = await this.requestGet("/api/data/v9.2/contacts(" + id + ")?$select=cxm_clientereincidenteaclaraciones,cxm_clientevulnerableaclaraciones,cxm_clienterecurrenteaclaraciones,cxm_clientesensibleaclaraciones")
    // console.log("ID es="+id);
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
      }
    return {} as any;
  }
  getIncidentId() {
    let id = typeof Xrm !== "undefined" ? (Xrm.Utility.getPageContext().input as any).entityId : '{d83dbea1-62ce-ed11-b596-6045bd0388ff}'
    return id.substring(1, id.length - 1);
  }
  async getDataAclaracion(): Promise<DataIncident> {   
    let reqData = await this.requestGet("/api/data/v9.2/incidents(" +  this.getIncidentId() + ")?$select=_createdby_value,_cxm_categoriaid_value,_cxm_subcategoriaid_value,casetypecode,_cxm_motornormativoid_value,cxm_cadenanormativa,cxm_montototal,cxm_fechaestimadacierre,numberofchildincidents,cxm_sys_jsonmovimiento,cxm_sys_jsonproducto,cxm_tipocasoalta,cxm_tipoestatustransaccion,cxm_motornormativodescripcion,cxm_estatusplastico,cxm_fechaestatusplastico,cxm_tipoabono,cxm_tipocargo,_cxm_usuarioaltaid_value,_cxm_unidadnegocioid_value,cxm_vozcliente")       
    if (reqData.ok)
      return reqData.data
    else if (typeof Xrm === "undefined")
      return {
        "@odata.context": "https://mx-evolucioncxm-dyn-dev.crm.dynamics.com/api/data/v9.2/$metadata#incidents(_createdby_value,_cxm_categoriaid_value,_cxm_subcategoriaid_value,casetypecode,_cxm_motornormativoid_value,cxm_cadenanormativa,cxm_montototal,cxm_fechaestimadacierre,numberofchildincidents,cxm_sys_jsonmovimiento,cxm_sys_jsonproducto,cxm_tipocasoalta,)/$entity",
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
      cxm_sys_jsonmovimiento:'{"comercio":"CINEPOLIS DULCE","codigo":"CODPROD010","refer":"REFPROD010E87MK9I1823LS","sia":"SIAPROD010","tarjeta":"física","ubicacionComercio":"CDMX","tecnCobro":"CHIP","promocion":"18M S/INT","tipoCargo":"CONSUMO","monto":3048.97,"comercioSeguro":false,"canal":"01","factura":"1001","fechaMov":"04/20/2023, 9:45:01 AM","centroCostos":"1234","tokens":{"c0":"] C045878 1234561890123","c4":"] C400012 102210003660","p0":"] P056789 1234007890123","q2":"] Q200002 07"},"sucursal":"SUCURSALPROD010","status":"en proceso","numOperacion":"0","numFact":"0","idxProd":0,"idxMov":0,"tipoProd":"PROD01","JSONprod":{"id":0,"pan":"379911302571584","idMovimientos":0,"name":"SANTANDER AMEX ORO **** 1584","estadoCuenta":"VIGENTE","fechaCorte":"05/12/2022","fechaActivacion":"26/06/2018","fechaVencimiento":"20/08/2023","fechaAlta":"26/06/2018","sucursalAltaId":"4161","sucursalAltaNombre":"PRINCIPAL NARANJOS","activa":true,"tipoProd":"PROD01","datos":[{"title":"PRODUCTO","value":"SANTANDER AMEX ORO"},{"title":"ESTADO","value":"VIGENTE"},{"title":"SUCURSAL DE APERTURA","value":"PRINCIPAL NARANJOS"},{"title":"CONTRATO","value":"730000001120"},{"title":"FECHA DE ALTA","value":"26/06/2018"},{"title":"FECHA DE ACTIVACIÓN","value":"26/06/2018"},{"title":"PLASTICO VÁLIDO AL","value":"20/08/2023"}],"saldoPago":[{"title":"FECHA DE CORTE","value":"05/12/2022"},{"title":"FECHA DE PAGO","value":"10/12/2022"},{"title":"PAGO PARA NO GENERAR INTERÉS","value":"39269.77"},{"title":"PAGO MÍNIMO","value":"600"},{"title":"SALDO","value":"39269.77"},{"title":"FECHA DE ÚLTIMA TRANSACCIÓN","value":"18/11/2022"}],"idxProd":0,"flags":{"allMovs":false,"roboExtravio":false,"pagoNoAplicado":false,"servicio":"","searchTxt":"","searchCompra":"","searchFecha":"","searchTarjeta":""},"movPerPage":25,"montoAclr":0}}',
      cxm_sys_jsonproducto:'{"id":0,"pan":"379911302571584","idMovimientos":0,"name":"SANTANDER AMEX ORO **** 1584","estadoCuenta":"VIGENTE","fechaCorte":"05/12/2022","fechaActivacion":"26/06/2018","fechaVencimiento":"20/08/2023","fechaAlta":"26/06/2018","sucursalAltaId":"4161","sucursalAltaNombre":"PRINCIPAL NARANJOS","activa":true,"tipoProd":"PROD01","datos":[{"title":"PRODUCTO","value":"SANTANDER AMEX ORO"},{"title":"ESTADO","value":"VIGENTE"},{"title":"SUCURSAL DE APERTURA","value":"PRINCIPAL NARANJOS"},{"title":"CONTRATO","value":"730000001120"},{"title":"FECHA DE ALTA","value":"26/06/2018"},{"title":"FECHA DE ACTIVACIÓN","value":"26/06/2018"},{"title":"PLASTICO VÁLIDO AL","value":"20/08/2023"}],"saldoPago":[{"title":"FECHA DE CORTE","value":"05/12/2022"},{"title":"FECHA DE PAGO","value":"10/12/2022"},{"title":"PAGO PARA NO GENERAR INTERÉS","value":"39269.77"},{"title":"PAGO MÍNIMO","value":"600"},{"title":"SALDO","value":"39269.77"},{"title":"FECHA DE ÚLTIMA TRANSACCIÓN","value":"18/11/2022"}],"idxProd":0,"flags":{"allMovs":false,"roboExtravio":false,"pagoNoAplicado":false,"servicio":"","searchTxt":"","searchCompra":"","searchFecha":"","searchTarjeta":""},"movPerPage":25,"montoAclr":0}',
       "cxm_tipocasoalta@OData.Community.Display.V1.FormattedValue":"Posteado",
       cxm_tipocasoalta:1,
       "cxm_tipoestatustransaccion@OData.Community.Display.V1.FormattedValue":"Aclaración",
       cxm_tipoestatustransaccion:1,
       cxm_motornormativodescripcion:"test",
       "cxm_estatusplastico@OData.Community.Display.V1.FormattedValue":"Bloqueo temporal",
       cxm_estatusplastico:1,
       cxm_fechaestatusplastico:"04/20/2023, 9:45:01 AM",
       "cxm_tipoabono@OData.Community.Display.V1.FormattedValue":"Temporal",
       cxm_tipoabono:1,
      "cxm_tipocargo@OData.Community.Display.V1.FormattedValue":"Nacional",
       cxm_tipocargo:1,
       cxm_vozcliente:"Cargo Doble",
       _cxm_usuarioaltaid_value: "94480bf9-ea8d-ed11-81ac-6045bd019be7",
       _cxm_unidadnegocioid_value: "",
       "_cxm_unidadnegocioid_value@OData.Community.Display.V1.FormattedValue": "TDC"
      }
    return {} as any;
  }
  async getDataAclaracionMovs(tipoCaso:number): Promise<any> {  
    let query: string="";
    switch (tipoCaso) {
      case 1:
        query="/api/data/v9.2/incidents?$select=incidentid&$expand=incident_parent_incident($select=incidentid;$expand=incident_parent_incident($select=incidentid,_createdby_value,_cxm_categoriaid_value,_cxm_subcategoriaid_value,casetypecode,_cxm_motornormativoid_value,cxm_cadenanormativa,cxm_montototal,cxm_fechaestimadacierre,numberofchildincidents,cxm_sys_jsonmovimiento,cxm_sys_jsonproducto,cxm_tipocasoalta,cxm_tipoestatustransaccion,cxm_motornormativodescripcion,cxm_estatusplastico,cxm_fechaestatusplastico,cxm_tipoabono,cxm_tipocargo))&$filter=(incidentid eq " +  this.getIncidentId() + ") and (incident_parent_incident/any(o1:(o1/incidentid ne null) and (o1/incident_parent_incident/any(o2:(o2/incidentid ne null)))))"
          break;
      case 2:
        query="/api/data/v9.2/incidents?$select=incidentid&$expand=incident_parent_incident($select=incidentid,_createdby_value,_cxm_categoriaid_value,_cxm_subcategoriaid_value,casetypecode,_cxm_motornormativoid_value,cxm_cadenanormativa,cxm_montototal,cxm_fechaestimadacierre,numberofchildincidents,cxm_sys_jsonmovimiento,cxm_sys_jsonproducto,cxm_tipocasoalta,cxm_tipoestatustransaccion,cxm_motornormativodescripcion,cxm_estatusplastico,cxm_fechaestatusplastico,cxm_tipoabono,cxm_tipocargo)&$filter=(incidentid eq " +  this.getIncidentId() + ") and (incident_parent_incident/any(o1:(o1/incidentid ne null)))"
          break;       
    }
    let reqData = await this.requestGet(query)
    if (reqData.ok)
      return reqData.data
    else if (typeof Xrm === "undefined")
     return {
        
        "@odata.context": "https://mx-evolucioncxm-dyn-dev.crm.dynamics.com/api/data/v9.2/$metadata#incidents(incidentid,incident_parent_incident(incidentid,incident_parent_incident(cxm_tipocasoalta)))",
        "value": [
          {
            "@odata.etag": "W/\"272148146\"",
            "incidentid": "f3fbf1b5-39e9-ed11-a7c6-6045bd0388ff",
            "incident_parent_incident": [
              {
                "incidentid": "19fcf1b5-39e9-ed11-a7c6-6045bd0388ff",
                "incident_parent_incident": [
                  {
                    // "cxm_tipocasoalta": 3,
                    "incidentid": "65fcf1b5-39e9-ed11-a7c6-6045bd0388ff",
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
                   fake_cedularesolutoria:"TDC",  
                  cxm_sys_jsonmovimiento:'{"comercio":"CINEPOLIS DULCE","codigo":"CODPROD010","refer":"REFPROD010E87MK9I1823LS","sia":"SIAPROD010","tarjeta":"física","ubicacionComercio":"CDMX","tecnCobro":"CHIP","promocion":"18M S/INT","tipoCargo":"CONSUMO","monto":3048.97,"comercioSeguro":false,"canal":"01","factura":"1001","fechaMov":"04/20/2023, 9:45:01 AM","centroCostos":"1234","tokens":{"c0":"] C045878 1234561890123","c4":"] C400012 102210003660","p0":"] P056789 1234007890123","q2":"] Q200002 07"},"sucursal":"SUCURSALPROD010","status":"en proceso","numOperacion":"0","numFact":"0","idxProd":0,"idxMov":0,"tipoProd":"PROD01"}',
                  cxm_sys_jsonproducto:'{"id":0,"pan":"379911302571584","idMovimientos":0,"name":"SANTANDER AMEX ORO **** 1584","estadoCuenta":"VIGENTE","fechaCorte":"05/12/2022","fechaActivacion":"26/06/2018","fechaVencimiento":"20/08/2023","fechaAlta":"26/06/2018","sucursalAltaId":"4161","sucursalAltaNombre":"PRINCIPAL NARANJOS","activa":true,"tipoProd":"PROD01","datos":[{"title":"PRODUCTO","value":"SANTANDER AMEX ORO"},{"title":"ESTADO","value":"VIGENTE"},{"title":"SUCURSAL DE APERTURA","value":"PRINCIPAL NARANJOS"},{"title":"CONTRATO","value":"730000001120"},{"title":"FECHA DE ALTA","value":"26/06/2018"},{"title":"FECHA DE ACTIVACIÓN","value":"26/06/2018"},{"title":"PLASTICO VÁLIDO AL","value":"20/08/2023"}],"saldoPago":[{"title":"FECHA DE CORTE","value":"05/12/2022"},{"title":"FECHA DE PAGO","value":"10/12/2022"},{"title":"PAGO PARA NO GENERAR INTERÉS","value":"39269.77"},{"title":"PAGO MÍNIMO","value":"600"},{"title":"SALDO","value":"39269.77"},{"title":"FECHA DE ÚLTIMA TRANSACCIÓN","value":"18/11/2022"}],"idxProd":0,"flags":{"allMovs":false,"roboExtravio":false,"pagoNoAplicado":false,"servicio":"","searchTxt":"","searchCompra":"","searchFecha":"","searchTarjeta":""},"movPerPage":25,"montoAclr":0}',
                   "cxm_tipocasoalta@OData.Community.Display.V1.FormattedValue":"Movimiento",
                   cxm_tipocasoalta: 3,
                   "cxm_tipoestatustransaccion@OData.Community.Display.V1.FormattedValue":"Posteado",
                   cxm_tipoestatustransaccion:1,
                   cxm_motornormativodescripcion:"test",
                   "cxm_estatusplastico@OData.Community.Display.V1.FormattedValue":"Bloqueo temporal",
                   cxm_estatusplastico:1,
                   cxm_fechaestatusplastico:"04/20/2023, 9:45:01 AM",
                   "cxm_tipoabono@OData.Community.Display.V1.FormattedValue":"Temporal",
                   cxm_tipoabono:1,
                  "cxm_tipocargo@OData.Community.Display.V1.FormattedValue":"Nacional",
                   cxm_tipocargo:1            
                   


                  },
                  {
                    // "cxm_tipocasoalta": 3,
                     "incidentid": "b0fcf1b5-39e9-ed11-a7c6-6045bd0388ff",
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
                    "cxm_montototal@OData.Community.Display.V1.FormattedValue":"$4,189.82",
                   cxm_montototal:4189.82,
                   cxm_fechaestimadacierre:"25-10-2022",   
                   numberofchildincidents:1,
                   fake_cedularesolutoria:"TDC",     
                  cxm_sys_jsonmovimiento:'{"comercio":"CINEPOLIS DULCE","codigo":"CODPROD010","refer":"REFPROD010E87MK9I1823LS","sia":"SIAPROD010","tarjeta":"física","ubicacionComercio":"CDMX","tecnCobro":"CHIP","promocion":"18M S/INT","tipoCargo":"CONSUMO","monto":3048.97,"comercioSeguro":false,"canal":"01","factura":"1001","fechaMov":"04/20/2023, 9:45:01 AM","centroCostos":"1234","tokens":{"c0":"] C045878 1234561890123","c4":"] C400012 102210003660","p0":"] P056789 1234007890123","q2":"] Q200002 07"},"sucursal":"SUCURSALPROD010","status":"en proceso","numOperacion":"0","numFact":"0","idxProd":0,"idxMov":0,"tipoProd":"PROD01","JSONprod":{"id":0,"pan":"379911302571584","idMovimientos":0,"name":"SANTANDER AMEX ORO **** 1584","estadoCuenta":"VIGENTE","fechaCorte":"05/12/2022","fechaActivacion":"26/06/2018","fechaVencimiento":"20/08/2023","fechaAlta":"26/06/2018","sucursalAltaId":"4161","sucursalAltaNombre":"PRINCIPAL NARANJOS","activa":true,"tipoProd":"PROD01","datos":[{"title":"PRODUCTO","value":"SANTANDER AMEX ORO"},{"title":"ESTADO","value":"VIGENTE"},{"title":"SUCURSAL DE APERTURA","value":"PRINCIPAL NARANJOS"},{"title":"CONTRATO","value":"730000001120"},{"title":"FECHA DE ALTA","value":"26/06/2018"},{"title":"FECHA DE ACTIVACIÓN","value":"26/06/2018"},{"title":"PLASTICO VÁLIDO AL","value":"20/08/2023"}],"saldoPago":[{"title":"FECHA DE CORTE","value":"05/12/2022"},{"title":"FECHA DE PAGO","value":"10/12/2022"},{"title":"PAGO PARA NO GENERAR INTERÉS","value":"39269.77"},{"title":"PAGO MÍNIMO","value":"600"},{"title":"SALDO","value":"39269.77"},{"title":"FECHA DE ÚLTIMA TRANSACCIÓN","value":"18/11/2022"}],"idxProd":0,"flags":{"allMovs":false,"roboExtravio":false,"pagoNoAplicado":false,"servicio":"","searchTxt":"","searchCompra":"","searchFecha":"","searchTarjeta":""},"movPerPage":25,"montoAclr":0}}',
                  cxm_sys_jsonproducto:'{"id":0,"pan":"379911302571584","idMovimientos":0,"name":"SANTANDER AMEX ORO **** 1584","estadoCuenta":"VIGENTE","fechaCorte":"05/12/2022","fechaActivacion":"26/06/2018","fechaVencimiento":"20/08/2023","fechaAlta":"26/06/2018","sucursalAltaId":"4161","sucursalAltaNombre":"PRINCIPAL NARANJOS","activa":true,"tipoProd":"PROD01","datos":[{"title":"PRODUCTO","value":"SANTANDER AMEX ORO"},{"title":"ESTADO","value":"VIGENTE"},{"title":"SUCURSAL DE APERTURA","value":"PRINCIPAL NARANJOS"},{"title":"CONTRATO","value":"730000001120"},{"title":"FECHA DE ALTA","value":"26/06/2018"},{"title":"FECHA DE ACTIVACIÓN","value":"26/06/2018"},{"title":"PLASTICO VÁLIDO AL","value":"20/08/2023"}],"saldoPago":[{"title":"FECHA DE CORTE","value":"05/12/2022"},{"title":"FECHA DE PAGO","value":"10/12/2022"},{"title":"PAGO PARA NO GENERAR INTERÉS","value":"39269.77"},{"title":"PAGO MÍNIMO","value":"600"},{"title":"SALDO","value":"39269.77"},{"title":"FECHA DE ÚLTIMA TRANSACCIÓN","value":"18/11/2022"}],"idxProd":0,"flags":{"allMovs":false,"roboExtravio":false,"pagoNoAplicado":false,"servicio":"","searchTxt":"","searchCompra":"","searchFecha":"","searchTarjeta":""},"movPerPage":25,"montoAclr":0}',
                   "cxm_tipocasoalta@OData.Community.Display.V1.FormattedValue":"Movimiento",
                   cxm_tipocasoalta: 3,
                   "cxm_tipoestatustransaccion@OData.Community.Display.V1.FormattedValue":"No Posteado",
                   cxm_tipoestatustransaccion:2,
                   cxm_motornormativodescripcion:"test",
                   "cxm_estatusplastico@OData.Community.Display.V1.FormattedValue":"Bloqueo temporal",
                   cxm_estatusplastico:1,
                   cxm_fechaestatusplastico:null,
                   "cxm_tipoabono@OData.Community.Display.V1.FormattedValue":"Temporal",
                   cxm_tipoabono:1,
                  "cxm_tipocargo@OData.Community.Display.V1.FormattedValue":"Nacional",
                   cxm_tipocargo:1                              
                  }
                ]
              },
              {
                "incidentid": "32fcf1b5-39e9-ed11-a7c6-6045bd0388ff",
                "incident_parent_incident": [
                  {
                    // "cxm_tipocasoalta": 3,
                    "incidentid": "93fcf1b5-39e9-ed11-a7c6-6045bd0388ff",
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
                    "cxm_montototal@OData.Community.Display.V1.FormattedValue":"$4,199.82",
                   cxm_montototal:4199.82,
                   cxm_fechaestimadacierre:"25-10-2022",   
                   numberofchildincidents:1,
                   fake_cedularesolutoria:"TDC",     
                  cxm_sys_jsonmovimiento:'{"comercio":"CINEPOLIS DULCE","codigo":"CODPROD010","refer":"REFPROD010E87MK9I1823LS","sia":"SIAPROD010","tarjeta":"física","ubicacionComercio":"CDMX","tecnCobro":"CHIP","promocion":"18M S/INT","tipoCargo":"CONSUMO","monto":3048.97,"comercioSeguro":false,"canal":"01","factura":"1001","fechaMov":"04/20/2023, 9:45:01 AM","centroCostos":"1234","tokens":{"c0":"] C045878 1234561890123","c4":"] C400012 102210003660","p0":"] P056789 1234007890123","q2":"] Q200002 07"},"sucursal":"SUCURSALPROD010","status":"en proceso","numOperacion":"0","numFact":"0","idxProd":0,"idxMov":0,"tipoProd":"PROD01","JSONprod":{"id":0,"pan":"379911302571584","idMovimientos":0,"name":"SANTANDER AMEX ORO **** 1584","estadoCuenta":"VIGENTE","fechaCorte":"05/12/2022","fechaActivacion":"26/06/2018","fechaVencimiento":"20/08/2023","fechaAlta":"26/06/2018","sucursalAltaId":"4161","sucursalAltaNombre":"PRINCIPAL NARANJOS","activa":true,"tipoProd":"PROD01","datos":[{"title":"PRODUCTO","value":"SANTANDER AMEX ORO"},{"title":"ESTADO","value":"VIGENTE"},{"title":"SUCURSAL DE APERTURA","value":"PRINCIPAL NARANJOS"},{"title":"CONTRATO","value":"730000001120"},{"title":"FECHA DE ALTA","value":"26/06/2018"},{"title":"FECHA DE ACTIVACIÓN","value":"26/06/2018"},{"title":"PLASTICO VÁLIDO AL","value":"20/08/2023"}],"saldoPago":[{"title":"FECHA DE CORTE","value":"05/12/2022"},{"title":"FECHA DE PAGO","value":"10/12/2022"},{"title":"PAGO PARA NO GENERAR INTERÉS","value":"39269.77"},{"title":"PAGO MÍNIMO","value":"600"},{"title":"SALDO","value":"39269.77"},{"title":"FECHA DE ÚLTIMA TRANSACCIÓN","value":"18/11/2022"}],"idxProd":0,"flags":{"allMovs":false,"roboExtravio":false,"pagoNoAplicado":false,"servicio":"","searchTxt":"","searchCompra":"","searchFecha":"","searchTarjeta":""},"movPerPage":25,"montoAclr":0}}',
                  cxm_sys_jsonproducto:'{"id":0,"pan":"379911302571584","idMovimientos":0,"name":"SANTANDER AMEX ORO **** 1584","estadoCuenta":"VIGENTE","fechaCorte":"05/12/2022","fechaActivacion":"26/06/2018","fechaVencimiento":"20/08/2023","fechaAlta":"26/06/2018","sucursalAltaId":"4161","sucursalAltaNombre":"PRINCIPAL NARANJOS","activa":true,"tipoProd":"PROD01","datos":[{"title":"PRODUCTO","value":"SANTANDER AMEX ORO"},{"title":"ESTADO","value":"VIGENTE"},{"title":"SUCURSAL DE APERTURA","value":"PRINCIPAL NARANJOS"},{"title":"CONTRATO","value":"730000001120"},{"title":"FECHA DE ALTA","value":"26/06/2018"},{"title":"FECHA DE ACTIVACIÓN","value":"26/06/2018"},{"title":"PLASTICO VÁLIDO AL","value":"20/08/2023"}],"saldoPago":[{"title":"FECHA DE CORTE","value":"05/12/2022"},{"title":"FECHA DE PAGO","value":"10/12/2022"},{"title":"PAGO PARA NO GENERAR INTERÉS","value":"39269.77"},{"title":"PAGO MÍNIMO","value":"600"},{"title":"SALDO","value":"39269.77"},{"title":"FECHA DE ÚLTIMA TRANSACCIÓN","value":"18/11/2022"}],"idxProd":0,"flags":{"allMovs":false,"roboExtravio":false,"pagoNoAplicado":false,"servicio":"","searchTxt":"","searchCompra":"","searchFecha":"","searchTarjeta":""},"movPerPage":25,"montoAclr":0}',
                   "cxm_tipocasoalta@OData.Community.Display.V1.FormattedValue":"Movimiento",
                   cxm_tipocasoalta: 3,
                   "cxm_tipoestatustransaccion@OData.Community.Display.V1.FormattedValue":"Posteado",
                   cxm_tipoestatustransaccion:1,
                   cxm_motornormativodescripcion:"test",
                   "cxm_estatusplastico@OData.Community.Display.V1.FormattedValue":"Bloqueo temporal",
                   cxm_estatusplastico:1,
                   cxm_fechaestatusplastico:"04/20/2023, 9:45:01 AM",
                   "cxm_tipoabono@OData.Community.Display.V1.FormattedValue":"Temporal",
                   cxm_tipoabono:1,
                  "cxm_tipocargo@OData.Community.Display.V1.FormattedValue":"Nacional",
                   cxm_tipocargo:1                               
                  }
                ]
              },
              {
                "incidentid": "4cfcf1b5-39e9-ed11-a7c6-6045bd0388ff",
                "incident_parent_incident": [
                  {
                    // "cxm_tipocasoalta": 3,
                     "incidentid": "53bbecbb-39e9-ed11-a7c6-6045bd0388ff",
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
                    "cxm_montototal@OData.Community.Display.V1.FormattedValue":"$4,209.82",
                   cxm_montototal:4209.82,
                   cxm_fechaestimadacierre:"25-10-2022",   
                   numberofchildincidents:1,
                   fake_cedularesolutoria:"TDC",     
                  cxm_sys_jsonmovimiento:'{"comercio":"CINEPOLIS DULCE","codigo":"CODPROD010","refer":"REFPROD010E87MK9I1823LS","sia":"SIAPROD010","tarjeta":"física","ubicacionComercio":"CDMX","tecnCobro":"CHIP","promocion":"18M S/INT","tipoCargo":"CONSUMO","monto":3048.97,"comercioSeguro":false,"canal":"01","factura":"1001","fechaMov":"04/20/2023, 9:45:01 AM","centroCostos":"1234","tokens":{"c0":"] C045878 1234561890123","c4":"] C400012 102210003660","p0":"] P056789 1234007890123","q2":"] Q200002 07"},"sucursal":"SUCURSALPROD010","status":"en proceso","numOperacion":"0","numFact":"0","idxProd":0,"idxMov":0,"tipoProd":"PROD01","JSONprod":{"id":0,"pan":"379911302571584","idMovimientos":0,"name":"SANTANDER AMEX ORO **** 1584","estadoCuenta":"VIGENTE","fechaCorte":"05/12/2022","fechaActivacion":"26/06/2018","fechaVencimiento":"20/08/2023","fechaAlta":"26/06/2018","sucursalAltaId":"4161","sucursalAltaNombre":"PRINCIPAL NARANJOS","activa":true,"tipoProd":"PROD01","datos":[{"title":"PRODUCTO","value":"SANTANDER AMEX ORO"},{"title":"ESTADO","value":"VIGENTE"},{"title":"SUCURSAL DE APERTURA","value":"PRINCIPAL NARANJOS"},{"title":"CONTRATO","value":"730000001120"},{"title":"FECHA DE ALTA","value":"26/06/2018"},{"title":"FECHA DE ACTIVACIÓN","value":"26/06/2018"},{"title":"PLASTICO VÁLIDO AL","value":"20/08/2023"}],"saldoPago":[{"title":"FECHA DE CORTE","value":"05/12/2022"},{"title":"FECHA DE PAGO","value":"10/12/2022"},{"title":"PAGO PARA NO GENERAR INTERÉS","value":"39269.77"},{"title":"PAGO MÍNIMO","value":"600"},{"title":"SALDO","value":"39269.77"},{"title":"FECHA DE ÚLTIMA TRANSACCIÓN","value":"18/11/2022"}],"idxProd":0,"flags":{"allMovs":false,"roboExtravio":false,"pagoNoAplicado":false,"servicio":"","searchTxt":"","searchCompra":"","searchFecha":"","searchTarjeta":""},"movPerPage":25,"montoAclr":0}}',
                  cxm_sys_jsonproducto:'{"id":0,"pan":"379911302571584","idMovimientos":0,"name":"SANTANDER AMEX ORO **** 1584","estadoCuenta":"VIGENTE","fechaCorte":"05/12/2022","fechaActivacion":"26/06/2018","fechaVencimiento":"20/08/2023","fechaAlta":"26/06/2018","sucursalAltaId":"4161","sucursalAltaNombre":"PRINCIPAL NARANJOS","activa":true,"tipoProd":"PROD01","datos":[{"title":"PRODUCTO","value":"SANTANDER AMEX ORO"},{"title":"ESTADO","value":"VIGENTE"},{"title":"SUCURSAL DE APERTURA","value":"PRINCIPAL NARANJOS"},{"title":"CONTRATO","value":"730000001120"},{"title":"FECHA DE ALTA","value":"26/06/2018"},{"title":"FECHA DE ACTIVACIÓN","value":"26/06/2018"},{"title":"PLASTICO VÁLIDO AL","value":"20/08/2023"}],"saldoPago":[{"title":"FECHA DE CORTE","value":"05/12/2022"},{"title":"FECHA DE PAGO","value":"10/12/2022"},{"title":"PAGO PARA NO GENERAR INTERÉS","value":"39269.77"},{"title":"PAGO MÍNIMO","value":"600"},{"title":"SALDO","value":"39269.77"},{"title":"FECHA DE ÚLTIMA TRANSACCIÓN","value":"18/11/2022"}],"idxProd":0,"flags":{"allMovs":false,"roboExtravio":false,"pagoNoAplicado":false,"servicio":"","searchTxt":"","searchCompra":"","searchFecha":"","searchTarjeta":""},"movPerPage":25,"montoAclr":0}',
                   "cxm_tipocasoalta@OData.Community.Display.V1.FormattedValue":"Movimiento",
                   cxm_tipocasoalta: 3,
                   "cxm_tipoestatustransaccion@OData.Community.Display.V1.FormattedValue":"Posteado",
                   cxm_tipoestatustransaccion:1,
                   cxm_motornormativodescripcion:"test",
                   "cxm_estatusplastico@OData.Community.Display.V1.FormattedValue":"Bloqueo temporal",
                   cxm_estatusplastico:1,
                   cxm_fechaestatusplastico:null,
                   "cxm_tipoabono@OData.Community.Display.V1.FormattedValue":"Temporal",
                   cxm_tipoabono:1,
                  "cxm_tipocargo@OData.Community.Display.V1.FormattedValue":"Nacional",
                   cxm_tipocargo:1                                
                  }
                ]
              }
            ]
          }
        ]
      }
    return {} as any;
  }
  async getDataDocumentos(incidentid: string): Promise<any> {       
    let reqData = await this.requestGet("/api/data/v9.2/cxm_mx_mst_acl_matz_documentos?$select=_cxm_documentoid_value,cxm_documentoentregado,createdon,cxm_procedencia&$expand=cxm_documentoid($select=cxm_name)&$filter=_cxm_aclaracionid_value eq " +  incidentid)
    if (reqData.ok)
      return reqData.data
    else if (typeof Xrm === "undefined")
      return {
          "@odata.context": "https://mx-evolucioncxm-dyn-dev.crm.dynamics.com/api/data/v9.2/$metadata#cxm_mx_mst_acl_matz_documentos(cxm_documentoentregado,createdon,_cxm_documentoid_value,cxm_procedencia)",
          "value": [
            {
              // "@odata.etag": "W/\"272979256\"",
              "cxm_documentoentregado": true,
              "createdon": "2023-05-04T17:37:09Z",
              "_cxm_documentoid_value@OData.Community.Display.V1.FormattedValue":"Estado de cuenta",
              "_cxm_documentoid_value@Microsoft.Dynamics.CRM.lookuplogicalname":"cxm_mx_cat_acl_documento",    
              "_cxm_documentoid_value": "ffe6060d-4a29-ed11-9db1-002248047d80",
              "cxm_procedencia@OData.Community.Display.V1.FormattedValue": "ATM",
              "cxm_procedencia": 1,
              "cxm_mx_mst_acl_matz_documentoid": "a6d05048-a2ea-ed11-a7c6-000d3a590965"
              
            },
            {
              // "@odata.etag": "W/\"272979373\"",
              "cxm_documentoentregado": true,
              "createdon": "2023-05-04T17:37:52Z",
              "_cxm_documentoid_value@OData.Community.Display.V1.FormattedValue":"Servicios no recibidos",
              "_cxm_documentoid_value@Microsoft.Dynamics.CRM.lookuplogicalname":"cxm_mx_cat_acl_documento",    
              "_cxm_documentoid_value": "22eb08e6-4929-ed11-9db1-0022480828cf",
              "cxm_procedencia@OData.Community.Display.V1.FormattedValue": "Cliente",
              "cxm_procedencia": 3,
              "cxm_mx_mst_acl_matz_documentoid": "0aa1435f-a2ea-ed11-a7c6-000d3a590965"
            }
          ]
        }      
    return {} as any;
  }

  async getDataArbolOficiales(usuarioId: any): Promise<any> {
    let reqData = await this.requestGet("/api/data/v9.2/cxm_mx_cat_usu_arbol_oficials?$select=cxm_claveoficial&$filter=_cxm_usuarioid_value eq " + usuarioId)
    if (reqData.ok)
      return reqData.data
    else if (typeof Xrm === "undefined")
      return {
        "@odata.context": "https://mx-evolucioncxm-dyn-dev.crm.dynamics.com/api/data/v9.2/$metadata#cxm_mx_cat_usu_arbol_oficials(cxm_claveoficial)",
        "value": [
          {
            "@odata.etag": "W/\"270187354\"",
            "cxm_claveoficial": "PP98",
            "cxm_mx_cat_usu_arbol_oficialid": "94480bf9-ea8d-ed11-81ac-6045bd019be7"
          }
        ]
      }     
    return {} as any;
  }

  async getCatalogoIndicadores(): Promise<any> {
    let reqData = await this.requestGet("api/data/v9.2/cxm_mx_cat_acl_indicadors?$select=cxm_icono,cxm_name")
    if (reqData.ok)
      return reqData.data
    else if (typeof Xrm === "undefined")
      return {
        "@odata.context": "https://mx-evolucioncxm-dyn-dev.crm.dynamics.com/api/data/v9.2/$metadata#cxm_mx_cat_acl_indicadors(cxm_icono,cxm_name)",
        "value": [
          {
            "cxm_icono": "FUNC069",
            "cxm_name": "Cliente Reincidente",
            "cxm_mx_cat_acl_indicadorid": "4b1d1271-26da-ed11-a7c7-000d3a590965"
          },
          {
            "cxm_icono": "CHAN031",
            "cxm_name": "Cliente vulnerable",
            "cxm_mx_cat_acl_indicadorid": "324e597f-26da-ed11-a7c7-000d3a590965"
          },
          {
            "cxm_icono": "FUNC069",
            "cxm_name": "Cliente recurrente",
            "cxm_mx_cat_acl_indicadorid": "3ae57e85-26da-ed11-a7c7-000d3a590965"
          },
          {
            "cxm_icono": "SERV104",
            "cxm_name": "Cliente Sensible",
            "cxm_mx_cat_acl_indicadorid": "d51d838b-26da-ed11-a7c7-000d3a590965"
          },
          {
            "cxm_icono": "FUNC121",
            "cxm_name": "Lista Negra",
            "cxm_mx_cat_acl_indicadorid": "f01d838b-26da-ed11-a7c7-000d3a590965"
          },
          {
            "cxm_icono": "FUNC121",
            "cxm_name": "Zona roja",
            "cxm_mx_cat_acl_indicadorid": "4f8c8291-26da-ed11-a7c7-000d3a590965"
          }
        ]
      }    
    return {} as any;
  }

  async getDataIndicadoresCliente(clientId: any): Promise<any> {
    const fechaActual = new Date();
    console.log('fechaActual', fechaActual);
    let reqData = await this.requestGet("/api/data/v9.2/cxm_mx_det_acl_indicadorclientes?$select=_cxm_contactid_value,createdon,_cxm_indicadorid_value&$filter=(_cxm_contactid_value eq " + clientId +" and createdon ge 2022-05-08T23:13:00.000Z)&$orderby=_cxm_indicadorid_value asc")
    if (reqData.ok)
      return reqData.data
    else if (typeof Xrm === "undefined")
      return {
        "@odata.context": "https://mx-evolucioncxm-dyn-dev.crm.dynamics.com/api/data/v9.2/$metadata#cxm_mx_det_acl_indicadorclientes(_cxm_contactid_value,createdon,_cxm_indicadorid_value)",
        "value": [
          {
            "_cxm_contactid_value": "d81a80be-52f9-ec11-bb3d-6045bd0076b9",
            "_cxm_indicadorid_value": "3ae57e85-26da-ed11-a7c7-000d3a590965",
          },
          {
            "_cxm_contactid_value": "d81a80be-52f9-ec11-bb3d-6045bd0076b9",
            "_cxm_indicadorid_value": "4b1d1271-26da-ed11-a7c7-000d3a590965",
          },
          {
            "_cxm_contactid_value": "d81a80be-52f9-ec11-bb3d-6045bd0076b9",
            "_cxm_indicadorid_value": "4b1d1271-26da-ed11-a7c7-000d3a590965",
          },
          {
            "_cxm_contactid_value": "d81a80be-52f9-ec11-bb3d-6045bd0076b9",
            "_cxm_indicadorid_value": "4b1d1271-26da-ed11-a7c7-000d3a590965",
          }
        ]
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
