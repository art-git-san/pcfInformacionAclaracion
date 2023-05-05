import React, { useEffect, useRef, useState } from 'react';
import Producto  from './Movimientos/ProductoComponent';

const Movimientos = (props: any) => {

    return (   
        <Producto {... props}></Producto>      
    );
  
}

export default Movimientos;