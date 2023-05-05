import React, { useEffect, useRef, useState } from 'react';
import { incidentProps } from '../interfaces/props';


const InformacionAclaracion = (props: incidentProps) => {
  const ref = useRef<HTMLDivElement>(null); 
  const { dataIncident } = props;

  return <div className='main-shadow'>      
            <div className='iac-info'>
                 <div className="pleca-copy"></div>
                 <span className="Title-Copy">INFORMACIÓN DE LA ACLARACIÓN:</span>
                 <div className="iac-gradient">
                     <span className="iac-gradient-field-1">Cédula resolutora:</span>
                      <div className="iac-lkpark">
                         <i className="isan-BAN099"></i>                    
                         <span className="iac-gradient-value">{dataIncident?.fake_cedularesolutoria}</span>   
                      </div>                     
                 </div>
            </div>
            <div className="iac-datos">
                <div className="iac-datos-inte">
                    <div className="iac-datos-recf">
                        <div className="iac-oval">                          
                               <i className="isan-CHAN028"></i>                     
                        </div>
                        <div className="iac-spn-ali">
                            <span className="iac-ej">Ejecutivo de alta </span>
                            <span className="iac-esc">{dataIncident?.['_createdby_value@OData.Community.Display.V1.FormattedValue']}</span>
                            <span className="iac-buc">Oficial: OF-414192</span>
                        </div>  
                    </div>
                    <div className="iac-datos-recs">
                        <div className="iac-spn-ali">
                            <span className="iac-gradient-field">Categoria </span>
                            <div className="iac-gradient-dat"> 
                                <div className="iac-rect-in">
                                    <i className="isan-BAN099"></i>                    
                                    <span className="iac-gradient-value">{dataIncident?.['_cxm_categoriaid_value@OData.Community.Display.V1.FormattedValue']}</span>
                                </div>  
                            </div>
                        </div>
                        <div className="iac-spn-ali">
                            <span className="iac-gradient-field">Subcategoria</span>
                            <div className="iac-gradient-dat-r"> 
                                <div className="iac-rect-in">
                                     <span className="iac-gradient-value">{dataIncident?.['_cxm_subcategoriaid_value@OData.Community.Display.V1.FormattedValue']}</span>                                  
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="iac-datos-inte-grid">                  
                        <div className="iac-datos-inte-res">
                            <span className="iac-evaluacin-cuestiona">Evaluación cuestionarios:</span>
                            <span className="iac-cargo-doble">Cargo Doble</span>
                        </div>                   
                        <div className="iac-datos-inte-fl">
                            <span className="iac-tipo-aclaracin">
                            <span className="text-style-1">Tipo: </span>{dataIncident?.['casetypecode@OData.Community.Display.V1.FormattedValue']}</span>
                        </div>
                        <div className="iac-ta-left">
                                <span className="iac-tipificacin-compra-2">Tipificación:</span>
                                <span className="iac-tipificacin-compra"> {dataIncident?.['_cxm_categoriaid_value@OData.Community.Display.V1.FormattedValue']} {dataIncident['_cxm_subcategoriaid_value@OData.Community.Display.V1.FormattedValue']}</span>
                        </div>             
                </div>
                {/* <div className="iac-datos-lin"> 
                    <div className="iac-datos-inte">
                        <div className="iac-datos-inte-res">
                            <span className="iac-evaluacin-cuestiona">Evaluación cuestionarios:</span>
                            <span className="iac-cargo-doble">Cargo Doble</span>
                        </div>
                        <div className="iac-datos-inte-di">
                            <span className="iac-tipo-aclaracin">
                            <span className="text-style-1">Tipo:</span>{dataIncident?.['casetypecode@OData.Community.Display.V1.FormattedValue']}</span>
                        </div>
                        <div className="iac-datos-inte-di">
                            <div className="iac-datos-tip">
                                <span className="iac-tipificacin-compra-2">Tipificación:</span>
                                <span className="iac-tipificacin-compra"> {dataIncident?.['_cxm_categoriaid_value@OData.Community.Display.V1.FormattedValue']} {dataIncident['_cxm_subcategoriaid_value@OData.Community.Display.V1.FormattedValue']}</span>
                            </div>                             
                        </div>
                    </div>
                </div> */}
                <div className="iac-datos-inte-grid">                  
                    <div className="iac-datos-col">                         
                            <div className="iac-datos-area">
                                <span className="iac-total-movimientos">Total Movimientos</span>
                                <span className="iac-span-mov">{dataIncident?.numberofchildincidents}</span>
                            </div>
                            <div className="iac-datos-col-lin">
                                <div className="iac-montost">
                                     <span className="iac-monto-total">Monto total</span>    
                                </div> 
                                <div className="iac-montost">
                                    <span className="iac-mxn">
                                      {dataIncident?.['cxm_montototal@OData.Community.Display.V1.FormattedValue']}
                                    </span>   
                                    <span className="iac-mxntext-style-1">mxn</span>
                                </div>  
                            </div>                       
                    </div>             
                    <div className="iac-datos-inte-fl">
                           <span className="iac-motor-normativo-Apl">
                              Motor normativo:<span className="text-style-1">{dataIncident?.['cxm_montototal@OData.Community.Display.V1.FormattedValue']}</span>
                            </span>
                    </div>
                    <div className="iac-ta-left">
                        <span className="iac-cadena-normativa-TD">
                              Cadena normativa:<span className="text-style-1">{dataIncident?.cxm_cadenanormativa}</span>
                         </span>
                    </div>             
                </div>

                {/* <div className="iac-datos-lin">
                    <div className="iac-datos-inte">
                        <div className="iac-datos-col">                         
                            <div className="iac-datos-area">
                                <span className="iac-total-movimientos">Total Movimientos</span>
                                <span className="iac-span-mov">{dataIncident?.numberofchildincidents}</span>
                            </div>
                            <div className="iac-datos-col-lin">
                                <div className="iac-montost">
                                     <span className="iac-monto-total">Monto total</span>    
                                </div> 
                                <div className="iac-montost">
                                    <span className="iac-mxn">
                                      {dataIncident?.['cxm_montototal@OData.Community.Display.V1.FormattedValue']}
                                    </span>   
                                    <span className="iac-mxntext-style-1">mxn</span>
                                </div>  
                            </div>                       
                        </div>
                        <div className="iac-datos-inte-di">                      
                             <span className="iac-motor-normativo-Apl">
                              Motor normativo:<span className="text-style-1">{dataIncident?.['cxm_montototal@OData.Community.Display.V1.FormattedValue']}</span>
                            </span>
                        </div>
                        <div className="iac-datos-inte-di">                     
                             <span className="iac-cadena-normativa-TD">
                              Cadena normativa:<span className="text-style-1">{dataIncident?.cxm_cadenanormativa}</span>
                              </span>
                        </div>
                     </div>
                </div> */}
            </div>     
         </div>   
  
}

export default InformacionAclaracion;