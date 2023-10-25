import * as React from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import "../styles/component/MarkerModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const JourneyModal = ({ closeModal, onSubmit, defaultValue }) => {
  const initialState = {
    id: "",
    name: "",
  };
  const [formData, setFormData] = useState(defaultValue || initialState);
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      formData.id &&
      formData.name
    ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formData)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "id") {
      setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("fail");
      return;
    }

    onSubmit(formData);

    closeModal();
  };

  return (
    <Container className="modal-container">
      <Container className="modal-body">
        <Container className="modal-header">
          <Typography
            variant={"h1"}
            color={"black"}
            style={{
              marginBottom: "1rem",
              fontSize: "3.75rem",
              letterSpacing: "-0.025em",
              fontWeight: 800,
            }}
          >
            Create new Journey
          </Typography>
          <IconButton onClick={() => closeModal()}>
            <CloseIcon />
          </IconButton>
        </Container>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
           <div className="modal-form-field">
            <TextField
              onChange={handleChange}
              name="id"
              defaultValue={formData.id}
              label="Id"
              style={{ width: "100%"}}
            />
          </div>
          <div className="modal-form-field">
            <TextField
              onChange={handleChange}
              name="name"
              defaultValue={formData.name}
              label="Name"
              style={{ width: "100%"}}
            />
          </div>
          {errors && (
            <div className="modal-error">{`Please include: ${errors}`}</div>
          )}
          <Button className="modal-btn" onClick={handleSubmit}>
            Soumettre
          </Button>
        </form>
      </Container>
    </Container>
  );
};
