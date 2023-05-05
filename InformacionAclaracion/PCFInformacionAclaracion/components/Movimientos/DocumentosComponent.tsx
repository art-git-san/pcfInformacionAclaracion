import React, { useEffect, useRef, useState } from 'react';
import { DataClient, Dynamics } from '../../interfaces/general';
import { DataService } from '../../services/getData.services'; 

const Documentos = (props: any) => {
  
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
        <div className="aclinfo-tabla-docs pl-1">                        
            <div><span className="aclinfo-cell-docs-val">Prosa</span></div>  
            <div><span className="aclinfo-cell-docs-val">05/07/2023</span></div>  
            <div><span className="aclinfo-cell-docs-val">LOG-PROSA.pdf</span></div>          
            <div> <i className="isan-DOC014"></i> </div>
            <div> <i className="isan-FUNC123"></i> </div>
        </div>
        <div className="aclinfo-tabla-docs pl-1">        
            <div><span className="aclinfo-cell-docs-val">Cliente</span></div>  
            <div><span className="aclinfo-cell-docs-val">13/07/2023</span></div>  
            <div><span className="aclinfo-cell-docs-val">Comprobante_cancelacionCompra.pdf</span></div> 
            <div> <i className="isan-DOC014"></i> </div>
            <div> <i className="isan-FUNC123"></i> </div>
        </div>
        <div className='aclinfo-func'>
            <div className="aclinfo-cell">                
                {/* <div className="aclinfo-cell-div"></div>  */}
                <div >
                    <div><span className="aclinfo-proc-alt">Procesos alternos</span></div>
                    <div className='aclinfo-div-select'>
                        <select className='aclinfo-select'>
                            <option value={0}>Selecciona alguna opción</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="aclinfo-cell">                
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
        </div>
      </div>
    );
  
}

export default Documentos;