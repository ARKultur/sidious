import React, { createContext, useEffect, useState } from 'react';
import { apiLogin, apiRegister, apiUserInfos } from './ConnectionService';

export const AuthContext = createContext();

export function AuthProvider({children})
{
    const [email, setEmail] = useState('undefined');
    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [addressId, setAddressId] = useState(undefined);
    const [organisationId, setOrganisationId] = useState(undefined);
    const [token, setToken] = useState(undefined);
    const [id, setId] = useState(undefined);

    const [logged, setLogged] = useState(false);

    async function login(uEmail, uPassword) {
        await apiLogin(uEmail, uPassword)
            .then(async (uToken) => {
                setLogged(true);
                console.log("token" + uToken);

                setToken(uToken);
                setEmail(uEmail);
                setPassword(uPassword);
                localStorage.setItem("token", uToken);
                localStorage.setItem("email", uEmail);
                localStorage.setItem("password", uPassword);

                getInfo(uToken, uEmail);
            })
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

    function register(username, email, password) {
        apiRegister(username, email, password)
            .then((data) => {
                console.log(data);
            })
            .catch((exception) => {
                console.log(exception);
            });
    }

    async function getInfo(uToken, uEmail) {
        await apiUserInfos(uToken, uEmail)
        .then((data) => {
            setUsername(data.username);
            setId(data.id);
            setAddressId(data.password);
            setAddressId(data.addressId);
            setOrganisationId(data.OrganisationId);
            localStorage.setItem("username", data.username);
            localStorage.setItem("password", data.password);
        })
        .catch((exception) => {
            console.log(exception);
        });
    }

    function logout() {
        setEmail(undefined);
        setUsername(undefined);
        setToken(undefined);
        setId(undefined);
        setAddressId(undefined);
        setOrganisationId(undefined);
        setLogged(false);
        localStorage.setItem("token", null);
        localStorage.setItem("email", null);
        localStorage.setItem("username", null);
        localStorage.setItem("password", null);
    }

    function reload() {
        let lToken = localStorage.getItem("token");
        let lEmail = localStorage.getItem("email");
        let lUsername = localStorage.getItem("username");
        let lPassword = localStorage.getItem("password");
        if (lToken !== `null`) {
            setToken(lToken);
            setEmail(lEmail);
            getInfo(lToken, lEmail);
            setUsername(lUsername);
            setPassword(lPassword);
            setLogged(true);
        }
    }

    useEffect(() => {
        reload();
    }, [])

    return (
        <AuthContext.Provider value={{
            email,
            username,
            password,
            token,
            id,
            addressId,
            organisationId,
            logged,
            login,
            register,
            logout,
            reload,
            getInfo
        }}>
            {children}
        </AuthContext.Provider>
    );
}
