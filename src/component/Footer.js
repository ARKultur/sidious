import * as React from "react";
import {Grid, Typography, useTheme} from "@mui/material";
import LogoIcon from "./LogoIcon";
import {useTranslation} from "react-i18next";

function FooterMenuElement(props)
{
  const theme = useTheme();
  const { t } = useTranslation();

  const list = props.subMenu.map((item) =>
    <li key={item.name.toString() } style={{marginBottom: "1rem", display: "flex"}}>
      <a href={item.route} target={item.newPage ? '_blank' : ''} rel={"noopener"}
         style={{color: `${theme.palette.primary.main}`,
           textDecoration: "inherit"
      }}>
        {t(item.name)}
      </a>
    </li>
  )
  return (
      <Grid item xs container direction="column" style={{alignContent: "flex-start"}}>
      <Typography color={theme.palette.title.main} style={{marginBottom: "1.5rem", display: "flex",
        fontWeight: 600, textTransform: "uppercase"}}>
        {t(props.name)}
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
    name: 'footer.submenu_1.name',
    children: [
      {
        name: 'footer.submenu_1.item_1',
        route: '/maintenance',
        newPage: false,
      },
      {
        name: 'footer.submenu_1.item_2',
        route: '/maintenance',
        newPage: false,
      }
    ]
  };
  const helpSubmenu = {
    name: 'footer.submenu_2.name',
    children: [
      {
        name: 'footer.submenu_2.item_1',
        route: '/maintenance',
        newPage: false,
      },
      {
        name: 'footer.submenu_2.item_2',
        route: 'https://github.com/ARKultur',
        newPage: true,
      },
      {
        name: 'footer.submenu_2.item_3',
        route: '/maintenance',
        newPage: false,
      }
    ]
  };
  const legalSubmenu = {
    name: 'footer.submenu_3.name',
    children: [
      {
        name: 'footer.submenu_3.item_1',
        route: '/maintenance',
        newPage: false,
      },
      {
        name: 'footer.submenu_3.item_2',
        route: '/maintenance',
        newPage: false,
      },
      {
        name: 'footer.submenu_3.item_3',
        route: '/maintenance',
        newPage: false,
      }
    ]
  };
  const projectsSubmenu = {
    name: 'footer.submenu_4.name',
    children: [
      {
        name: 'footer.submenu_4.item_1',
        route: 'https://github.com/ARKultur/naboo',
        newPage: true,
      },
      {
        name: 'footer.submenu_4.item_2',
        route: 'https://github.com/ARKultur/theed',
        newPage: true,
      },
      {
        name: 'footer.submenu_4.item_3',
        route: 'https://github.com/ARKultur/sentinel',
        newPage: true,
      },
      {
        name: 'footer.submenu_4.item_4',
        route: 'https://github.com/ARKultur/arkham',
        newPage: true,
      }
    ]
  };
  const downloadsSubmenu = {
    name: 'footer.submenu_5.name',
    children: [
      {
        name: 'footer.submenu_5.item_1',
        route: '/maintenance',
        newPage: false,
      },
      {
        name: 'footer.submenu_5.item_2',
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
  const { t } = useTranslation();

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
          <span style={{color: `${theme.palette.primary.main}`}}>{t("footer.subtitle")}</span>
        </div>
      </div>
    </footer>
  )
}
