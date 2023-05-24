import React, { useEffect, useState } from "react";
import Modal from '../modal/Modal';
import { useTranslation } from "react-i18next";
// import * as API from "../../services/ConnectionService"
import "./GuideModal.css"

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PublicIcon from '@mui/icons-material/Public';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import CommentIcon from '@mui/icons-material/Comment';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Avatar, Box, Card, CardContent } from "@mui/material";
import Rating from '@mui/material/Rating';
import { WidthFull } from "@mui/icons-material";

import Slider from 'react-slick';

function AddressPanel() {
    return (
        <div className="info-container">
            <LocationOnOutlinedIcon className="icon"/>
            <a className="redirect" href="https://goo.gl/maps/ZdDashXwn6oAfJP47" target="_blank">8 Pl. de Fourvière, 69005 Lyon</a>
        </div>
    );
}

function KeyWordsPanel() {
    return (
        <div className="info-container h-panel">
            <Stack direction="row" spacing={1}>
                <Chip label="Monument" />
                <Chip label="Catholique" />
                <Chip label="Musée" />
                <Chip label="Religieux" />
            </Stack>
        </div>
    );
}

function RatingPanel(props) {

    const { value } = props;

    return (
        <div className="info-container">
            <p
                style={
                    {"margin-left": 0}
                }
            >
                {value}
            </p>
            <Rating value={value} readOnly/>
        </div>
    );
}

function HoursPanel() {
    const [expanded, setExpanded] = useState(false);

    const togglePanel = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div className="info-container h-panel-header" onClick={togglePanel}>
                <AccessTimeIcon className="icon"/>
                <p className="redirect">Heure d'ouverture</p>
                {expanded
                    ?
                        <ExpandLessIcon/>
                    :
                        <ExpandMoreIcon/>
                }
            </div>
            {expanded && (
                <Box className="h-info-panel">
                    <div className="h-panel-content">
                        <p>lundi</p>
                        <p>07:00–20:00</p>
                    </div>
                    <div className="h-panel-content">
                        <p>mardi</p>
                        <p>07:00–20:00</p>
                    </div>
                    <div className="h-panel-content">
                        <p>mercredi</p>
                        <p>07:00–20:00</p>
                    </div>
                    <div className="h-panel-content">
                        <p>jeudi</p>
                        <p>07:00–20:00</p>
                    </div>
                    <div className="h-panel-content">
                        <p>vendredi</p>
                        <p>07:00–20:00</p>
                    </div>
                    <div className="h-panel-content">
                        <p>samedi</p>
                        <p>07:00–20:00</p>
                    </div>
                    <div className="h-panel-content">
                        <p>dimanche</p>
                        <p>07:00–20:00</p>
                    </div>
                </Box>
            )}
        </>
    );
}

function DescriptionPanel() {
    return (
        <div className="info-container desc">
            <p
                style={
                    {"margin-left": 0}
                }
            >
                La basilique Notre-Dame de Fourvière est l’œuvre des architectes Bossan et Sainte-Marie Perrin. Elle est édifiée à partir d’une souscription publique en 1870 et consacrée en 1896.
Du haut de “la colline qui prie”, la basilique dédiée à la Vierge Marie est classée monument historique. Elle fait partie du site lyonnais inscrit au Patrimoine mondial de l’UNESCO. Aujourd’hui, emblème de la ville de Lyon, la basilique accueille chaque année plus de 2,5 millions de pèlerins et visiteurs.
            </p>
        </div>
    );
}

function WebSitePanel() {
    return (
        <div className="info-container">
            <PublicIcon className="icon"/>
            <a className="redirect" href="https://www.fourviere.org/" target="_blank">fourviere.org/</a>
        </div>
    );
}

function PricePanel() {
    return (
        <div className="info-container">
            <LocalActivityIcon className="icon"/>
            <p>Gratuit</p>
        </div>
    );
}

function FeedbackCard() {
    return (
        <div className="feedback-card">
            <div className="feedback-content">
                <Avatar className="avatar" alt="Patrick" src="https://images.pexels.com/photos/16110027/pexels-photo-16110027/free-photo-of-animal-chien-animal-de-compagnie-mignon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Avatar>
                <p>Patrick</p>
            </div>
            <div>
                <p>C'est cool</p>
            </div>
        </div>
    );
}

function FeedbackPanel() {
    return (
        <>
            <div className="info-container">
                <CommentIcon className="icon"/>
                <p>Avis</p>
            </div>
            <Stack className="feedback-stack">
                <FeedbackCard/>
                <FeedbackCard/>
            </Stack>
        </>
    );
}

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        adaptiveHeight: true,
        accessibility: true,
    };

    return (
        <>
            {isShow && (
                <Modal onClose={close} frame={false}>
                    <div className={`guide-panel ${isActive ? 'active' : ''}`}>
                        <div className="image">
                            <img
                                src="https://images.pexels.com/photos/8430276/pexels-photo-8430276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Image1"
                                className="h-full w-full object-cover"
                            />
                            {/* <img
                                src="https://images.pexels.com/photos/8430273/pexels-photo-8430273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Image2"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://images.pexels.com/photos/5868282/pexels-photo-5868282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Image3"
                                className="h-full w-full object-cover"
                            /> */}
                        </div>
                        {/* <div className="cadre" /> */}
                        <Box className="information">
                            <p className="title">Basilique Notre-Dame de Fourvière</p>
                            <KeyWordsPanel/>
                            <RatingPanel value={4.3}/>
                            <AddressPanel/>
                            <HoursPanel/>
                            <WebSitePanel/>
                            <PricePanel/>
                            <DescriptionPanel/>
                            <FeedbackPanel/>
                        </Box>
                    </div>
                </Modal>
            )}
        </>
    );
}
