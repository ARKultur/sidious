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
import { MarkerTable } from "../component/MarkerTable";
import { MarkerModal } from "../component/MarkerModal";
import { useState, useEffect } from "react";
import "../styles/view/Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import {
  requestMarkers,
  addMarker,
  editMarker,
  deleteMarker,
  requestOrganisationMarkers,
} from "../redux-action/MarkerAction";
import { MarkerMap } from "../component/MarkerMap";
import { RedirectionModal } from "../component/RedirectionModal";
import LoadingSpinner from "../animation/LoadingSpinner";

export default function Dashboard() {
  const dispatch = useDispatch();
  const markerStates = useSelector((state) => state.rootReducer.markerReducer);
  const token = localStorage.getItem("token");
  const organisationId = localStorage.getItem("organisationId");
  const [markers, setMarkers] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const theme = useTheme();
  const { t } = useTranslation();
  const [isDashboardMap, setDashboardMap] = React.useState(true);
  const [isModalOpen, setModalOpen] = React.useState(false);

  useEffect(() => {
    if (organisationId !== "null" && token) {
      dispatch(requestOrganisationMarkers(token));
      setMarkers(markerStates.markers);
    }
  }, []);

  useEffect(() => {
    if (markerStates.markers !== markers) {
      setMarkers(markerStates.markers);
    }
  }, [markerStates.markers]);

  const deleteRow = (targetId) => {
    dispatch(deleteMarker(markerStates.markers[targetId]));
  };

  const editRow = (id) => {
    setRowToEdit(id);

    setModalOpen(true);
  };

  const submitForm = (newRow) => {
    if (rowToEdit === null) {
      dispatch(addMarker(newRow));
    }
    markerStates.markers.map((id) => {
      if (id === rowToEdit) {
        dispatch(editMarker(newRow));
      }
    });
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
          {t("dashboard.title")}
        </Typography>
        <Container>
          <Container
            className="dashboard-header"
            style={{ flexDirection: "row" }}
          >
            <Button title="Map" onClick={() => setDashboardMap(true)}>
              Ma map
            </Button>
            <Button title="Table" onClick={() => setDashboardMap(false)}>
              Mes lieux
            </Button>
          </Container>
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
            {!isDashboardMap && (
              <IconButton
                className="white-element"
                onClick={() => setModalOpen(true)}
              >
                <AddIcon />
              </IconButton>
            )}
          </Container>

          <Container style={{ padding: "20px" }}>
            {organisationId !== "null" &&
              (isDashboardMap ? (
                markerStates.isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <MarkerMap markers={markers} />
                )
              ) : ( markerStates.isLoading ? (
                <LoadingSpinner />
              ) : (
                <MarkerTable
                  rows={markers}
                  editRow={editRow}
                  deleteRow={deleteRow}
                />
              )))}
          </Container>
        </Container>
      </Grid>
      <FooterComponent />
      {isModalOpen && (
        <MarkerModal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={submitForm}
          defaultValue={rowToEdit !== null && markerStates.markers[rowToEdit]}
        />
      )}
      {organisationId === "null" && (
        <RedirectionModal
          text={
            "Vous n'avez pas acces à cette espace, veuillez contacter le support afin d'integrer une organisation."
          }
          destination={"/"}
        ></RedirectionModal>
      )}
    </>
  );
}
