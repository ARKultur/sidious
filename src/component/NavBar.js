import * as React from 'react';
import {AppBar, Button, Toolbar} from "@mui/material";
import LogoIcon from "./LogoIcon";

function MenuBarElement(props)
{
  return (
    <li style={{ marginRight: "1.5em" }}>
      <Button
        key={props.name}
        onClick= {() => { console.log("Button pressed")}}
        sx={{ display: 'block', color: `${<theme className="palette"></theme>.greyText}`, fontWeight: 600, fontSize: 16}}
      >
        {props.name}
      </Button>
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
      />
      <MenuBarElement
        name="Our Project"
      />
      <MenuBarElement
        name="Feature"
      />
      <MenuBarElement
        name="Our team"
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
      paddingLeft: "1rem", paddingRight: "1rem"
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
