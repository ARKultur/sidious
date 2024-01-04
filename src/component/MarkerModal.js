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

export const MarkerModal = ({ closeModal, onSubmit, defaultValue }) => {
  const initialState = {
    name: "",
    description: "",
    longitude: 0,
    latitude: 0,
    altitude: 0,
    status: "",
    order: 0,
    model: "",
    texture: "",
  };
  const [formData, setFormData] = useState(defaultValue || initialState);
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      formData.name &&
      formData.description &&
      formData.longitude &&
      formData.latitude
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
    if (e.target.name === "latitude" || e.target.name === "longitude" || e.target.name === "altitude" || e.target.name === "order") {
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
        <Container style={{display: 'flex', alignItems: "flex-end", justifyContent: 'flex-end'}}>
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
              name="name"
              defaultValue={formData.name}
              label="Name"
              style={{ width: "100%" }}
            />
          </div>
          <div className="modal-form-field">
            <TextField
              onChange={handleChange}
              name="description"
              defaultValue={formData.description}
              label="Description"
              multiline
              className="modal-form-field"
              style={{ width: "100%" }}
            />
          </div>
          <div className="modal-form-field">
            <TextField
              onChange={handleChange}
              name="longitude"
              defaultValue={formData.longitude}
              label="Longitude"
              className="modal-form-field"
              style={{ width: "100%" }}
            />
          </div>
          <div className="modal-form-field">
            <TextField
              onChange={handleChange}
              name="latitude"
              defaultValue={formData.latitude}
              label="Latitude"
              style={{ width: "100%" }}
            />
          </div>
          <div className="modal-form-field">
            <TextField
              onChange={handleChange}
              name="altitude"
              defaultValue={formData.altitude}
              label="Altitude"
              style={{ width: "100%" }}
            />
          </div>
          <div className="modal-form-field">
            <TextField
              onChange={handleChange}
              name="status"
              defaultValue={formData.status}
              label="Status"
              className="modal-form-field"
              style={{ width: "100%" }}
            />
          </div>
          <div className="modal-form-field">
            <TextField
              onChange={handleChange}
              name="order"
              defaultValue={formData.order}
              label="Order"
              className="modal-form-field"
              style={{ width: "100%" }}
            />
          </div>
          <div className="modal-form-field">
            <TextField
              onChange={handleChange}
              name="model"
              defaultValue={formData.model}
              label="Model"
              className="modal-form-field"
              style={{ width: "100%" }}
            />
          </div>
          <div className="modal-form-field">
            <TextField
              onChange={handleChange}
              name="texture"
              defaultValue={formData.texture}
              label="Texture"
              className="modal-form-field"
              style={{ width: "100%" }}
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
