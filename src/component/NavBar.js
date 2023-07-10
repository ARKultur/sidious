import * as React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useTheme
} from "@mui/material";
import LogoIcon from "./LogoIcon";
import {NavLink} from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import {useTranslation} from "react-i18next";
import LangSelection from "./LangSelection";
import ConnectionModal from './connection/ConnectionModal';
import "./menuButtonAnimation.css"
import { AuthContext } from '../services/AuthProvider';
import { useNavigate } from "react-router-dom";

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
    <li style={{ marginRight: "1.5em" }} className='menuButtonAnimation'>
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
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("email");

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
        name="Timeline"
        link="/timeline"
      />
      <MenuBarElement
        name="menu_contact"
        link="/contact"
      />
      { token && token !== "null" ?
        <MenuBarElement
            name= "menu_dashboard"
            link="/dashboard"
        /> : <></>
      }
      { token && username && username === "admin" ?
        <MenuBarElement
          name= "Admin"
          link="/admin"
        /> : <></>
      }
    </ul>
  )
}

export default function NavBar(props)
{
  const { logged, username, logout } = React.useContext(AuthContext);

  const theme = useTheme();
  const navigate = useNavigate();
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

  // Connection
  const [showConnectionModal, setShowConnectionModal] = React.useState(false);

  function handleShowConnectionModal() {
    setShowConnectionModal(true);
  };

  function handleCloseConnectionModal() {
    setShowConnectionModal(false);
  };

  React.useEffect(() => {
  }, [logged]);

  function logoutCall() {
    logout();
    navigate('/')
  };

  // Dropdown
  const [DanchorEl, setDAnchorEl] = React.useState(null);
  const Dopen = Boolean(DanchorEl);
  const DhandleClick = (event) => {
    if (!showConnectionModal) {
      setDAnchorEl(event.currentTarget);
    }
  };
  const DhandleClose = () => {
    setDAnchorEl(null);
  };
  const DprofileCall = () => {
    window.location.href = "/profile";
  }

  document.title = props.title ? props.title : "ARKultur";
  return (
    <>
      <div style={{
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
              <div>
                {username == null ?
                    <Button
                        color="button"
                        variant="contained"
                        sw={{textTransform: 'none'}}
                        onClick={handleShowConnectionModal}
                    >
                      {t('login')}
                    </Button>
                  :
                    <>
                      <Button
                        id="basic-button"
                        color="button"
                        variant="contained"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={DhandleClick}
                      >
                        {username}
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={DanchorEl}
                        open={Dopen}
                        onClose={DhandleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <MenuItem onClick={DprofileCall}>Profile</MenuItem>
                        <MenuItem onClick={logoutCall}>Logout</MenuItem>
                      </Menu>
                    </>
                }
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
      {showConnectionModal && (
        <ConnectionModal onClose={handleCloseConnectionModal}/>
      )}
    </>
  );
}
