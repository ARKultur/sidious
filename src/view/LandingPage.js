import * as React from "react";
import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import {Button, Grid, Typography, useTheme} from "@mui/material";
import StyledLogo from '../resources/images/stylish-logo.svg';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function LandingPageView()
{
  const theme = useTheme();
  return(
    <>
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
              Improving your cultural visits, using AR and AI
            </Typography>
            <Typography
              color={theme.palette.greyText}
              style={{maxWidth: "42rem", fontWeight: 300,
                fontSize: "1.25rem", lineHeight: "1.5rem",
                marginBottom: "2rem"
            }}>
              Our team of talented developers aims to bring the future into the past, using Artificial Intelligence and Augmented Reality. Read About us here!
            </Typography>
            <Button variant="outlined"
                    startIcon={<GitHubIcon/>}
                    color={"button"}
                    onClick={() => {
                      window.open("https://github.com/arkultur", '_blank', 'noreferrer')
                    }}
            >
              Visit us on GitHub
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
