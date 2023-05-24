import { Avatar, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import "./Profile.css"
import { AuthContext } from "../services/AuthProvider";
import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Error from "./Error";
import { green } from "@mui/material/colors";
import { apiPatchUser } from "../services/ConnectionService";

export default function ProfileView() {

    const {
        reload,
        logged,
        token,
        username,
        email,
        password,
        id,
        addressId,
        organizationId,
        getInfo
    } = React.useContext(AuthContext);

    const [onEdit, setEdit] = useState(false);

    useEffect(() => {
        reload();
    }, [])

    useEffect(() => {
    }, [logged, onEdit, username, email]);

    function patchCall(newEmail, newUsername, newPassword) {
        apiPatchUser(token, id, newUsername, newEmail, newPassword, addressId, organizationId);
    }

    function clickOnEdit() {
        setEdit(true);
    }

    function clickOnSave() {
        const email_field = document.getElementById("email-field");
        const username_field = document.getElementById("username-field");
        const password_field = document.getElementById("password-field");
        console.log("email_field : " + email_field.value);
        console.log("username_field : " + username_field.value);
        console.log("password_field : " + password_field.value);
        patchCall(email_field.value, username_field.value, password_field.value);
        reload();
        getInfo(token, email_field.value);
        setEdit(false);
    }

    if (!logged) {
        return <Error/>
    }

    return (
        <>
            <NavBar/>
            <div style={{
                paddingTop: "2rem",
                paddingLeft: "3rem",
                paddingRight: "3rem",
                maxWidth: "1280px",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "100px"
            }}>
                <div className="profile-panel">
                    <div className="elem">
                        <Avatar
                            alt="Patrick"
                            src="https://images.pexels.com/photos/16110027/pexels-photo-16110027/free-photo-of-animal-chien-animal-de-compagnie-mignon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            sx={{ width: 180, height: 180 }}
                        ></Avatar>
                    </div>
                    <div className="elem">
                        {onEdit ?
                            <TextField
                                id="email-field"
                                className="field"
                                fullWidth
                                label="Email"
                                defaultValue={email}
                                variant="standard"
                                ></TextField>
                            :
                                <TextField
                                className="field"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                                label="Email"
                                defaultValue={email}
                                variant="standard"
                            ></TextField>
                        }
                    </div>
                    <div className="elem">
                        {onEdit ?
                            <TextField
                                id="username-field"
                                className="field"
                                fullWidth
                                label="Username"
                                defaultValue={username}
                                variant="standard"
                                ></TextField>
                            :
                                <TextField
                                className="field"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                                label="Username"
                                defaultValue={username}
                                variant="standard"
                            ></TextField>
                        }
                    </div>
                    <div className="elem">
                        {onEdit ?
                            <TextField
                                id="password-field"
                                className="field"
                                fullWidth
                                label="Password"
                                defaultValue={username}
                                variant="standard"
                                ></TextField>
                            :
                                <TextField
                                className="field"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                                label="Password"
                                type="password"
                                defaultValue={password}
                                variant="standard"
                            ></TextField>
                        }
                    </div>
                    <div className="icon-container">
                        {onEdit ?
                            <Fab color={"success"} aria-label="save" onClick={clickOnSave}>
                                <SaveIcon />
                            </Fab>
                        :
                            <Fab color={"warning"} aria-label="edit" onClick={clickOnEdit}>
                                <EditIcon />
                            </Fab>
                        }
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </>
    );
}