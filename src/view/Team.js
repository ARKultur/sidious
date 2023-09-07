import * as React from "react";
import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import {Typography, useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";

function Member(props)
{
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <div style={{ marginBottom: "1rem"}}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ borderRadius: "9999px", width: "10rem",
          height: "10rem", display: "inline-block"
      }}
      />
      <Typography
        style={{fontSize: "1.25rem",
          lineHeightStep: "1.75rem",
          fontWeigh: 300,
          maxWidth: "42rem"}}
        color={theme.typography.color}
      >{props.name}</Typography>
      <Typography
          color={theme.palette.greyText}
          style={{maxWidth: "42rem", fontWeight: 300,
            fontSize: "1.25rem", lineHeight: "1.5rem",
            marginBottom: "2rem"
          }}
      >{t(props.job)}</Typography>
    </div>
  )
}

export default function Team()
{
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <NavBar title={t("team.tab_title")}/>
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
          >{t("team.title")}</Typography>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))"}}>
        <Member
            image={"https://cdn.discordapp.com/avatars/222073398195388426/a77e8fe6e176df022b4aecbb123191c3.webp?size=256"}
            alt={"Maxime's P photo"}
            name={"Maxime P."}
            job={"team.team_leader"}
          />
          <Member
            image={"https://cdn.discordapp.com/avatars/210432251198963722/a_c1756fc093cb349e092d994ace0acad0.gif?size=256"}
            alt={"Guillaume's D photo"}
            name={"Guillaume D."}
            job={"team.back"}
          />
          <Member
            image={"https://cdn.discordapp.com/avatars/818305741856833577/a_50d60d74092f27c3664c03b9a0f25663.gif?size=128"}
            alt={"Mehdi's photo"}
            name={"Mehdi Z."}
            job={"team.front"}
          /><Member
            image={"https://cdn.discordapp.com/avatars/370219157180121095/c1b45509807d67f56b6f101c28cbd81a.webp?size=128"}
            alt={"Alan-steven's photo"}
            name={"Alan-Steeven L."}
            job={"team.mob"}
          /><Member
            image={"https://cdn.discordapp.com/avatars/251875694529740810/d51c544ee46e52d95aeb15dd23f84e7b.webp?size=256"}
            alt={"Maxime's S photo"}
            name={"Maxime S."}
            job={"team.front"}
          /><Member
            image={"https://cdn.discordapp.com/avatars/220124557166510080/21e9ea632a0c9f66bbdb0de510f07491.webp?size=256"}
            alt={"Theo's photo"}
            name={"Théo F."}
            job={"team.mob"}
          /><Member
            image={"https://cdn.discordapp.com/avatars/264091727147696130/21e610296392728e25824279e2cb6a08.webp?size=128"}
            alt={"Kamel's photo"}
            name={"Kamel B."}
            job={"team.web"}
          />
        </div>
      </div>
      <FooterComponent/>
    </>
  )
}
