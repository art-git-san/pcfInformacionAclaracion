import React, { useEffect, useState } from 'react';
import { DataNotificaciones } from '../../interfaces/general';
import { DataService } from '../../services/getData.services';

const Notificaciones = (props: any) => {
    const { dataIncident } = props;
    const dataService = new DataService();
    const [dataNotificaciones, setDataNotificaciones] = useState<DataNotificaciones[]>();
    useEffect(() => {
        const requestDataNotificaciones = async () => {
            const reponseNotificaciones = await dataService.getDataNotificaciones(dataIncident.incidentid, "");
            setDataNotificaciones(reponseNotificaciones.value);
        };
        requestDataNotificaciones();
    }, [])

    const formatDate = (date: Date) => {
        function pad(s: any) { return (s < 10) ? '0' + s : s; }
        var d = new Date(date)
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
    }
    return (
        <>
            <span className='aclinfo-documentos'>Notificaciones</span>
            <div className="aclinfo-tabla-docs-Not bt-1 pl-2">
                <div><span className='aclinfo-cell-docs'>PROCEDENCIA</span></div>
                <div><span className='aclinfo-cell-docs'>FECHA DE CREACIÓN</span></div>
                <div><span className='aclinfo-cell-docs'>BANDERA</span></div>
            </div>
            {dataNotificaciones && dataNotificaciones.length > 0 ?
                dataNotificaciones?.map((notificacion, idm: number) => {
                    return <div className="aclinfo-tabla-docs-Not pl-1" key={"ind-" + idm.toString()}>
                        <div><span className="aclinfo-cell-docs-val">{notificacion.cxm_procedencia}</span></div>
                        <div><span className="aclinfo-cell-docs-val">{formatDate(notificacion.createdon)}</span></div>
                        <div className="aclinfo-cell-docs-val"><div className="aclinfo-doc-btn"><span className="aclinfo-doc-lbl-btn">{notificacion.cxm_estatus}</span></div></div>
                    </div>
                })
                :
                <div className="aclinfo-sin-notifificaciones">
                    <span>No hay notificaciones para mostrar</span>
                </div>
            }
        </>
    );
}

export default Notificaciones;