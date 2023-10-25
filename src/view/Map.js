import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import { Container, Grid, Typography, useTheme } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "../styles/view/Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { requestMarkers } from "../redux-action/MarkerAction";
import { MarkerMap } from "../component/MarkerMap";

export default function Dashboard() {

  const dispatch = useDispatch();
  const states = useSelector((state) => state.rootReducer.markerReducer);
  const theme = useTheme();
  const { t } = useTranslation();

  const [markersIsSetup, setMarkerIsSetup] = useState(false);

  useEffect(() => {
    if (states && states.markers.length === 0 && !markersIsSetup) {
      dispatch(requestMarkers());
      setMarkerIsSetup(true);
    }
  }, [states, markersIsSetup]);

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
          {t("map.title")}
        </Typography>
        <Container>
          <Container style={{ padding: "20px" }}>
            {states.markers && <MarkerMap markers={states.markers} />}
          </Container>
        </Container>
      </Grid>
      <FooterComponent />
    </>
  );
}
