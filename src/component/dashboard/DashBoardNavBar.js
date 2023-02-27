import * as React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
  useTheme
} from "@mui/material";
import LogoIcon from "../LogoIcon";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

function MenuBarElement(props)
{
  const linkTo = props.link ? props.link : '/maintenance';
  const theme = useTheme();

  const activeStyle = {
    color: theme.palette.button.main,
    textDecoration: "none"
  }

  const defaultStyle = {
    color: theme.palette.greyText,
    textDecoration: "none"
  }
  const { t } = useTranslation();

  return (
    <li style={{ marginRight: "1.5em" }}>
      <NavLink to={linkTo}
               style={({ isActive }) =>
                 isActive && linkTo !== '/maintenance' ? activeStyle : defaultStyle
               }
      >
        {t(props.name)}
      </NavLink>
    </li>
  )
}

function MenuBar()
{
  return(
    <ul style={{ display: "flex", width: "auto",
      justifyContent: "space-between", alignItems: "center",
      listStyleType: "none", margin: "0", padding: "0"
    }}>
      <MenuBarElement
        name="Dashboard"
        link="/dashboard"
      />
    </ul>
  )
}

export default function DashBoardNavBar(props)
{
  const { t } = useTranslation();

  document.title = props.title ? props.title : "ARKultur";
  return (
    <div style={{
      paddingLeft: "1rem", paddingRight: "1rem",
      zIndex: 100000
    }}>
      <AppBar color="mainColor" sx={{ position: "fixed", width: "100%", px: "0.625rem" }} elevation={0} >
        <Toolbar sx={{
          alignItems: 'center'
        }}
        >
          <div style={{
            flexGrow: 1,
            display: "flex", flexWrap: "wrap", alignItems: "center",
            maxWidth: "1280px", justifyContent: "space-between",
            marginRight: "auto", marginLeft: "auto",
          }}>
            <LogoIcon/>
            <MenuBar/>
            <div>
              <Button
                color="button"
                variant="contained"
                sw={{textTransform: 'none'}}
              >{t('profile')}</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
