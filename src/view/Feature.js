import * as React from "react";
import {Typography, useTheme} from "@mui/material";
import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import DefaultImage from "../resources/images/feature/icon-hollow-white-512.png"
import Map from "../resources/images/feature/MapBox.png"
import {HashLink} from "react-router-hash-link";
import {useTranslation} from "react-i18next";

function FeatureElement(props)
{
  const theme = useTheme();
  const { t } = useTranslation();

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
          {t(props.title)}
        </Typography>
        <Typography
          color={theme.palette.greyText}
          style={{fontSize: "1.25rem", lineHeightStep: "1.75rem", fontWeight: 300,
            maxWidth: "42rem"
        }}
        >
          {t(props.text)}
        </Typography>
      </div>
    </div>
  )
}

export default function Feature()
{
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <NavBar title={t("feature.tab_title")}/>
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
          >{t("feature.title")}</Typography>
          <Typography
            color={theme.palette.greyText}
            style={{fontSize: "1.25rem", lineHeightStep: "1.75rem", fontWeight: 300,
              maxWidth: "42rem"
          }}
          >{t("feature.subtitle")}</Typography>
          <div style={{display: "flex", flexDirection: "column", marginBottom: "2rem"}}>
            <HashLink
              to={"#mobileSection"}
              style={{fontSize: "1.25rem", lineHeightStep: "1.75rem", fontWeight: 300,
                maxWidth: "42rem", textDecoration: "none", color: `${theme.palette.greyText}`}}
            >- {t("feature.section_mobile")}</HashLink>
            <HashLink
              to={"#dashboardSection"}
              style={{fontSize: "1.25rem", lineHeightStep: "1.75rem", fontWeight: 300,
                maxWidth: "42rem", textDecoration: "none", color: `${theme.palette.greyText}`}}
            >- {t("feature.section_dashboard")}</HashLink>
          </div>
          <Typography
            variant={"h1"}
            color={theme.typography.color}
            style={{marginBottom: "1rem", fontSize: "3.75rem", letterSpacing: "-0.025em",
              fontWeight: 800
          }}
            id={"mobileSection"}
          >{t("feature.section_mobile")}</Typography>
          <FeatureElement
            image={""}
            alt={"Map decoration"}
            title={"feature.mobile.section_1.title"}
            text={"feature.mobile.section_1.text"}
            rounded={false}
            left={true}
          />
          <FeatureElement
            image={""}
            alt={"AR decoration"}
            title={"feature.mobile.section_2.title"}
            text={"feature.mobile.section_2.text"}
            rounded={false}
            left={false}
          />
          <Typography
            variant={"h1"}
            color={theme.typography.color}
            style={{marginBottom: "1rem", fontSize: "3.75rem", letterSpacing: "-0.025em",
              fontWeight: 800
          }}
            id="dashboardSection"
          >{t("feature.section_dashboard")}</Typography>
          <FeatureElement
            image={Map}
            alt={"Map decoration"}
            title={"feature.web.section_1.title"}
            text={"feature.web.section_1.text"}
            rounded={true}
            left={true}
          />
        </div>
      </div>
      <FooterComponent/>
    </>
  )
}