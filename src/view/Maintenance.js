import * as React from "react";
import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import {Button, Grid, Typography, useTheme} from "@mui/material";
import StyledLogo from "../resources/images/stylish-logo.svg";
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import "./buttonBorderAnimation.css"

export default function Maintenance()
{
  const theme = useTheme();
  const { t } = useTranslation();

    return (
      <div>
        <NavBar/>
        <div style={{backgroundColor: `${theme.palette.mainColor.main}`}}>
          <Grid container
                style={{paddingTop: "7rem", paddingLeft: "1rem",
                  paddingRight: "1rem", maxWidth: "1280px",
                  marginLeft: "auto", marginRight: "auto"
          }}>
            <Grid item xs={7} style={{placeSelf: "center"}}>
              <Typography
                variant={"h1"}
                color={theme.typography.color}
                style={{fontSize: "3.75rem", fontWeight: 800, marginBottom: "1rem",
                  display: "flex", alignContent: "flex-start", lineHeight: 1,
                  maxWidth: "42rem"
              }}
              >
                {t("maintenance_title")}
              </Typography>
              <Typography
                color={theme.palette.greyText}
                style={{maxWidth: "42rem", fontWeight: 300,
                  fontSize: "1.25rem", lineHeight: "1.5rem",
                  marginBottom: "2rem"
              }}>
                {t("maintenance")}
              </Typography>
              <Link to={'/'}>
                <Button variant="outlined"
                        startIcon={<HomeIcon/>}
                        className="buttonAnimation"
                        color={"button"}
                >
                  {t("back_to_menu")}
                </Button>
              </Link>
            </Grid>
            <Grid item xs={5}>
              <img
                src={StyledLogo}
                alt="ARKultur stylized logo"
              />
            </Grid>
          </Grid>
        </div>
        <FooterComponent/>
      </div>
    )
}