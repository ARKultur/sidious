import React, { createContext, useEffect, useState } from 'react';
import { apiLogin, apiRegister, apiUserInfos } from './ConnectionService';

export const AuthContext = createContext();

export function AuthProvider({children})
{
    const [email, setEmail] = useState('undefined');
    const [username, setUsername] = useState(undefined);
    const [token, setToken] = useState(undefined);
    const [id, setId] = useState(undefined);

    const [logged, setLogged] = useState(false);

    async function login(email, password, onClose) {
        try {
            const response = await apiLogin(email, password);
            const token = response;

            // const userData = await apiUserInfos(token, email); // TO LINK WITH SETTER WHEN API IS READY

            setEmail(email);
            setUsername(email.split("@")[0]);
            setToken(token);
            setId(0);
            setLogged(true);

            localStorage.setItem("token", token);

            onClose();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    function register(username, email, password) {
        apiRegister(username, email, password)
            .then((data) => {
                console.log("Register");
                console.log(data);
            })
            .catch((exception) => {
                console.log(exception);
            });
    }

    function logout() {
        console.log("Logout");
        setEmail(undefined);
        setUsername(undefined);
        setToken(undefined);
        setId(undefined);
        setLogged(false);
        localStorage.setItem("token", null);
    }

    useEffect(() => {
        let lToken = localStorage.getItem("token");

        if (lToken === undefined || lToken === null) {
            setToken(lToken);
            setLogged(false);
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            email,
            username,
            token,
            id,
            logged,
            login,
            register,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}
