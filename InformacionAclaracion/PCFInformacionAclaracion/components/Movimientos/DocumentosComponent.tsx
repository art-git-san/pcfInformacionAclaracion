import React, {useEffect, useState } from 'react';
import { DataDocumentos } from '../../interfaces/general';
import { DataService } from '../../services/getData.services'; 

const Documentos = (props: any) => {
    const { dataIncident } = props;
    const dataService = new DataService();   
    const [DataResult, setDataResult] = useState<any>();
    useEffect(() => {
    
      const requestDataDocuments = async () => {   
        console.log("dataIncident");
        console.log(dataIncident.incidentid);
          const results = await dataService.getDataDocumentos(dataIncident.incidentid) 
        
          let responseD: DataDocumentos[] = [];        

          for (var i = 0; i < results.value.length; i++) {
            var result = results.value[i];
            const JSON_string =   JSON.stringify(result);
            let dataDocs: DataDocumentos = JSON.parse(JSON_string);          
            responseD[i]=dataDocs;           
          }
        setDataResult(responseD);  
  
      };  
      requestDataDocuments();
    }, [])   
    const formatDate = (date: Date) => {
        function pad(s:any) { return (s < 10) ? '0' + s : s; }
        var d = new Date(date)
        return [pad(d.getMonth()+1), pad(d.getDate()), d.getFullYear()].join('/')
      }
    return (
        <div className='aclinfo-al-iz'>  
          <span className='aclinfo-documentos'>Documentos solicitados</span>    
          <div className="aclinfo-tabla-docs bt-1 pl-2">
              <div><span className='aclinfo-cell-docs'>PROCEDENCIA</span></div>
              <div><span className='aclinfo-cell-docs'>FECHA DE CREACIÓN</span></div>
              <div><span className='aclinfo-cell-docs'>NOMBRE DOCUMENTO</span></div>
              <div><span className='aclinfo-cell-docs'>TIPO</span></div>
              <div><span className='aclinfo-cell-docs'>VISUALIZAR</span></div>    
          </div>
           
		 {DataResult && <>  
                {DataResult.map((data:any) => {                      
                    return   <div className="aclinfo-tabla-docs pl-1">                        
                        <div><span className="aclinfo-cell-docs-val">{data?.['cxm_procedencia@OData.Community.Display.V1.FormattedValue']}</span></div>                         
                        <div><span className="aclinfo-cell-docs-val">{formatDate(data.createdon)}</span></div>  
                        <div><span className="aclinfo-cell-docs-val">{data?.['_cxm_documentoid_value@OData.Community.Display.V1.FormattedValue']}</span></div>          
                        <div> <i className="isan-DOC014"></i> </div>
                        <div> <i className="isan-FUNC123"></i> </div>
                </div>
                })}
        </>}  
        <span className='aclinfo-documentos'>Notificaciones</span>    
          <div className="aclinfo-tabla-docs-Not bt-1 pl-2">
              <div><span className='aclinfo-cell-docs'>PROCEDENCIA</span></div>
              <div><span className='aclinfo-cell-docs'>FECHA DE CREACIÓN</span></div>
              <div><span className='aclinfo-cell-docs'>BANDERA</span></div>              
          </div>   
          <div className="aclinfo-tabla-docs-Not pl-1">                        
                        <div><span className="aclinfo-cell-docs-val">Comercio</span></div>                         
                        <div><span className="aclinfo-cell-docs-val">05/07/2023</span></div>  
                        {/* <div><span className="aclinfo-cell-docs-val">DEVOLUCIÓN REALIZADA</span></div>          */}
                        <div className="aclinfo-cell-docs-val"><div className="aclinfo-doc-btn"><span className="aclinfo-doc-lbl-btn">DEVOLUCIÓN REALIZADA</span></div></div>  
          </div> 
        {/* Notificaciones */}
        <div className='aclinfo-func2'>
            <div className="aclinfo-cell-bgc"> 
                <div className="aclinfo-cell"> 
                    <div className="aclinfo-cell-spa cell-div"></div>   
                    <div >
                        <div><span className="aclinfo-proc-alt">Procesos alternos</span></div>
                        <div className='aclinfo-div-select'>
                            <select className='aclinfo-select'>
                                <option value={0}>Selecciona alguna opción</option>
                            </select>
                        </div>                   
                    </div>  
                    <div className="aclinfo-cell-div cell-div"></div> 
                    <div>
                        <div><span className="aclinfo-proc-alt">Motivos de cierre</span></div>
                        <div className='aclinfo-div-select'>
                            <select className='aclinfo-select'>
                                <option value={0}>Selecciona alguna opción</option>
                            </select>
                        </div>
                    </div>              
                </div>  
                <div className="aclinfo-not-btn"><span className="aclinfo-not-lbl-btn">ENVIAR A PROCESO DE CONTRA CARGO</span></div>
            </div> 
              <div className="aclinfo-cell ">                
                  <div className="aclinfo-cell-spa cell-div"></div> 
                  <div>
                      <div><span className="aclinfo-proc-alt">Notificación al cliente</span><span className='aclinfo-notificacin-clien'>(para solicitud de comprobantes)</span></div>
                      <div className='aclinfo-div-select'>
                          <select className='aclinfo-select'>
                              <option value={0}>Selecciona alguna opción</option>
                          </select>                        
                      </div>
                      <div className='aclinfo-div-select'>
                          <select className='aclinfo-select'>
                              <option value={0}>Selecciona alguna opción</option>
                          </select>
                      </div>
                  </div>
              </div>
          </div>

          {/* <div className='aclinfo-func'>               
            <div className="aclinfo-cell bgc"> 
                <div className="aclinfo-cell-spa cell-div"></div>   
                <div >
                    <div><span className="aclinfo-proc-alt">Procesos alternos</span></div>
                    <div className='aclinfo-div-select'>
                        <select className='aclinfo-select'>
                            <option value={0}>Selecciona alguna opción</option>
                        </select>
                    </div>                   
                </div>                
            </div>
            <div className="aclinfo-cell bgc">                
                <div className="aclinfo-cell-div cell-div"></div> 
                <div>
                    <div><span className="aclinfo-proc-alt">Motivos de cierre</span></div>
                    <div className='aclinfo-div-select'>
                        <select className='aclinfo-select'>
                            <option value={0}>Selecciona alguna opción</option>
                        </select>
                    </div>
                </div>
            </div>                             
              <div className="aclinfo-cell ">                
                  <div className="aclinfo-cell-div cell-div"></div> 
                  <div>
                      <div><span className="aclinfo-proc-alt">Notificación al cliente</span><span className='aclinfo-notificacin-clien'>(para solicitud de comprobantes)</span></div>
                      <div className='aclinfo-div-select'>
                          <select className='aclinfo-select'>
                              <option value={0}>Selecciona alguna opción</option>
                          </select>                        
                      </div>
                      <div className='aclinfo-div-select'>
                          <select className='aclinfo-select'>
                              <option value={0}>Selecciona alguna opción</option>
                          </select>
                      </div>
                  </div>
              </div>
          </div> */}
        </div>
      );

    // return (
    //   <div className='aclinfo-al-iz'>  
    //     <span className='aclinfo-documentos'>Documentos solicitados</span>    
    //     <div className="aclinfo-tabla-docs bt-1 pl-2">
    //         <div><span className='aclinfo-cell-docs'>PROCEDENCIA</span></div>
    //         <div><span className='aclinfo-cell-docs'>FECHA DE CREACIÓN</span></div>
    //         <div><span className='aclinfo-cell-docs'>NOMBRE DOCUMENTO</span></div>
    //         <div><span className='aclinfo-cell-docs'>TIPO</span></div>
    //         <div><span className='aclinfo-cell-docs'>VISUALIZAR</span></div>    
    //     </div>
    //     <div className="aclinfo-tabla-docs pl-1">                        
    //         <div><span className="aclinfo-cell-docs-val">Prosa</span></div>  
    //         <div><span className="aclinfo-cell-docs-val">05/07/2023</span></div>  
    //         <div><span className="aclinfo-cell-docs-val">LOG-PROSA.pdf</span></div>          
    //         <div> <i className="isan-DOC014"></i> </div>
    //         <div> <i className="isan-FUNC123"></i> </div>
    //     </div>
    //     <div className="aclinfo-tabla-docs pl-1">        
    //         <div><span className="aclinfo-cell-docs-val">Cliente</span></div>  
    //         <div><span className="aclinfo-cell-docs-val">13/07/2023</span></div>  
    //         <div><span className="aclinfo-cell-docs-val">Comprobante_cancelacionCompra.pdf</span></div> 
    //         <div> <i className="isan-DOC014"></i> </div>
    //         <div> <i className="isan-FUNC123"></i> </div>
    //     </div>
    //     <div className='aclinfo-func'>
    //         <div className="aclinfo-cell">                
    //             {/* <div className="aclinfo-cell-div"></div>  */}
    //             <div >
    //                 <div><span className="aclinfo-proc-alt">Procesos alternos</span></div>
    //                 <div className='aclinfo-div-select'>
    //                     <select className='aclinfo-select'>
    //                         <option value={0}>Selecciona alguna opción</option>
    //                     </select>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="aclinfo-cell">                
    //             <div className="aclinfo-cell-div cell-div"></div> 
    //             <div>
    //                 <div><span className="aclinfo-proc-alt">Motivos de cierre</span></div>
    //                 <div className='aclinfo-div-select'>
    //                     <select className='aclinfo-select'>
    //                         <option value={0}>Selecciona alguna opción</option>
    //                     </select>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="aclinfo-cell ">                
    //             <div className="aclinfo-cell-div cell-div"></div> 
    //             <div>
    //                 <div><span className="aclinfo-proc-alt">Notificación al cliente</span><span className='aclinfo-notificacin-clien'>(para solicitud de comprobantes)</span></div>
    //                 <div className='aclinfo-div-select'>
    //                     <select className='aclinfo-select'>
    //                         <option value={0}>Selecciona alguna opción</option>
    //                     </select>                        
    //                 </div>
    //                 <div className='aclinfo-div-select'>
    //                     <select className='aclinfo-select'>
    //                         <option value={0}>Selecciona alguna opción</option>
    //                     </select>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //   </div>
    // );
  
}

export default Documentos;