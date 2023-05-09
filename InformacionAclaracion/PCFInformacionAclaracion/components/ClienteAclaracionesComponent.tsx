import React, { useEffect, useState } from 'react';
import { CatalogoIndicadores, DataIndicadoresCliente } from '../interfaces/general';
import { IncidentProps } from '../interfaces/props';
import { DataService } from '../services/getData.services';

const ClienteAclaraciones = (props: IncidentProps) => {
  const { dataIncident } = props;
  const dataService = new DataService();
  const [catalogoIndicadores, setCatalogoIndicadores] = useState<CatalogoIndicadores[]>();

  useEffect(() => {

    const requestCatalogoIndicadores = async () => {
      const fechaActual = new Date();
      fechaActual.setFullYear(fechaActual.getFullYear() -1);
      const fechaConsulta = fechaActual.toISOString().slice(0, 10);

      const dataIndicadoresClient = await dataService.getDataIndicadoresCliente(dataIncident._customerid_value, fechaConsulta);
      const dataIndicadores = await dataService.getCatalogoIndicadores();
      const indicadores = dataIndicadores.value.map((val: CatalogoIndicadores) => ({ 
        cxm_name: val.cxm_name,
        cxm_icono: val.cxm_icono,
        cxm_mx_cat_acl_indicadorid: val.cxm_mx_cat_acl_indicadorid,
        activo: dataIndicadoresClient.value.some((e: DataIndicadoresCliente)=> e._cxm_indicadorid_value == val.cxm_mx_cat_acl_indicadorid),
      }));
      setCatalogoIndicadores(indicadores);
    };
    requestCatalogoIndicadores();
  }, [])

  return (
    <div className='clacl-indicadores' style={{gridTemplateColumns: 'repeat('+catalogoIndicadores?.length+', 1fr)'}}>
      {
        catalogoIndicadores?.map((indicador, idm: number) => {
          return <div className={indicador.activo ? "clacl-verde" : "clacl-gris"} key={"ind-" + idm.toString()}>
          <div className='clacl-oval'>
            <i className={indicador.cxm_icono ? 'isan-' + indicador.cxm_icono : 'isan-CHAN031'}></i>
          </div>
          <span>{indicador.cxm_name}</span>
        </div>
        })
      }
    </div>
  );
}

export default ClienteAclaraciones;