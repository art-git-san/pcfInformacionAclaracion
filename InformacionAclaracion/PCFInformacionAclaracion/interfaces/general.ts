import { IInputs } from '../generated/ManifestTypes';

export interface Dynamics {
  context: ComponentFramework.Context<IInputs>
}

export interface DataResponseIn {
  incidents:DataIncident
}

export interface DataIncident {
  _customerid_value: string;
  '@odata.context': string;
  '@odata.etag': string;
  '_createdby_value@OData.Community.Display.V1.FormattedValue': string;
  '_createdby_value@Microsoft.Dynamics.CRM.lookuplogicalname': string;
  _createdby_value:string;
  '_cxm_categoriaid_value@OData.Community.Display.V1.FormattedValue':string;
  '_cxm_categoriaid_value@Microsoft.Dynamics.CRM.lookuplogicalname':string;
  _cxm_categoriaid_value:string;
  '_cxm_subcategoriaid_value@OData.Community.Display.V1.FormattedValue':string;
  '_cxm_subcategoriaid_value@Microsoft.Dynamics.CRM.lookuplogicalname':string;
  _cxm_subcategoriaid_value:string;
  'casetypecode@OData.Community.Display.V1.FormattedValue':string;
  casetypecode:number;
  '_cxm_motornormativoid_value@OData.Community.Display.V1.FormattedValue':string;
  '_cxm_motornormativoid_value@Microsoft.Dynamics.CRM.lookuplogicalname':string;
  _cxm_motornormativoid_value:string;
  cxm_cadenanormativa:string;
  'cxm_montototal@OData.Community.Display.V1.FormattedValue':string;
  cxm_montototal:number; 
  cxm_fechaestimadacierre:string;
  numberofchildincidents :number;
  //New
  cxm_sys_jsonmovimiento:string;
  cxm_sys_jsonproducto:string;
  'cxm_tipocasoalta@OData.Community.Display.V1.FormattedValue':string;
  cxm_tipocasoalta:number;
  //New
  "cxm_tipoestatustransaccion@OData.Community.Display.V1.FormattedValue":string;
  cxm_tipoestatustransaccion:number;
  cxm_motornormativodescripcion:string;
  "cxm_estatusplastico@OData.Community.Display.V1.FormattedValue":string;
  cxm_estatusplastico:number;
  cxm_fechaestatusplastico:string;
  "cxm_tipoabono@OData.Community.Display.V1.FormattedValue":string;
  cxm_tipoabono:number;
  "cxm_tipocargo@OData.Community.Display.V1.FormattedValue":string;
  cxm_tipocargo:number;   
  cxm_vozcliente: string;
  _cxm_usuarioaltaid_value: string;
  _cxm_unidadnegocioid_value: string;
  "_cxm_unidadnegocioid_value@OData.Community.Display.V1.FormattedValue": string;
}

export interface DataMovimientos {
  cxm_sys_jsonmovimiento:string;
  cxm_sys_jsonproducto:string;
}

export interface DataMovimiento {
  comercio: string,
  codigo:string,
  refer:string,
  sia:string,
  tarjeta:string,
  ubicacionComercio:string,
  tecnCobro:string,
  promocion:string,
  tipoCargo:string,
  monto:number,
  comercioSeguro:boolean,
  canal:string,
  factura:string,
  fechaMov:string,
  centroCostos:string,
  tokens:string,
  sucursal:string,
  status:string,
  numOperacion:string,
  numFact:string,
  idxProd:string,
  idxMov:string,
  tipoProd:string,  
  JSONprod:string
}

export interface DataProducto {
  id:number,
  pan:string,
  name:string
}

export interface DataDocumentos { 
  cxm_documentoentregado: boolean;
  createdon: Date;
  '_cxm_documentoid_value@OData.Community.Display.V1.FormattedValue':string;
  '_cxm_documentoid_value@Microsoft.Dynamics.CRM.lookuplogicalname':string;
  _cxm_documentoid_value:string;
  'cxm_procedencia@OData.Community.Display.V1.FormattedValue':string;
  cxm_procedencia:number; 
  cxm_mx_mst_acl_matz_documentoid:string
}

export interface DataArbolOficiales {
  cxm_claveoficial:string;
  cxm_mx_cat_usu_arbol_oficialid:string;
}

export interface CatalogoIndicadores {
  cxm_name:string;
  cxm_icono:string;
  cxm_mx_cat_acl_indicadorid:string;
  activo: boolean;
}

export interface DataIndicadoresCliente {
  _cxm_indicadorid_value:string;
}

export interface DataNotificaciones {
  cxm_estatus: string;
  "createdon@OData.Community.Display.V1.FormattedValue": string;
  createdon: Date;
  cxm_procedencia: string;
}
