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
  cxm_motornormativodescripcion: string;
   //FAKE
  fake_cedularesolutoria:string;
}


export interface IndicadoresI {
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