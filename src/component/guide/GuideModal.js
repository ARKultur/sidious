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
import { TextField, Button, Paper } from '@mui/material';


import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Avatar, Box } from "@mui/material";
import Rating from '@mui/material/Rating';
import { getGuide, getGuideImages } from "../../services/GuideService";
import moment from "moment";
import { API_URL } from "../../config/API";

import { makeStyles } from '@mui/styles';
import { createReview } from "../../services/ReviewService";


import Carousel from 'react-material-ui-carousel'

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
                    <Chip key={keyword} label={keyword} variant="outlined" />
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
                    {"marginLeft": 0}
                }
            >
                {value.toFixed(2)}
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
                    {"marginLeft": 0}
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

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        margin: 'auto',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

function FeedbackPanel(props) {

    const { feedbacks, token, guideId } = props;

    const classes = useStyles();
    const [formData, setFormData] = React.useState({
        stars: '',
        message: '',
    });

    const [sortByNote, setSortByNote] = React.useState(false);
    const [sortByDate, setSortByDate] = React.useState(false);
    const [filteredSort, setFilteredSort] = React.useState([])
    const [reviews, setReviews] = React.useState(feedbacks);

    useEffect(() => {
        setReviews(feedbacks)
        setFilteredSort(feedbacks)
    }, [feedbacks])

    useEffect(() => {
    }, [formData])

    const handleSortReviews = (type) => {
        if (type === "note") {
            let filteredTmp = [];
            if (sortByNote)
                filteredTmp = reviews.sort((a, b) => a.stars - b.stars);
            else
                filteredTmp = reviews.sort((a, b) => b.stars - a.stars);
            setFilteredSort(filteredTmp);
            setSortByNote(!sortByNote)
        }
        if (type === "date") {
            let filteredTmp = []
            if (sortByDate)
                filteredTmp =  reviews.sort((a, b) => new moment(a.datetime).format('YYYYMMDD') - new moment(b.datetime).format('YYYYMMDD'));
            else
                filteredTmp = reviews.sort((a, b) => new moment(b.datetime).format('YYYYMMDD') - new moment(a.datetime).format('YYYYMMDD'));
            setFilteredSort(filteredTmp);
            setSortByDate(!sortByDate)
        }
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        createReview(token, guideId, { stars: parseInt(formData.stars), message: formData.message });
        setFormData({
            stars: '',
            message: '',
        });
    };

    return (
        <>
            {token && token != null && token != "null" &&
                <>
                    <div className="info-container">
                        <CommentIcon className="icon"/>
                        <p>Votre avis</p>
                    </div>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <div style={{ width: "fit-content" }}>
                            <Rating
                                name="stars"
                                value={formData.stars}
                                onChange={handleChange}
                            />
                        </div>
                        <TextField
                            label="Describe your experience"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={classes.message}
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" color="primary" className={classes.button}>
                            Share
                        </Button>
                    </form>
                </>
            }
            <div className="info-container">
                <CommentIcon className="icon"/>
                <p>Avis</p>
            </div>
            <Button
                variant={sortByDate ? "contained" : "outlined"}
                onClick={() => handleSortReviews("date")}
            >
                Sort by date
            </Button>
            <Button
                variant={sortByNote ? "contained" : "outlined"}
                onClick={() => handleSortReviews("note")}
            >
                Sort by note
            </Button>
            <Stack className="feedback-stack">
                {filteredSort && filteredSort.length > 0 && filteredSort.map((feedback) =>
                    <FeedbackCard key={feedback.datetime} feedback={feedback}/>
                )}
            </Stack>
        </>
    );
}

export default function GuideModal(props)
{
    const { onClose, isActive, guide, address, token } = props;

    // Sorting
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
        const list = feedbacks.map((feedback) => {
            return feedback.stars
        });

        const result = list.reduce((sum, value) => sum + value, 0) / list.length;

        return result;
    }

    async function getGuideData() {
        const data = await getGuide(guide.id);
        const images = await getGuideImages(guide.id);

        setGuideData(data);
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
    }, [guide, address])

    function Item(props) {
        return (
            <Paper height={300}>
                <div
                    className="image"
                    // className="w-fit mx-auto relative"
                >
                    <img
                        src={props.item}
                        alt="Image1"
                        // height={300}
                        // style={{ width: "50vw" }}
                        className="truc"
                        // className="h-full w-full object-cover"
                    />
                </div>
            </Paper>
        )
    }


    return (
        <>
            {isShow && guideData && (
                <Modal onClose={close} frame={false}>
                    <div className={`guide-panel ${isActive ? 'active' : ''}`} style={{ paddingTop: guideImages ? 50 : 25 }}>
                        {guideImages &&
                            <div className="w-full">
                                <Carousel
                                    navButtonsAlwaysVisible={true}
                                    swipe={true}
                                    cycleNavigation={true}
                                    animation="fade"
                                    autoPlay={true}
                                    height={300}
                                    fullHeightHover={false}
                                >
                                    {
                                        [`${API_URL}/api/guides/1/images/${guideImages[0].id}`, `${API_URL}/api/guides/1/images/${guideImages[1].id}`].map((item, i) => <Item key={i} item={item} />)
                                    }
                                </Carousel>
                            </div>
                        }
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
                            <FeedbackPanel
                                feedbacks={guideData.reviews}
                                guideId={guide.id}
                                token={token}
                            />
                        </Box>
                    </div>
                </Modal>
            )}
        </>
    );
}
