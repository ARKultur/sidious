import NavBar from "../../component/NavBar";
import FooterComponent from "../../component/Footer";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import "../../styles/view/Dashboard.css";
import axios from "axios";
import { API_URL } from "../../config/API";
import UsersTable from "../../component/UserTable";
import { AuthContext } from "../../services/AuthProvider";
import { AdminSideBar } from "../../component/admin/SideBar";
import { useNavigate, useParams } from "react-router-dom";
import { JourneyTable } from "../../component/JourneyTable";

export default function AdminOrganisation() {
  const theme = useTheme();
  const navigate = useNavigate();
  const journeyStates = [
    { id: "0", name: "Art-Track" },
    { id: "1", name: "Quick-Track" },
    { id: "2", name: "London-Downtown" },
  ]; //useSelector((state) => state.rootReducer.markerReducer);
  const [journeys, setJourneys] = useState([]);
  const [IsSetup, setIsSetup] = useState(false);
  const [users, setUsers] = useState([]);
  const [organisations, setOrganisations] = useState([]);
  const token = localStorage.getItem("token");
  const params = useParams();
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

      setJourneys(journeyStates);
      setOrganisations(orgRes.data);
      setIsSetup(true);
    };
    if (!IsSetup) init();
  }, [users, organisations, IsSetup, token]);

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
          <Grid style={{ display: "flex", flex: 2, flexDirection: "column" }}>
            <Grid style={{ padding: 10 }}>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Typography
                  variant={"h5"}
                  color={theme.typography.color}
                  style={{
                    marginBottom: "1rem",
                    fontSize: "1.75rem",
                    letterSpacing: "-0.025em",
                    fontWeight: 800,
                  }}
                >
                  {"Journeys"}
                </Typography>
                <Button
                  title="Users"
                  onClick={() =>
                    navigate(`/admin/organisations/${params.id}/journeys`)
                  }
                >
                  {"Edit journeys"}
                </Button>
              </Grid>

              <JourneyTable rows={journeys} withoutAction={true} />
              {/*<JourneyTable
              />*/}
            </Grid>
            <Grid style={{ padding: 10 }}>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Typography
                  variant={"h5"}
                  color={theme.typography.color}
                  style={{
                    marginBottom: "1rem",
                    fontSize: "1.75rem",
                    letterSpacing: "-0.025em",
                    fontWeight: 800,
                  }}
                >
                  {"Users"}
                </Typography>
                <Button
                  title="Users"
                  onClick={() =>
                    navigate(`/admin/organisations/${params.id}/users`)
                  }
                >
                  {"Edit user"}
                </Button>
              </Grid>
              <UsersTable rows={users} withoutAction={true} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <FooterComponent />
    </>
  );
}
