import * as React from "react";
import { Button, Container, TextField, Typography, IconButton, Input} from "@mui/material";
import "../styles/component/MarkerModal.css"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export const AdminMarkerModal = ({closeModal, onSubmit, defaultValue}) => {
    const initialState = {
      name: "",
      description: "",
      longitude: 0,
      latitude: 0,
    }
    const [formData, setFormData] = useState( defaultValue || initialState)
    const [errors, setErrors] = useState("");

    const validateForm = () => {
      if (formData.name 
        && formData.description 
        && formData.longitude 
        && formData.latitude) {
            
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
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      
      e.preventDefault();

      if (!validateForm()) {
        console.log("fail")
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
                    style={{marginBottom: "1rem", fontSize: "3.75rem", letterSpacing: "-0.025em",
                        fontWeight: 800}}
                    >
                    Test
                    </Typography>
                    <IconButton onClick={() => closeModal()}>
                        <CloseIcon/>
                    </IconButton>
                </Container>
                <form style={{display: 'flex',  flexDirection: 'column'}}>
                    <TextField onChange={handleChange} name="name" defaultValue={formData.name} label="Name"/>
                    <br/>
                    <TextField  onChange={handleChange}  name="description" defaultValue={formData.description} label="Description" multiline/>
                    <br/>
                    <TextField onChange={handleChange}  name="longitude" defaultValue={formData.longitude} label="Longitude"/>
                    <br/>
                    <TextField onChange={handleChange}  name="latitude" defaultValue={formData.latitude} label="Latitude"/>
                    <br/>
                    <TextField onChange={handleChange}  name="hauteur" defaultValue={formData.latitude} label="Hauteur"/>
                    <br/>
                    <TextField onChange={handleChange}  name="status" defaultValue={formData.latitude} label="Status"/>
                    <br/>
                      Model 3D
                      <Input type="file"/>
                    <br/>
                      Texture
                      <Input type="file"/>
                    {errors && <div className="modal-error">{`Please include: ${errors}`}</div>}
                    <Button className="modal-btn" onClick={handleSubmit}>Soumettre</Button>
                </form>
            </Container>   
        </Container>
    ) 
}


