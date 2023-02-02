import * as React from "react";
import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import {Typography, useTheme} from "@mui/material";
import Normandie from "../resources/images/Normandie.jpg"
import Fourviere from "../resources/images/colline-fourviere-lyon.jpg"
import Epitech from "../resources/images/Campus_Lyon.jpg"
import {useTranslation} from "react-i18next";

function Section(props)
{
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <div
      style={{marginBottom: "2rem"}}
    >
      <Typography
        variant={"h1"}
        color={theme.typography.color}
        style={{marginBottom: "1rem", fontSize: "3.75rem",
          letterSpacing: "-0.025em", fontWeight: 800
        }}
      >{t(props.title)}</Typography>
      <Typography
        color={theme.palette.greyText}
        style={{fontSize: "1.25rem", lineHeightStep: "1.75rem",
          fontWeight: 300, maxWidth: "75rem", marginBottom: "0.75rem"
        }}
      >{t(props.text)}</Typography>
      <img
        src={props.image}
        alt={props.alt}
      />
    </div>
  )
}

export default function Project()
{
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <div>
      <NavBar title={t("project.tab_title")}/>
      <div style={{
        paddingTop: "7rem", paddingLeft: "1rem",
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
          >{t("project.title")}</Typography>
          <Typography
            color={theme.palette.greyText}
            style={{fontSize: "1.25rem", lineHeightStep: "1.75rem", fontWeight: 300,
              maxWidth: "42rem"
          }}
          >{t("project.subtitle")}</Typography>
        </div>
        <Section
          title={"project.section_1.title"}
          text={"project.section_1.text"}
          image={Normandie}
          alt={"Normandie's photo"}
        />
        <Section
          title={"project.section_2.title"}
          text={"project.section_2.text"}
          image={Fourviere}
          alt={"Fourvière's photo"}
        />
        <Section
          title={"project.section_3.title"}
          text={"project.section_3.text"}
          image={Epitech}
          alt={"Epitech Lyon's photo"}
        />
      </div>
      <FooterComponent/>
    </div>
  )
}