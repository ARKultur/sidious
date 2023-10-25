import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import "../styles/view/Dashboard.css";
import { useNavigate } from "react-router-dom";
import { RedirectionModal } from "../component/RedirectionModal";

export default function Dashboard() {
  const organisationId = localStorage.getItem("organisationId");
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-around",
            margin: "2.75rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button onClick={() => navigate('/dashboard/map')}>
              <img
                style={{ borderRadius: 15, width: "500px", height: "400px" }}
                src={require("../animation/map-sidious.gif")}
                alt="my-gif"
              />
            </Button>
            <Typography
              variant={"h1"}
              color={theme.typography.color}
              style={{
                marginBottom: "1rem",
                fontSize: "2.75rem",
                letterSpacing: "-0.025em",
                fontWeight: 800,
              }}
            >
              {"Map"}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button onClick={() => navigate('/dashboard/journeys')}>
              <img
                style={{ borderRadius: 15, width: "500px", height: "400px" }}
                src={require("../animation/gestion-sidious.gif")}
                alt="my-gif"
              />
            </Button>
            <Typography
              variant={"h1"}
              color={theme.typography.color}
              style={{
                marginBottom: "1rem",
                fontSize: "2.75rem",
                letterSpacing: "-0.025em",
                fontWeight: 800,
              }}
            >
              {"Tableurs"}
            </Typography>
          </div>
        </div>
      </Grid>
      <FooterComponent />
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
