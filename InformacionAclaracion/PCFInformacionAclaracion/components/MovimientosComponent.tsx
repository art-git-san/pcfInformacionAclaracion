import React, { useEffect, useRef, useState } from 'react';
import { DataClient, Dynamics } from '../interfaces/general';
import { DataService } from '../services/getData.services'; 
import Producto  from './Movimientos/ProductoComponent';
import Documentos from './Movimientos/DocumentosComponent';

const Movimientos = (props: any) => {
  
    return (
      <div className="aclinfo-main">  
        <div><span className="aclinfo-movimientos-span">MOVIMIENTOS</span></div>
        <div className="aclinfo-movimientos-line"></div>
        <Producto {... props}></Producto>
        <Documentos {... props}></Documentos>
        <Producto {... props}></Producto>
        <Documentos {... props}></Documentos>
        <div>
           <div className="aclinfo-rectangle"></div>
           <div className="aclinfo-back">
             <label className='aclinfo-label-fin'>
              Finalizar aclaración
            </label>
           </div>
        </div>
      </div>
    );
  
}

export default Movimientos;