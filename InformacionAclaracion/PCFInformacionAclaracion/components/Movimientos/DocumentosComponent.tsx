import React, { useEffect, useState } from 'react';
import { DataDocumentos } from '../../interfaces/general';
import { DataService } from '../../services/getData.services';

const Documentos = (props: any) => {
    const { dataIncident } = props;
    const dataService = new DataService();
    const [DataResult, setDataResult] = useState<any>();
    useEffect(() => {

        const requestDataDocuments = async () => {
            const results = await dataService.getDataDocumentos(dataIncident.incidentid)
            let responseD: DataDocumentos[] = [];
            for (var i = 0; i < results.value.length; i++) {
                var result = results.value[i];
                const JSON_string = JSON.stringify(result);
                let dataDocs: DataDocumentos = JSON.parse(JSON_string);
                responseD[i] = dataDocs;
            }
            setDataResult(responseD);
        };
        requestDataDocuments();
    }, [])
    const formatDate = (date: Date) => {
        function pad(s: any) { return (s < 10) ? '0' + s : s; }
        const d = new Date(date)
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
    }
    return (
        <div>
            <span className='aclinfo-documentos'>Documentos solicitados</span>
            <div className="aclinfo-tabla-docs bt-1 pl-2">
                <div><span className='aclinfo-cell-docs'>PROCEDENCIA</span></div>
                <div><span className='aclinfo-cell-docs'>FECHA DE CREACIÓN</span></div>
                <div><span className='aclinfo-cell-docs'>NOMBRE DOCUMENTO</span></div>
                <div><span className='aclinfo-cell-docs'>TIPO</span></div>
                <div><span className='aclinfo-cell-docs'>VISUALIZAR</span></div>
            </div>
            {
                DataResult && <>
                    {DataResult.map((data: any, idm: number) => {
                        return <div className="aclinfo-tabla-docs pl-1" key={"doc-" + idm.toString()}>
                            <div><span className="aclinfo-cell-docs-val">{data?.['cxm_procedencia@OData.Community.Display.V1.FormattedValue']}</span></div>
                            <div><span className="aclinfo-cell-docs-val">{formatDate(data.createdon)}</span></div>
                            <div><span className="aclinfo-cell-docs-val">{data?.['_cxm_documentoid_value@OData.Community.Display.V1.FormattedValue']}</span></div>
                            <div> <i className="isan-DOC014"></i> </div>
                            <div> <i className="isan-FUNC123"></i> </div>
                        </div>
                    })}
                </>
            }
        </div>
    );
}

export default Documentos;