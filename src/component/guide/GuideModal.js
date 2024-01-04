import React, { useEffect, useState } from "react";
import Modal from '../modal/Modal';
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
import { Avatar, Box } from "@mui/material";
import Rating from '@mui/material/Rating';
import { downloadGuideImage, getGuide, getGuideImages } from "../../services/GuideService";
import moment from "moment";
import { API_URL } from "../../config/API";

function AddressPanel(props) {

    const { address } = props;

    return (
        <div className="info-container">
            <LocationOnOutlinedIcon className="icon"/>
            <a
                className="redirect"
                href={`https://www.google.com/maps/search/?api=1&query=${address.replace(' ', '+')}`}
                target="_blank" rel="noreferrer">{address}
            </a>
        </div>
    );
}

function KeyWordsPanel(props) {

    const { keywords } = props;

    return (
        <div className="info-container h-panel">
            <Stack direction="row" spacing={1}>
                {keywords && keywords.map((keyword) =>
                    <Chip label={keyword} />
                )}
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

function HoursPanel(props) {

    const { hours } = props;

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
            {hours && expanded && (
                <Box className="h-info-panel">
                    <div className="h-panel-content">
                        <p>Lundi</p>
                        <p>{hours[0]}</p>
                    </div>
                    <div className="h-panel-content">
                        <p>Mardi</p>
                        <p>{hours[1]}</p>
                    </div>
                    <div className="h-panel-content">
                        <p>Mercredi</p>
                        <p>{hours[2]}</p>
                    </div>
                    <div className="h-panel-content">
                        <p>Jeudi</p>
                        <p>{hours[3]}</p>
                    </div>
                    <div className="h-panel-content">
                        <p>Vendredi</p>
                        <p>{hours[4]}</p>
                    </div>
                    <div className="h-panel-content">
                        <p>Samedi</p>
                        <p>{hours[5]}</p>
                    </div>
                    <div className="h-panel-content">
                        <p>Dimanche</p>
                        <p>{hours[6]}</p>
                    </div>
                </Box>
            )}
        </>
    );
}

function DescriptionPanel(props) {

    const { description } = props;

    return (
        <div className="info-container desc">
            <p
                style={
                    {"margin-left": 0}
                }
            >{description}</p>
        </div>
    );
}

function WebSitePanel(props) {

    const { website } = props;

    return (
        <div className="info-container">
            <PublicIcon className="icon"/>
            <a className="redirect" href={website} target="_blank">{new URL(website).hostname}/</a>
        </div>
    );
}

function PricePanel(props) {

    const { prices, pricesDescription } = props;

    const [expanded, setExpanded] = useState(false);

    const togglePanel = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div className="info-container h-panel-header" onClick={togglePanel}>
                <LocalActivityIcon className="icon"/>
                <p className="redirect">Prix</p>
                {expanded
                    ?
                        <ExpandLessIcon/>
                    :
                        <ExpandMoreIcon/>
                }
            </div>
            {prices && pricesDescription && expanded && (
                <Box className="h-info-panel">
                    {prices.map((price, index) => {
                        if (pricesDescription.at(index))
                            return (
                                <div className="h-panel-content">
                                    <p>{pricesDescription[index]}</p>
                                    <p>{price}</p>
                                </div>
                            )
                    })}
                </Box>
            )}
        </>
    );
}

function FeedbackCard(props) {

    const { feedback } = props;

    return (
        <div className="feedback-card">
            <div className="feedback-content">
                <Avatar className="avatar" alt="Patrick" src="https://images.pexels.com/photos/16110027/pexels-photo-16110027/free-photo-of-animal-chien-animal-de-compagnie-mignon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Avatar>
                <p>{feedback.user.username} - {moment(feedback.datetime).format("DD.MM.YYYY")} - {feedback.stars}/5</p>
            </div>
            <div>
                <p>{feedback.message}</p>
            </div>
        </div>
    );
}

function FeedbackPanel(props) {

    const { feedbacks } = props;

    return (
        <>
            <div className="info-container">
                <CommentIcon className="icon"/>
                <p>Avis</p>
            </div>
            <Stack className="feedback-stack">
                {feedbacks && feedbacks.map((feedback) =>
                    <FeedbackCard key={feedback.datetime} feedback={feedback}/>
                )}
            </Stack>
        </>
    );
}

export default function GuideModal(props)
{

    const { onClose, isActive, guide, address } = props;

    // Sorting
    const [sortByNote, setSortByNote] = React.useState(false);
    const [sortByDate, setSortByDate] = React.useState(false);
    const [guideData, setGuideData] = React.useState(undefined);
    const [guideImages, setGuideImages] = React.useState(undefined);

    const [isShow, setShow] = useState(isActive);

    function close() {
        onClose();
        if (isActive) {
            setTimeout(() => {
                setShow(false);
            }, 1200);
        }
    }

    function getRatingFromFeedback(feedbacks) {
        return Math.round(feedbacks.map((feedback) => feedback.stars))
    }

    async function getGuideData() {
        const data = await getGuide(guide.id);
        const imagesNames = await getGuideImages(guide.id);

        // console.log(`data : ${JSON.stringify(data, null, 2)}`);
        // console.log(`imagesNames : ${JSON.stringify(imagesNames, null, 2)}`);
        setGuideData(data);

        const images = await imagesNames.map(async (name) => await downloadGuideImage(guide.id, name));
        // console.log(`images : ${JSON.stringify(images, null, 2)}`)
        // console.log(`images : ${JSON.stringify(images[0], null, 2)}`)
        setGuideImages(images);
    }

    useEffect(() => {
        if (isActive)
            setShow(isActive);
    }, [isActive])

    useEffect(() => {
        console.log(`address : ${address}`)
        if (guide) {
            console.log(guide);
            getGuideData();
        }
        if (sortByDate) {
            guide.reviews.sort((a, b) => a.datetime < b.datetime)
        }
        if (sortByNote) {
            guide.reviews.sort((a, b) => a.stars < b.stars)
        }
    }, [guide, address, sortByDate, sortByNote])

    return (
        <>
            {isShow && guideData && (
                <Modal onClose={close} frame={false}>
                    <div className={`guide-panel ${isActive ? 'active' : ''}`}>
                        {/* {guideImages &&
                            <div className="image">
                                <img
                                    src={URL.createObjectURL(guideImages[0])}
                                    alt="Image1"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        } */}
                        <div className="image">
                            <img
                                src="https://images.pexels.com/photos/8430276/pexels-photo-8430276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Image1"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <Box className="information">
                            <p className="title">{guideData.title}</p>
                            <KeyWordsPanel keywords={guideData.keywords}/>
                            <RatingPanel value={getRatingFromFeedback(guideData.reviews)}/>
                            {address &&
                                <AddressPanel address={address}/>
                            }
                            <HoursPanel hours={guideData.openingHours}/>
                            <WebSitePanel website={guideData.website}/>
                            <PricePanel
                                prices={guideData.priceValue}
                                pricesDescription={guideData.priceDesc}
                            />
                            <DescriptionPanel description={guideData.description}/>
                            <FeedbackPanel feedbacks={guideData.reviews}/>
                        </Box>
                    </div>
                </Modal>
            )}
        </>
    );
}
