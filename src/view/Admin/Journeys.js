import NavBar from "../../component/NavBar";
import FooterComponent from "../../component/Footer";
import { Grid, Typography, useTheme } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import "../../styles/view/Dashboard.css"

import { JourneyTable } from "../../component/JourneyTable";
import { Button, Container, IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  requestJourneys,
  addJourney,
  editJourney,
  deleteJourney,
  requestOrganisationJourneys,
  requestOrganisationJourneysByAdmin
} from "../../redux-action/JourneyAction";
import LoadingSpinner from "../../animation/LoadingSpinner";
import { JourneyModal } from "../../component/JourneyModal"; 
import { AdminSideBar } from "../../component/admin/SideBar";

export default function AdminOrganisationJourneys() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const journeyStates = useSelector(
    (state) => state.rootReducer.journeyReducer
  );
  const token = localStorage.getItem("token");
  const params = useParams();
  const organisationId = localStorage.getItem("organisationId");
  const [journeys, setJourneys] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const theme = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    if (organisationId !== "null" && token) {
      dispatch(requestOrganisationJourneysByAdmin({ token: token, organisationId: params.id }));
      setJourneys(journeyStates.journeys);
    }
  }, []);

  useEffect(() => {
    if (journeyStates.journeys !== journeys) {
      setJourneys(journeyStates.journeys);
    }
  }, [journeyStates.journeys]);

  const deleteRow = (targetId) => {
    //const tmpJourneys = journeys.filter((journey) => journey.id !== targetId);
    //setJourneys(tmpJourneys);
    //console.log(journeyStates.journeys, targetId)
    dispatch(deleteJourney(journeyStates.journeys[targetId]));
  };

  

  const showRow = (id) => {
    navigate(`/admin/organisations/${params.id}/journeys/${id}/markers`);
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
          <JourneyTable
            rows={journeys}
            showRow={showRow}
            deleteRow={deleteRow}
          />
        </Grid>
      </Grid>
      <FooterComponent />
    </>
  );
}
