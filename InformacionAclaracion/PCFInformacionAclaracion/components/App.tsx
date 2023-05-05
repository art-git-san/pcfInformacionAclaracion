import React, { useEffect, useRef, useState } from 'react';
import { DataResponseIn, DataIncident, Dynamics, DataMovimientos } from '../interfaces/general';
import { DataService } from '../services/getData.services'; 
import ClienteAclaraciones from './ClienteAclaracionesComponent';
import InformacionAclaracion  from './InformacionAclaracion';
import Movimientos from './MovimientosComponent'


const App = (props: Dynamics) => {
  const ref = useRef<HTMLDivElement>(null); 

  const dataService = new DataService();
  const [DataIncident, setDataIncident] = useState<DataIncident>();
  const [DataResult, setDataResult] = useState<any>();
  useEffect(() => {
  
    const requestDataIncident = async () => {
    const data = await dataService.getDataAclaracion()
    console.log(data.cxm_tipocasoalta);
    if(data.cxm_tipocasoalta!=3){
        const results = await dataService.getDataAclaracionMovs(data.cxm_tipocasoalta)        
        let responseD: DataIncident[] = [];
        let items: number=0;
        for (var i = 0; i < results.value.length; i++) {
          var result = results.value[i];           
          for (var j = 0; j < result.incident_parent_incident.length; j++) {     
            if(data.cxm_tipocasoalta==2){
                const JSON_string =   JSON.stringify(result.incident_parent_incident[j]);
                let dataMovs: DataIncident = JSON.parse(JSON_string);
                responseD[items]=dataMovs;
                items++;
            }
            else if(data.cxm_tipocasoalta==1){
              for (var k = 0; k <  result.incident_parent_incident[j].incident_parent_incident.length; k++) {
                const JSON_string =   JSON.stringify(result.incident_parent_incident[j].incident_parent_incident[k]);
                let dataMovs: DataIncident = JSON.parse(JSON_string);
                responseD[items]=dataMovs;
                items++;
              }
            }           
             
          }
        }
          setDataResult(responseD);
    }  
      setDataIncident(data);  

    };  
    requestDataIncident();
  }, [])
  
return <div className='img.Back-component-Copy'>  
    {DataIncident && <>  
     <InformacionAclaracion dataIncident={DataIncident}></InformacionAclaracion>
     <ClienteAclaraciones {...props}></ClienteAclaraciones>
     <div className="aclinfo-main">  
        <div><span className="aclinfo-movimientos-span">MOVIMIENTOS</span></div>
        <div className="aclinfo-movimientos-line"></div>      
        {
          DataIncident.cxm_tipocasoalta==3?  <Movimientos  dataIncident={DataIncident}></Movimientos> :             
          DataResult.map((data:any) => {  
            return <Movimientos  dataIncident={data}></Movimientos>  
          })
        }       
        <div>
           <div className="aclinfo-rectangle"></div>
           <div className="aclinfo-back">
             <label className='aclinfo-label-fin'>
              Finalizar aclaración
            </label>
           </div>
        </div>
      </div>  
    </>}  
</div>

}

export default App;