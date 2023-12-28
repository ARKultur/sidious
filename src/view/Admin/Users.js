import NavBar from "../../component/NavBar";
import FooterComponent from "../../component/Footer";
import { Grid, Typography, useTheme } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import "../../styles/view/Dashboard.css";
import axios from "axios";
import { API_URL } from "../../config/API";
import UsersTable from "../../component/UserTable";
import { AuthContext } from "../../services/AuthProvider";
import { AdminSideBar } from "../../component/admin/SideBar";

export default function AdminOrganisationUsers() {
  const theme = useTheme();
  const [IsSetup, setIsSetup] = useState(false);
  const [users, setUsers] = useState([]);
  const [organisations, setOrganisations] = useState([]);

  const token = localStorage.getItem("token");
  const { logout } = React.useContext(AuthContext);

  useEffect(() => {
    const init = async () => {
      try {
        let userRes = await axios.get(`${API_URL}/api/accounts/admin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(userRes.data);
      } catch (e) {
        logout();
        window.location.replace("/");
      }

      let orgRes = await axios.get(`${API_URL}/api/organisations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrganisations(orgRes.data);

      setIsSetup(true);
    };
    if (!IsSetup) init();
  }, [users, organisations, IsSetup, token]);

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/api/accounts/admin`, {
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

  const editUser = async (id, orgId) => {
    try {
      const res = await axios.patch(
        `${API_URL}/api/accounts/admin`,
        {
          id: id,
          OrganisationId: orgId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const updatedUsers = users;
      updatedUsers.map((user) => {
        if (user.id === id) user.OrganisationId = orgId;
        return user;
      });
      setUsers(updatedUsers);
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
          {"Organisation"}
        </Typography>

        <Grid style={{ display: "flex", flexDirection: "row", padding: 10 }}>
          <AdminSideBar option={"organisation"} />
          <UsersTable
            rows={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </Grid>
      </Grid>
      <FooterComponent />
    </>
  );
}
