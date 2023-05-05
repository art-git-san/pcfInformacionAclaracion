import React, { useEffect, useRef, useState } from 'react';
import { DataIncident, Dynamics } from '../interfaces/general';
import { DataService } from '../services/getData.services'; 
import ClienteAclaraciones from './ClienteAclaracionesComponent';
import InformacionAclaracion  from './InformacionAclaracion';
import Movimientos from './MovimientosComponent'


const App = (props: Dynamics) => {
  const ref = useRef<HTMLDivElement>(null); 

  const dataService = new DataService();
  const [DataIncident, setDataIncident] = useState<DataIncident>();


  useEffect(() => {
  
    const requestDataIncident = async () => {
      const data = await dataService.getDataAclaracion()
      setDataIncident(data);       
    };  
    requestDataIncident();
  }, [])

return <div className='img.Back-component-Copy'>  
    {DataIncident && <>      
        <InformacionAclaracion dataIncident={DataIncident}></InformacionAclaracion>
        <ClienteAclaraciones {...props}></ClienteAclaraciones>
        <Movimientos {...props}></Movimientos>        
    </>}  
</div>
}

export default App;