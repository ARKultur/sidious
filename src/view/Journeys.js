import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import {
  Button,
  Container,
  Grid,
  IconButton,
  Input,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { JourneyTable } from "../component/JourneyTable";
import { useNavigate } from "react-router-dom";
import { MarkerModal } from "../component/MarkerModal";
import { useState, useEffect } from "react";
import "../styles/view/Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import {
  requestJourneys,
  addJourney,
  editJourney,
  deleteJourney,
  requestOrganisationJourneys,
} from "../redux-action/JourneyAction";
import LoadingSpinner from "../animation/LoadingSpinner";
import { JourneyModal } from "../component/JourneyModal";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const journeyStates = useSelector((state) => state.rootReducer.journeyReducer);
  const token = localStorage.getItem("token");
  const organisationId = localStorage.getItem("organisationId");
  const [journeys, setJourneys] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const theme = useTheme();
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = React.useState(false);

  useEffect(() => {
    if (organisationId !== "null" && token) {
      dispatch(requestOrganisationJourneys({token, organisationId}));
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

  const editRow = (id) => {
    setRowToEdit(id);

    setModalOpen(true);
  };

  const showRow = (id) => {
    navigate(`/dashboard/journeys/${id}`)
  };

  const submitForm = (newRow) => {
    if (rowToEdit === null) {
      dispatch(addJourney({journey: newRow, organisationId: organisationId}));
      //journeys.push(newRow); 
    }
    journeyStates.journeys.map((marker, id) => {
      if (id === rowToEdit) {
        dispatch(editJourney(newRow));
        /*journeys.map((item, index) => {
          if (item.id === newRow.id) {
            journeys[index] = newRow
          }
        })*/
      }});
    //});
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
          {t("journey.title")}
        </Typography>
        <Container>
          <Container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Container>
              <Input className="white-element"></Input>
              <IconButton className="white-element">
                <SearchIcon />
              </IconButton>
            </Container>
            <IconButton
              className="white-element"
              onClick={() => setModalOpen(true)}
            >
              <AddIcon />
            </IconButton>
          </Container>
          <Container style={{ padding: "20px" }}>
            <JourneyTable
              rows={journeys}
              showRow={showRow}
              editRow={editRow}
              deleteRow={deleteRow}
            />
          </Container>
        </Container>
      </Grid>
      <FooterComponent />
      {isModalOpen && (
        <JourneyModal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={submitForm}
          defaultValue={rowToEdit !== null && journeys[rowToEdit]}
        />
      )}
    </>
  );
}
