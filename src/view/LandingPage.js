import * as React from "react";
import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import {Button, Grid, Typography, useTheme} from "@mui/material";
import StyledLogo from '../resources/images/stylish-logo.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import {useTranslation} from "react-i18next";

export default function LandingPageView()
{
  const theme = useTheme();
  const { t, _ } = useTranslation();

  return(
    <>
      <NavBar/>
      <div>
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
              {t("main_title")}
            </Typography>
            <Typography
              color={theme.palette.greyText}
              style={{maxWidth: "42rem", fontWeight: 300,
                fontSize: "1.25rem", lineHeight: "1.5rem",
                marginBottom: "2rem"
            }}>
              {t("main_subtitle")}
            </Typography>
            <Button variant="outlined"
                    startIcon={<GitHubIcon/>}
                    color={"button"}
                    onClick={() => {
                      window.open("https://github.com/arkultur", '_blank', 'noreferrer')
                    }}
            >
              {t("visit_github")}
            </Button>
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
    </>
  )
}
