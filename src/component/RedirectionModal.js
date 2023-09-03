import * as React from "react";
import {
  Button,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import "../styles/component/RedirectionModal.css";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";

export const RedirectionModal = ({ text, destination }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const redirectTo = () => {
    navigate(destination);
  };

  return (
    <Container className="redirection-modal-container">
      <Container className="text-button-container">
        <LockIcon className="lock-element"/>
        <Typography
          variant={"h4"}
          color={theme.typography.color}
          style={{
            marginBottom: "1rem",
            fontSize: "2.75rem",
            letterSpacing: "-0.025em",
            fontWeight: 300,
          }}
        >
          {text}
        </Typography>
        <Button
          color="button"
          title="Redirect"
          onClick={() => {
            redirectTo();
          }}
        >
          Go Back
        </Button>
      </Container>
    </Container>
  );
};
