import NavBar from "../../component/NavBar";
import FooterComponent from "../../component/Footer";
import { Grid, Typography, useTheme } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import "../../styles/view/Dashboard.css";
import axios from "axios";
import { API_URL } from "../../config/API";
import NewsletterTable from "../../component/NewsletterTable";
import { AdminSideBar } from "../../component/admin/SideBar";

export default function AdminNewsletter() {
  const theme = useTheme();
  const [IsSetup, setIsSetup] = useState(false);
  const [organisations, setOrganisations] = useState([]);
  
  const token = localStorage.getItem("token");

  useEffect(() => {
    const init = async () => {
   

      let orgRes = await axios.get(`${API_URL}/api/organisations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrganisations(orgRes.data);
      setIsSetup(true);
    };
    if (!IsSetup) init();
  }, [ organisations,  IsSetup, token]);




  const deleteOrg = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/api/organisations`, {
        data: { id: id },
        headers: { Authorization: `Bearer ${token}` },
      });
      const updatedOrg = organisations.filter((org) => org.id !== id);
      setOrganisations(updatedOrg);
      window.location.reload();
    } catch (e) {
      alert(e.response.data);
    }
  };

  

  const addOrganisation = async (name) => {
    try {
      const res = await axios.post(
        `${API_URL}/api/organisations`,
        { name: name },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const updatedOrg = organisations;
      updatedOrg.push(res.data);
      setOrganisations(updatedOrg);
      window.location.reload();
    } catch (e) {
      alert(e.response.data);
    }
  };

  const editOrganisation = async (id, addressId, name) => {
    try {
      const res = await axios.patch(
        `${API_URL}/api/organisations`,
        { id: id, address: addressId, new_name: name },
        { headers: { Authorization: `Bearer ${token}` } }
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
      window.location.reload();
    } catch (e) {
      alert(e.response.data);
    }
  };

  

 

  return (
    <>
      <NavBar />
      <Grid style={{ paddingTop: "100px", paddingLeft: "50px" }}>
        <Typography
          variant={"h1"}
          color={theme.typography.color}
          style={{
            marginBottom: "1rem",
            fontSize: "3.75rem",
            letterSpacing: "-0.025em",
            fontWeight: 800,
          }}
        >
          {"Newsletter"}
        </Typography>

        <Grid style={{display: 'flex', flexDirection: 'row', padding: 10}}>
          <AdminSideBar option={'newsletter'}/>
          <NewsletterTable
            rows={organisations}
            addOrg={addOrganisation}
            editOrg={editOrganisation}
            deleteOrg={deleteOrg}
          />
        </Grid>
      </Grid>
      <FooterComponent />
    </>
  );
}
