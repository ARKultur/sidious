import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import {Button, Container, Grid, IconButton, Input, Typography, useTheme} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import * as React from "react";
import {useTranslation} from "react-i18next";
import { useState, useEffect } from "react";
import '../styles/view/Dashboard.css'
import axios from "axios";
import { API_URL } from "../config/API";
import UsersTable from "../component/UsersTable";
import OrganisationsTable from "../component/OrganisationsTable";

export default function Admin() {
  const [rowToEdit, setRowToEdit] = useState(null);
  const theme = useTheme();
  const { t } = useTranslation();
  const [IsSetup, setIsSetup] = useState(false);
  const [users, setUsers] = useState([]);
  const [organisations, setOrganisations] = useState([]);
  const [menu, setMenu] = useState([
      {isFocus: true, component: <UsersTable rows={users}/>, name: "Users"},
      {isFocus: false, component: <OrganisationsTable rows={organisations}/>, name: "Organisations"}
  ]);
  const [table, setTable] = useState(<UsersTable rows={users}/>);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg0ODQ0NDk2LCJleHAiOjE2ODQ4NDgwOTZ9.ikiu5FSFYehhZiba3EIqTVWA-F-zp1PcPLzwWyD9M6U"

  useEffect (() => {
    const init = async() => {
        let res = await axios.get(`${API_URL}/api/accounts/admin`,
            { headers: {
                Authorization: `Bearer ${token}`
            }
        });

        setUsers(res.data);
        res = await axios.get(`${API_URL}/api/organisations`,
            { headers: {
                Authorization: `Bearer ${token}`
            }
        });

        setOrganisations(res.data);
        setIsSetup(true);
    }
    if (!IsSetup)
        init();
  }, [users, organisations, IsSetup])

  const deleteRow = (targetId) => {
  };

  const editRow = (id) => {
    setRowToEdit(id);
  };

  const submitForm = (newRow) => {
    if (rowToEdit === null) {
    }
    users.map((marker, id) => {
      if (id === rowToEdit) {
      }
    })
  };
  const setMenuFocus = (name) => {
    const newMenu = menu;
    newMenu.map((item) => {
        if (item.name === name) {
            item.isFocus = true;
            setTable(item.component);
        } else {
            item.isFocus = false;
        }
        return item;
    })

    setMenu(newMenu);
  }

  return(
    <>
        <NavBar/>
        <Grid style={{paddingTop: "100px", paddingLeft: "50px"}}>
          <Typography
              variant={"h1"}
              color={theme.typography.color}
              style={{marginBottom: "1rem", fontSize: "3.75rem", letterSpacing: "-0.025em",
                  fontWeight: 800
              }}
          >{"Admin"}
          </Typography>
          <Container>
            <Container className="dashboard-header" style={{flexDirection: "row"}}>
                <Button title="Users" onClick={() => setMenuFocus("Users")}>Users</Button>
              <Button title="Organisations" onClick={() => setMenuFocus("Organisations")}>Organisations</Button>
            </Container>
            <Container style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Container>
                  <Input className="white-element"></Input>
                  <IconButton className="white-element">
                    <SearchIcon/>
                  </IconButton>
                </Container>
            </Container>
            <Container style={{padding: "20px"}}>
                {table}
            </Container>
          </Container>
        </Grid>
        <FooterComponent/>
    </>
  )
}
