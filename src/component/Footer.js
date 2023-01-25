import * as React from "react";
import {Grid, Typography, useTheme} from "@mui/material";
import LogoIcon from "./LogoIcon";

function FooterMenuElement(props)
{
  const theme = useTheme();
  const list = props.subMenu.map((item) =>
    <li key={item.name.toString() } style={{marginBottom: "1rem", display: "flex"}}>
      <a href={item.route} target={item.newPage ? '_blank' : ''} rel={"noopener"}
         style={{color: `${theme.palette.primary.main}`,
           textDecoration: "inherit"
      }}>
        {item.name}
      </a>
    </li>
  )
  return (
      <Grid item xs container direction="column" style={{alignContent: "flex-start"}}>
      <Typography color={theme.palette.title.main} style={{marginBottom: "1.5rem", display: "flex",
        fontWeight: 600, textTransform: "uppercase"}}>
        {props.name}
      </Typography>
      <ul style={{
        listStyleType: "none",
        margin: "0", padding: "0"
      }}>
        {list}
      </ul>
    </Grid>
  )
}

export default function FooterComponent()
{
  const companySubmenu = {
    name: 'Company',
    children: [
      {
        name: 'About',
        route: '/maintenance',
        newPage: false,
      },
      {
        name: 'Blog',
        route: '/maintenance',
        newPage: false,
      }
    ]
  };
  const helpSubmenu = {
    name: 'Support',
    children: [
      {
        name: 'Discord Server',
        route: '/maintenance',
        newPage: false,
      },
      {
        name: 'Github Organisation',
        route: 'https://github.com/ARKultur',
        newPage: true,
      },
      {
        name: 'Contact us',
        route: '/maintenance',
        newPage: false,
      }
    ]
  };
  const legalSubmenu = {
    name: 'Legal',
    children: [
      {
        name: 'Privacy Policy',
        route: '/maintenance',
        newPage: false,
      },
      {
        name: 'Licensing',
        route: '/maintenance',
        newPage: false,
      },
      {
        name: 'Terms',
        route: '/maintenance',
        newPage: false,
      }
    ]
  };
  const projectsSubmenu = {
    name: 'Projects',
    children: [
      {
        name: 'Naboo',
        route: 'https://github.com/ARKultur/naboo',
        newPage: true,
      },
      {
        name: 'Theed',
        route: 'https://github.com/ARKultur/theed',
        newPage: true,
      },
      {
        name: 'Sentinel',
        route: 'https://github.com/ARKultur/sentinel',
        newPage: true,
      },
      {
        name: 'Arkham',
        route: 'https://github.com/ARKultur/arkham',
        newPage: true,
      }
    ]
  };
  const downloadsSubmenu = {
    name: 'Download',
    children: [
      {
        name: 'Android',
        route: '/maintenance',
        newPage: false,
      },
      {
        name: 'iOS',
        route: '/maintenance',
        newPage: false,
      }
    ]
  }
  const subMenu = [companySubmenu, helpSubmenu, legalSubmenu, projectsSubmenu, downloadsSubmenu];
  const ye = subMenu.map((menu) =>
    <FooterMenuElement
      name={menu.name}
      subMenu={menu.children}
    />
  );
  const theme = useTheme();

  return (
    <footer  style={{ backgroundColor: `${theme.palette.footer}`}}>
      <div style={{ padding: "2.5rem", maxWidth: "1280px",
      marginLeft: "auto", marginRight: "auto",
        paddingBottom: "4rem", paddingTop: "4rem"
      }}>
        <Grid container spacing={12}>
          {ye}
        </Grid>
        <hr style={{ marginBottom: "2rem", marginTop: "2rem",
        marginLeft: "auto", marginRight: "auto",
        borderColor: "#8194b0", height: 0, borderWidth: 0, borderTopWidth: "1px",
        color: "inherit"}}/>
        <div style={{textAlign: "center", display: "flex", alignItems: "center", flexDirection: "column"}}>
          <LogoIcon/>
          <span style={{color: `${theme.palette.primary.main}`}}>2022 - Built with React and MaterialUI</span>
        </div>
      </div>
    </footer>
  )
}
