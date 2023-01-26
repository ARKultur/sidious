import * as React from "react";
import {Typography, useTheme} from "@mui/material";
import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import DefaultImage from "../resources/images/feature/icon-hollow-white-512.png"
import Map from "../resources/images/feature/MapBox.png"
import {HashLink} from "react-router-hash-link";

function FeatureElement(props)
{
    const theme = useTheme();
    return (
        <div style={{display: "flex", flexDirection: `${props.left ? "row" : "row-reverse"}`, marginBottom: "1rem"}}>
            <img
                src={props.image ? props.image : DefaultImage}
                alt={props.alt}
                style={{width: "13rem", height: "13rem", margin: "1rem",
                borderRadius: `${props.rounded ? "9999px": "0px"}`}}
            />
            <div>
                <Typography
                    variant={"h1"}
                    color={theme.typography.color}
                    style={{marginBottom: "1.5rem", fontSize: "1.875rem", letterSpacing: "-0.025em",
                        fontWeight: 800,
                }}
                >
                    {props.title}
                </Typography>
                <Typography
                    color={theme.palette.greyText}
                    style={{fontSize: "1.25rem", lineHeightStep: "1.75rem", fontWeight: 300,
                        maxWidth: "42rem"
                    }}
                >
                    {props.text}
                </Typography>
            </div>
        </div>
    )
}

export default function Feature()
{
    const theme = useTheme();
    return (
        <>
            <NavBar title={"ARKultur - Features"}/>
            <div style={{paddingTop: "7rem", paddingLeft: "1rem",
                paddingRight: "1rem", maxWidth: "1280px",
                marginLeft: "auto", marginRight: "auto"
            }}>
                <div style={{marginBottom: "2rem"}}>
                    <Typography
                        variant={"h1"}
                        color={theme.typography.color}
                        style={{marginBottom: "1rem", fontSize: "3.75rem", letterSpacing: "-0.025em",
                            fontWeight: 800
                        }}
                    >Features</Typography>
                    <Typography
                        color={theme.palette.greyText}
                        style={{fontSize: "1.25rem", lineHeightStep: "1.75rem", fontWeight: 300,
                            maxWidth: "42rem"
                        }}
                    >Our project offers two categories of feature depending on weather you are a tourist or a manager of cultural place. You have:</Typography>
                    <div style={{display: "flex", flexDirection: "column", marginBottom: "2rem"}}>
                        <HashLink
                            to={"#mobileSection"}
                            style={{fontSize: "1.25rem", lineHeightStep: "1.75rem", fontWeight: 300,
                                maxWidth: "42rem", textDecoration: "none", color: `${theme.palette.greyText}`}}
                        >- Mobile</HashLink>
                        <HashLink
                            to={"#dashboardSection"}
                            style={{fontSize: "1.25rem", lineHeightStep: "1.75rem", fontWeight: 300,
                                maxWidth: "42rem", textDecoration: "none", color: `${theme.palette.greyText}`}}
                        >- Dashboard</HashLink>
                    </div>
                    <Typography
                        variant={"h1"}
                        color={theme.typography.color}
                        style={{marginBottom: "1rem", fontSize: "3.75rem", letterSpacing: "-0.025em",
                            fontWeight: 800
                        }}
                        id={"mobileSection"}
                    >Mobile</Typography>
                    <FeatureElement
                        image={""}
                        alt={"Map decoration"}
                        title={"Interactive map"}
                        text={"Arkultur offers a interactive map that allow you to see all cultural places around you. With this map feel free to (re)discover your city!"}
                        rounded={false}
                        left={true}
                    />
                    <FeatureElement
                        image={""}
                        alt={"AR decoration"}
                        title={"Augmented Reality"}
                        text={"Augmented Reality is a very good technology to travel in the past. Look through your phone to see how the place was be in the past!"}
                        rounded={false}
                        left={false}
                    />
                    <FeatureElement
                        image={""}
                        alt={"Profile decoration"}
                        title={"Profile"}
                        text={"A complete management of your profile allow you to see only what you want to do."}
                        rounded={false}
                        left={true}
                    />
                    <Typography
                        variant={"h1"}
                        color={theme.typography.color}
                        style={{marginBottom: "1rem", fontSize: "3.75rem", letterSpacing: "-0.025em",
                            fontWeight: 800
                        }}
                        id="dashboardSection"
                    >Dashboard</Typography>
                    <FeatureElement
                        image={Map}
                        alt={"Map decoration"}
                        title={"Interactive Map"}
                        text={"Arkultur offers you an interactive map that facilitates the management of your cultural places."}
                        rounded={true}
                        left={true}
                    />
                </div>
            </div>
            <FooterComponent/>
        </>
    )
}