import React, { useEffect, useRef, useState } from 'react';
import { DataClient, DataProducto, Dynamics } from '../../interfaces/general';
import Documentos from '../Movimientos/DocumentosComponent';
import { incidentProps } from '../../interfaces/props';
import { DataMovimiento } from '../../interfaces/general';

const Producto = (props: incidentProps) => {
    const [isActive, setIsActive] = useState(true);
    const { dataIncident } = props;
    const getFormatFecha = (fecha:any) => {
        let date= new Date(fecha);   
        const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];         
        return  date.getDate() +" "+  meses[date.getMonth()] +" "+ date.getFullYear();        
    }     
    let dataMovimiento: DataMovimiento = JSON.parse(dataIncident?.cxm_sys_jsonmovimiento);  
    let dataProducto: DataProducto = JSON.parse(dataIncident?.cxm_sys_jsonproducto);
    return (
    <>    
      <div className="aclinfo-prod"> 
        <div className="aclinfo-grid-prod-first" onClick={() => setIsActive(!isActive)}>
            <div className='aclinfo-lbl-like'>
               {dataMovimiento.tipoProd=="PROD02" ?<img src="https://mx-evolucioncxm-dyn-dev.crm.dynamics.com/Image/download.aspx?Entity=cxm_mx_cat_per_urltdc&Attribute=cxm_imagen&Id=58bff3e3-d1a7-ed11-aad0-6045bd03848f&Timestamp=638125942746632482&Full=true" className='aclinfo-header-tdc'></img>
               :               
               <img src="https://mx-evolucioncxm-dyn-dev.crm.dynamics.com/Image/download.aspx?Entity=cxm_mx_cat_per_urltdc&Attribute=cxm_imagen&Id=b71ce022-d1a7-ed11-aad0-6045bd038378&Timestamp=638132974211539557&Full=true" className='aclinfo-header-tdc'></img>}                   
                <span>{dataProducto.name}</span>
                {/* <span>***8765</span> */}
            </div>
            <div className="aclinfo-cell">
                <div className="aclinfo-cell-div cell-div-mt"></div>
                <div className='aclinfo-cell-padding'> 
                    <div className="aclinfo-cell-lbls">
                        <span className="aclinfo-lbl">FECHA DE MOVIMIENTO</span>   
                        <span className="aclinfo-lbl-val">{getFormatFecha(dataMovimiento.fechaMov)}</span>                      
                    </div>  
                </div>              
            </div>
            <div className="aclinfo-cell">
                 <div className="aclinfo-cell-div cell-div-mt"></div> 
                 <div className='aclinfo-cell-padding'>                
                    <div className="aclinfo-cell-lbls">
                        <span className="aclinfo-lbl">MONTO MOVIMIENTO</span>
                        <span className="aclinfo-lbl-val">${dataMovimiento.monto} MXN</span>
                        {/* <span className="aclinfo-cell-lbls">MXN</span> */}
                    </div> 
                  </div>     
            </div>
            <div className="aclinfo-cell">
                <div className="aclinfo-cell-div cell-div-mt"></div> 
                <div className="aclinfo-btn"><span className="aclinfo-lbl-btn">CONCILIADO</span></div> 
            </div>
            <div className="aclinfo-cell">
                <div className="aclinfo-cell-div cell-div-mt"></div>  
                <div className='aclinfo-cell-padding'>  
                    <div className="aclinfo-cell-lbls">
                        <span className="aclinfo-lbl">TIPO DE TARJETA</span>
                        <span className="aclinfo-lbl-val">{dataMovimiento.tarjeta}</span>
                    </div>  
                </div>    
            </div>
            <div className="aclinfo-cell">
                <div className="aclinfo-cell-div cell-div-mt"></div>   
                <div className='aclinfo-cell-padding'> 
                    <div className="aclinfo-cell-lbls">             
                        <span className="aclinfo-lbl">ESTABLECIMIENTO DE COMPRA</span>
                        {/* <span className="aclinfo-lbl-val-grape">SUPER VASCO DE QUIROGA MEXICO DF 000 MX</span>                       */}
                        <span className="aclinfo-lbl-val-grape">{dataMovimiento.ubicacionComercio}</span>    
                    </div>                   
                </div>     
            </div>           
            <div>    
                <div className='aclinfo-cell-padding'>                 
                        {isActive ?  <i className="isan-SYS018"></i> :  <i className="isan-SYS019"></i>     }               
                </div>     
            </div>
        </div> 
        {isActive && <div  className="aclinfo-grid-prod-second">
            <div className="aclinfo-cell">
                <div className='aclinfo-cell-padding'> 
                    <div className="aclinfo-cell-lbls">             
                        <span className="aclinfo-lbl">DESCRIPCIÓN DE TOKENS</span>
                        <span className="aclinfo-lbl-val">Aquí está considerado para la infomación de texto de la descripción de tokens</span>
                    </div>  
                </div>  
            </div> 
            <div className="aclinfo-cell">
                <div className="aclinfo-cell-div cell-div-mt"></div>  
                <div className='aclinfo-cell-padding'>  
                    <div className="aclinfo-cell-lbls">                
                        <span className="aclinfo-lbl">DESCRIPCIÓN DE MOTOR</span>
                        <span className="aclinfo-lbl-val">Aquí está considerado para la infomación de texto de la descripción de motor</span>
                    </div>
                </div>  
            </div>   
        </div> } 
        {isActive &&<div  className="aclinfo-grid-prod-third">
            <div className="aclinfo-cell">  
                <div className='aclinfo-cell-padding'>               
                    <div className="aclinfo-cell-lbls">
                        <span className="aclinfo-lbl">ESTATUS DE TARJETA</span>
                        <span className="aclinfo-lbl-val">BLOQUE TEMPORAL</span>
                    </div>
                </div>  
            </div>
            <div className="aclinfo-cell">
                <div className="aclinfo-cell-div cell-div-mt"></div> 
                <div className='aclinfo-cell-padding'> 
                    <div className="aclinfo-cell-lbls">
                        <span className="aclinfo-lbl">INFOLESS</span>
                        <span className="aclinfo-lbl-val">SI/NO</span>
                    </div>  
                </div>    
            </div>
            <div className="aclinfo-cell">
                <div className="aclinfo-cell-div cell-div-mt"></div>   
                <div className='aclinfo-cell-padding'>
                    <div className="aclinfo-cell-lbls">
                        <span className="aclinfo-lbl">FECHA DE ESTATUS</span>
                        <span className="aclinfo-lbl-val">07 ENE 2023</span>
                    </div>  
                </div>    
            </div>
            <div className="aclinfo-cell">
                <div className="aclinfo-cell-div cell-div-mt"></div>
                <div className='aclinfo-cell-padding'>   
                    <div className="aclinfo-cell-lbls">
                        <span className="aclinfo-lbl">TIPO DE ABONO</span>
                        <span className="aclinfo-lbl-val">TEMPORAL</span>
                    </div>  
                </div>    
            </div>
            <div className="aclinfo-cell">
                <div className="aclinfo-cell-div cell-div-mt"></div>  
                <div className='aclinfo-cell-padding'> 
                    <div className="aclinfo-cell-lbls">
                        <span className="aclinfo-lbl">TIPO DE COMPRA</span>
                        <span className="aclinfo-lbl-val">{dataMovimiento.tipoCargo}</span>
                    </div>  
                </div>    
            </div>
            <div className="aclinfo-cell">
                <div className="aclinfo-cell-div cell-div-mt"></div>
                <div className='aclinfo-cell-padding'>   
                    <div className="aclinfo-cell-lbls">
                        <span className="aclinfo-lbl">DIVISA</span>
                        <span className="aclinfo-lbl-val">MXN</span>
                    </div>  
                </div>    
            </div>
            <div className="aclinfo-cell">
                <div className="aclinfo-cell-div cell-div-mt"></div> 
                <div className='aclinfo-cell-padding'>  
                    <div className="aclinfo-cell-lbls">
                        <span className="aclinfo-lbl">MONTO ORIGINAL</span>
                        {/* <span className="aclinfo-lbl-val">--</span> */}
                        <span className="aclinfo-lbl-val">${dataMovimiento.monto}</span>
                    </div>  
                </div>    
            </div>
            <div className="aclinfo-cell">
                <div className="aclinfo-cell-div cell-div-mt"></div> 
                <div className='aclinfo-cell-padding'>  
                    <div className="aclinfo-cell-lbls">
                        <span className="aclinfo-lbl">TIPO DE CAMBIO</span>
                        <span className="aclinfo-lbl-val">$123.00</span>
                    </div>  
                </div>    
            </div>   
        </div>}              
     </div>
     {isActive &&<Documentos {... props}></Documentos>}
    </>
    );
  
}

export default Producto;