import React, { useEffect, useRef, useState } from 'react';
import { DataClient, Dynamics } from '../interfaces/general';
import { DataService } from '../services/getData.services'; 

const ClienteAclaraciones = (props: any) => {
    const ref = useRef<HTMLDivElement>(null); 

  const dataService = new DataService();
  const [dataClient, setDataClient] = useState<DataClient>();
  

  useEffect(() => {  
    console.log("ClienteAclaraciones");
    console.log("id:"+props.context.parameters.PCFInformacionAclaracion.raw);
    const requestDataClient = async () => {
      const data = await dataService.getDataClient(props.context.parameters.PCFInformacionAclaracion.raw)
      setDataClient(data);  
      console.log("data:"+data.cxm_clientesensibleaclaraciones);    
    };  
    requestDataClient();
  }, [])

  
    return (
      <div className='clacl-indicadores'>
        {dataClient &&
          <>            
            <div className={dataClient.cxm_clientereincidenteaclaraciones ? "clacl-verde" : "clacl-gris"}>
              <div className='clacl-oval'>
                <i className='isan-FUNC069'></i>
              </div>
              <span>Reincidente</span>
            </div>
            <div className={dataClient.cxm_clientevulnerableaclaraciones ? "clacl-verde" : "clacl-gris"}>
              <div className='clacl-oval'>
                <i className='isan-CHAN031'></i>
              </div>
              <span>Vulnerable</span>
            </div>
            <div className={dataClient.cxm_clienterecurrenteaclaraciones ? "clacl-verde" : "clacl-gris"}>
              <div className='clacl-oval'>
                <i className='isan-FUNC069'></i>
              </div>
              <span>Recurrente</span>
            </div>
            <div className={dataClient.cxm_clientesensibleaclaraciones ? "clacl-verde" : "clacl-gris"}>
              <div className='clacl-oval'>
                <i className='isan-SERV104'></i>
              </div>
              <span>Sensible</span>
            </div>
            <div className={dataClient.fake_clientelistasnegrasaclaraciones ? "clacl-verde" : "clacl-gris"}>
              <div className='clacl-oval'>
                <i className='isan-FUNC121'></i>
              </div>
              <span>Listas negras</span>
            </div>           
          </>
        }
      </div>
    );
  
}

export default ClienteAclaraciones;