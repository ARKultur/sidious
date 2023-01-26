import * as React from 'react';
import {AppBar, Button, Toolbar, useTheme} from "@mui/material";
import LogoIcon from "./LogoIcon";
import {NavLink} from "react-router-dom";

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

  return (
    <li style={{ marginRight: "1.5em" }}>
      <NavLink to={linkTo}
               style={({ isActive }) =>
                   isActive && linkTo !== '/maintenance' ? activeStyle : defaultStyle
               }
      >
        {props.name}
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
        name="Home"
        link="/"
      />
      <MenuBarElement
        name="Our Project"
        link="/project"
      />
      <MenuBarElement
        name="Feature"
      />
      <MenuBarElement
        name="Our team"
        link="/team"
      />
      <MenuBarElement
        name="Pricing"
      />
      <MenuBarElement
        name="Contact Us"
      />
    </ul>
  )
}

export default function NavBar(props)
{
  document.title = props.title ? props.title : "ARKultur";
  return (
    <div style={{
      paddingLeft: "1rem", paddingRight: "1rem",
      zIndex: 100000, position: "fixed"
    }}>
      <AppBar position='static' color="mainColor" sx={{ position: "fixed", width: "100%", px: "0.625rem" }} elevation={0} >
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
            <Button
              color="button"
              variant="contained"
              sw={{textTransform: 'none'}}
            >Log in</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
