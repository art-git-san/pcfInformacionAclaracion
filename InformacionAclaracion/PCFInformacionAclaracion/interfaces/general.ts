import { IInputs } from '../generated/ManifestTypes';

export interface Dynamics {
  context: ComponentFramework.Context<IInputs>
}

export interface DataClient {
  '@odata.context': string;
  '@odata.etag': string;
   cxm_clientereincidenteaclaraciones: boolean; 
   cxm_clientevulnerableaclaraciones: boolean; 
   cxm_clienterecurrenteaclaraciones: boolean; 
   cxm_clientesensibleaclaraciones: boolean; 
   fake_clientelistasnegrasaclaraciones: boolean; 
   
 }
 export interface DataResponseIn {
  incidents:DataIncident

 }

export interface DataIncident {
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
   //FAKE
  fake_cedularesolutoria:string;

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
}


export interface IndicadoresI {
  incidentid: string,
  'cxm_tipocolectivouniversidad@OData.Community.Display.V1.FormattedValue': string;
  cxm_tipocolectivouniversidad: number;
  'cxm_tipodigital@OData.Community.Display.V1.FormattedValue': string;
  cxm_tipodigital: number;
  'cxm_tipoempleado@OData.Community.Display.V1.FormattedValue': string;
  cxm_tipoempleado: number;
  'cxm_tipoindicadorriesgo@OData.Community.Display.V1.FormattedValue': string;
  cxm_tipoindicadorriesgo: number;
  'cxm_tiposantanderpersonal@OData.Community.Display.V1.FormattedValue': string;
  cxm_tiposantanderpersonal: number;
  'cxm_tipocliente@OData.Community.Display.V1.FormattedValue': string;
  cxm_tipocliente: number;
  'cxm_tiponominabiente@OData.Community.Display.V1.FormattedValue': string;
  cxm_tiponominabiente: number;
  cxm_mx_det_per_kpiid: string;
  cxm_claveoficialsantanderpersonal: string | null,
  cxm_correoelectronicosantanderpersonal: string | null,
  cxm_nombresantanderpersonal: string | null,
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
  // '@odata.etag': string;
  cxm_documentoentregado: boolean;
  createdon: Date;
  '_cxm_documentoid_value@OData.Community.Display.V1.FormattedValue':string;
  '_cxm_documentoid_value@Microsoft.Dynamics.CRM.lookuplogicalname':string;
  _cxm_documentoid_value:string;
  'cxm_procedencia@OData.Community.Display.V1.FormattedValue':string;
  cxm_procedencia:number; 
  cxm_mx_mst_acl_matz_documentoid:string

}