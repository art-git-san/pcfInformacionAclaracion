import React, { useEffect, useState } from 'react';
import { DataService } from '../../services/getData.services';

const Procesos = (props: any) => {

    return (
        <>
            <div className='aclinfo-func2'>
                <div className="aclinfo-cell-bgc">
                    <div className="aclinfo-cell">
                        <div className="aclinfo-cell-spa cell-div"></div>
                        <div >
                            <div><span className="aclinfo-proc-alt">Procesos alternos</span></div>
                            <div className='aclinfo-div-select'>
                                <select className='aclinfo-select'>
                                    <option value={0}>Selecciona alguna opción</option>
                                </select>
                            </div>
                        </div>
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
                    <div className="aclinfo-not-btn"><span className="aclinfo-not-lbl-btn">ENVIAR A PROCESO DE CONTRA CARGO</span></div>
                </div>
                <div className="aclinfo-cell ">
                    <div className="aclinfo-cell-spa cell-div"></div>
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
        </>
    );
}

export default Procesos;