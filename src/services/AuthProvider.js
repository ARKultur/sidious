import React, { createContext, useEffect, useState } from 'react';
import { apiLogin, apiRegister } from './ConnectionService';

export const AuthContext = createContext();

export function AuthProvider({children})
{
    const [email, setEmail] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [token, setToken] = useState(undefined);
    const [id, setId] = useState(undefined);

    const [logged, setLogged] = useState(false);

    async function login(email, password) {
        await apiLogin(email, password)
            .then((data) => {
                console.log("Login");
                console.log(data);

                setEmail("email");
                setUsername("Patrick");
                setToken(data);
                setId("id");
                setLogged(true);
                localStorage.setItem("token", data);
                console.log("token : ", data);
                console.log("local token : ", localStorage.getItem("token"));
            })
            .catch((exception) => {
                console.log(exception);
            });
        console.log("logged");
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
        console.log(lToken);
        if (lToken !== `null`) {
            console.log("WTF");
            setToken(lToken);
            setUsername("Patrick");
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