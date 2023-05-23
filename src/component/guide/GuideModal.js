import React, { useEffect, useState } from "react";
import Modal from '../modal/Modal';
import { useTranslation } from "react-i18next";
// import * as API from "../../services/ConnectionService"
import "./GuideModal.css"

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function ConnectionModal(props)
{
    const { onClose, isActive } = props;

    const [isShow, setShow] = useState(isActive);

    function close() {
        onClose();
        if (isActive) {
            setTimeout(() => {
                setShow(false);
            }, 1200);
        }
    }

    useEffect(() => {
        if (isActive)
            setShow(isActive);
    }, [isActive])

    return (
        <>
            {isShow && (
                <Modal onClose={close} frame={false}>
                    <div className={`guide-panel ${isActive ? 'active' : ''}`}>
                        <div className="image">
                            <img src="https://images.pexels.com/photos/8430276/pexels-photo-8430276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image" />
                        </div>
                        {/* <div className="cadre" /> */}
                        <div className="information">
                            <p className="title">Titre</p>
                            <div className="info-container">
                                <LocationOnOutlinedIcon className="icon"/>
                                <p>Adresse</p>
                            </div>
                            <div className="info-container">
                                <AccessTimeIcon className="icon"/>
                                <p>Heures d’ouverture</p>
                            </div>
                            <div className="info-container">
                                <p>Mots clés</p>
                            </div>
                            <div className="info-container">
                                <p>Description</p>
                            </div>
                            <div className="info-container">
                                <p>Prix entré</p>
                            </div>
                            <div className="info-container">
                                <p>Avis</p>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}
