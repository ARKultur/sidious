import * as React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  useTheme
} from "@mui/material";
import LogoIcon from "./LogoIcon";
import {NavLink} from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import {useTranslation} from "react-i18next";
import LangSelection from "./LangSelection";

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
        name="menu_home"
        link="/"
      />
      <MenuBarElement
        name="menu_project"
        link="/project"
      />
      <MenuBarElement
        name="menu_feature"
        link="/feature"
      />
      <MenuBarElement
        name="menu_team"
        link="/team"
      />
      <MenuBarElement
        name="menu_pricing"
      />
      <MenuBarElement
        name="menu_contact"
      />
    </ul>
  )
}

export default function NavBar(props)
{
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  document.title = props.title ? props.title : "ARKultur";
  return (
    <div style={{
      paddingLeft: "1rem", paddingRight: "1rem",
      zIndex: 100000
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
            <div>
              <Button
                  color="button"
                  variant="contained"
                  sw={{textTransform: 'none'}}
              >{t('login')}</Button>
              <IconButton aria-label={id}
                          aria-describedby={"settings"}
                          style={{color: `${theme.palette.primary.contrastText}`}}
                          onClick={handleClick}
              >
                <SettingsIcon/>
              </IconButton>
              <LangSelection
                id={id}
                open={open}
                anchor={anchorEl}
                handleChange={handleChange}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
