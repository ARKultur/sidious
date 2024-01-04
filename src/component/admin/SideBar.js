import { Button, Container, Grid, Typography, useTheme } from "@mui/material";
import * as React from "react";
import "../../styles/view/Dashboard.css";
import { useNavigate } from "react-router-dom";

export const AdminSideBar = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "flex-start",
        justifySelf: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Button
        style={
          props.option === "organisation"
            ? {
                width: 300,
                height: 50,
                justifyContent: "flex-start",
                color: theme.palette.button.main,
              }
            : {
                width: 300,
                height: 50,
                justifyContent: "flex-start",
                color: theme.palette.greyText,
              }
        }
        title="Users"
        onClick={() => navigate("/admin/organisations")}
      >
        Organisations
      </Button>
      <Button
        style={
          props.option === "users"
            ? {
                width: 300,
                height: 50,
                justifyContent: "flex-start",
                color: theme.palette.button.main,
              }
            : {
                width: 300,
                height: 50,
                justifyContent: "flex-start",
                color: theme.palette.greyText,
              }
        }
        title="Users"
        onClick={() => navigate("/admin/users")}
      >
        Users
      </Button>
      <Button
        style={
          props.option === "contact"
            ? {
                width: 300,
                height: 50,
                justifyContent: "flex-start",
                color: theme.palette.button.main,
              }
            : {
                width: 300,
                height: 50,
                justifyContent: "flex-start",
                color:  theme.palette.button.grey,
              }
        }
        title="Contact"
        onClick={() => navigate("/admin/contact")}
      >
        Contact
      </Button>
      <Button
        style={
          props.option === "newsletter"
            ? {
                width: 300,
                height: 50,
                justifyContent: "flex-start",
                color: theme.palette.button.main,
              }
            : {
                width: 300,
                height: 50,
                justifyContent: "flex-start",
                color: theme.palette.greyText,
              }
        }
        title="Newsletter"
        onClick={() => navigate("/admin/newsletter")}
      >
        Newsletter
      </Button>
      <Button
        style={
          props.option === "suggestion"
            ? {
                width: 300,
                height: 50,
                justifyContent: "flex-start",
                color: theme.palette.button.main,
              }
            : {
                width: 300,
                height: 50,
                justifyContent: "flex-start",
                color: theme.palette.greyText,
              }
        }
        title="Suggestion"
        onClick={() => navigate("/admin/suggestion")}
      >
        Suggestions
      </Button>
    </Grid>
  );
};
