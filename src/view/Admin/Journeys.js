import NavBar from "../../component/NavBar";
import FooterComponent from "../../component/Footer";
import {  Grid, Typography, useTheme } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import "../../styles/view/Dashboard.css";
import { JourneyTable } from "../../component/JourneyTable";
import { AdminSideBar } from "../../component/admin/SideBar";

export default function AdminOrganisationJourneys() {
  const theme = useTheme();
  const journeyStates = [
    { id: "0", name: "Art-Track" },
    { id: "1", name: "Quick-Track" },
    { id: "2", name: "London-Downtown" },
  ]; //useSelector((state) => state.rootReducer.markerReducer);
  const [journeys, setJourneys] = useState([]);
  const [IsSetup, setIsSetup] = useState(false);
 
  const token = localStorage.getItem("token");

  useEffect(() => {
    const init = async () => {
      setJourneys(journeyStates);
      setIsSetup(true);
    };
    if (!IsSetup) init();
  }, [IsSetup, token]);

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

        <Grid style={{display: 'flex', flexDirection: 'row', padding: 10}}>
          <AdminSideBar option={'organisation'}/>
          <JourneyTable rows={journeys} /> 
        </Grid>
      </Grid>
      <FooterComponent />
    </>
  );
}
