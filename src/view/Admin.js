import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import {Button, Container, Grid, Typography, useTheme} from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import '../styles/view/Dashboard.css'
import axios from "axios";
import { API_URL } from "../config/API";
import UsersTable from "../component/UsersTable";
import OrganisationsTable from "../component/OrganisationsTable";

export default function Admin() {
  const theme = useTheme();
  const [IsSetup, setIsSetup] = useState(false);
  const [users, setUsers] = useState([]);
  const [organisations, setOrganisations] = useState([]);
  const [menu, setMenu] = useState([
      {isFocus: true, component: "UsersTable", name: "Users"},
      {isFocus: false, component: "OrganisationsTable", name: "Organisations"}
  ]);
  const [table, setTable] = useState(<></>);
  const token = localStorage.getItem("token");

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
  }, [users, organisations, IsSetup, token])

  const deleteUser = async(id) => {
    try {
        const res = await axios.delete(`${API_URL}/api/accounts/admin`,
          {
            data: { id: id },
            headers: { Authorization: `Bearer ${token}`}
          },
        );
        const updatedOrg = organisations.filter((org) => org.id !== id);
        setOrganisations(updatedOrg);
        window.location.reload()
    } catch (e) {
        alert(e.response.data);
    }
  };
  const deleteOrg = async(id) => {
    try {
        const res = await axios.delete(`${API_URL}/api/organisations`,
          {
            data: { id: id },
            headers: { Authorization: `Bearer ${token}`}
          },
        );
        const updatedOrg = organisations.filter((org) => org.id !== id);
        setOrganisations(updatedOrg);
        window.location.reload()
    } catch (e) {
        alert(e.response.data);
    }
  }

  const editUser = async(id, orgId) => {
      console.log(id, orgId);
      try {
          const res = await axios.patch(`${API_URL}/api/accounts/admin`, {
              id: id,
              OrganisationId: orgId,
          }, { headers: { Authorization : `Bearer ${token}`}});
          const updatedUsers = users;
          updatedUsers.map((user) => {
              if (user.id === id)
                  user.OrganisationId = orgId;
              return user;
          });
          setUsers(updatedUsers);
          window.location.reload()
      } catch (e) {
          alert(e.response.data);
      }
  };

  const addOrganisation = async(name) => {
    try {
        const res = await axios.post(`${API_URL}/api/organisations`,
            { name: name },
            {headers: { Authorization: `Bearer ${token}` }}
        );
        const updatedOrg = organisations;
        updatedOrg.push(res.data);
        setOrganisations(updatedOrg);
        window.location.reload()
    } catch (e) {
        alert(e.response.data);
    }
  };

  const editOrganisation = async(id, addressId, name) => {
    try {
        const res = await axios.patch(`${API_URL}/api/organisations`,
            { id: id, address: addressId, new_name: name },
            { headers: { Authorization : `Bearer ${token}`}}
        );
        const updatedOrgs = organisations;
        updatedOrgs.map((org) => {
            if (org.id === id) {
                org.addressId = res.data.addressId;
                org.name = res.data.name;
            }
            return org;
        });
        setOrganisations(updatedOrgs);
        window.location.reload()
    } catch (e) {
        alert(e.response.data);
    }
  }

  const setMenuFocus = (name) => {
    const newMenu = menu;
    newMenu.map((item) => {
        if (item.name === name) {
            item.isFocus = true;
        } else {
            item.isFocus = false;
        }
        return item;
    })

    setMenu(newMenu);
    setTable(getComponent());
  }

  const getComponent = () => {
    const item = menu.filter((item) => item.isFocus === true)
    const name = item[0].component;

    if (name === "OrganisationsTable")
      return <OrganisationsTable rows={organisations}
                addOrg={addOrganisation}
                editOrg={editOrganisation}
                deleteOrg={deleteOrg}
            />;
    return <UsersTable rows={users} deleteUser={deleteUser} editUser={editUser}/>;
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
            <Container style={{padding: "20px"}}>
                {table}
            </Container>
          </Container>
        </Grid>
        <FooterComponent/>
    </>
  )
}
