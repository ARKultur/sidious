import React, { useRef, useEffect, useState } from "react";
import Modal from '../modal/Modal';
import './ConnectionModal.css'
import { useTranslation } from "react-i18next";
import * as API from "../../api"

function InputBlock(props) {

    const {label, form_type} = props;

    const { t } = useTranslation();
    const [focus, setFocus] = useState("");
    const [empty, setEmpty] = useState(true);

    function onFocus() {
        setFocus("focus");
    }

    function onBlur() {
        if (empty)
            setFocus("");
    }

    function onChange(event) {
        if (event.target != null) {
            event.target.value == "" ? setEmpty(true): setEmpty(false);
        }
    }

    return (
        <div
            className={`input-block ${focus}`}
            onFocus={() => { onFocus() }}
            onBlur={() => { onBlur() }}
            onChange={(event) => { onChange(event) }}
        >
            <label htmlFor="">{t(label)}</label>
            <input type={form_type} required/>
        </div>
    );
}

export default function ConnectionModal(props)
{
    const { onClose } = props;
    const { t } = useTranslation();

    const [openOverlay, setOpenOverlay] = useState(false);

    const toggleThirdPanel = () => {
        setOpenOverlay(!openOverlay);
    };

    async function loginCall() {
        let form = document.getElementById("Sign In").getElementsByClassName("contact-form");
        console.log("email = ", form[0][0].value);
        console.log("password = ", form[0][1].value);
        API.login(form[0][0].value, form[0][1].value);
    }

    async function registerCall() {
        let form = document.getElementById("Sign Up").getElementsByClassName("contact-form");
        console.log("username = ", form[0][0].value);
        console.log("email = ", form[0][1].value);
        console.log("password = ", form[0][2].value);
        console.log("confirm password = ", form[0][3].value);
        // if (form[0][2].value != form[0][3].value)
        //     toast me
        // API.register(form[0][0].value, form[0][1].value, FirstName, LastName, form[0][2].value);
    }

    async function forgotPasswordCall() {
        let form = document.getElementById("Sign In").getElementsByClassName("contact-form");
        console.log("email = ", form[0][0].value);
        // API.forgotPassword(form[0][0].value);
    }

    return (
        <Modal onClose={onClose} frame={false}>
            <div className="connection-panel">
                <div
                    id="Sign In"
                    className={`panel panel-sign-in ${openOverlay ? "notshow" : ""}`}
                >
                    <form className="contact-form">
                        <h1>{t("Sign In")}</h1>
                        <div className="input-container">
                            <InputBlock label="Email" form_type="email"/>
                            <InputBlock label="Password" form_type="password"/>
                        </div>
                        <a id="forgot-pass" target="_blank" onClick={forgotPasswordCall}>I Forgot my Password</a>
                        <div className="custom-btn btn-8" onClick={ loginCall }>
                            <span>{t("Sign In")}</span>
                        </div>
                    </form>
                </div>
                <div
                    id="Sign Up"
                    className={`panel panel-sign-up ${openOverlay ? "" : "notshow"}`}
                >
                    <form className="contact-form">
                        <h1>{t("Sign Up")}</h1>
                        <div className="input-container">
                            <InputBlock label="Name" form_type="text"/>
                            <InputBlock label="Email" form_type="email"/>
                            <InputBlock label="Password" form_type="password"/>
                            <InputBlock label="Confirm Password" form_type="password"/>
                        </div>
                        <div className="custom-btn btn-8" onClick={ registerCall }>
                            <span>{t("Sign Up")}</span>
                        </div>
                    </form>
                </div>
                <div className={`panel panel-overlay ${openOverlay ? "toggle" : ""}`}>
                    {openOverlay
                        ?
                            <div className="overlay-panel overlay-right">
                                <h1>{t("Hello, Wanderer!")}</h1>
                                <p>{t("Enter your personal details and start journey with us")}</p>
                                <div className="custom-btn ghost" onClick={ toggleThirdPanel }>
                                    <span>{t("Sign In")}</span>
                                </div>
                            </div>
                        :
                            <div className="overlay-panel overlay-left">
                                <h1>{t("Welcome Back!")}</h1>
                                <p>{t("To Keep connected with us please login with your personal info")}</p>
                                <div className="custom-btn ghost" onClick={ toggleThirdPanel }>
                                    <span>{t("Sign Up")}</span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </Modal>
    );
}