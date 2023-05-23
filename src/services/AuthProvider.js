import React, { createContext, useEffect, useState } from 'react';
import { apiLogin, apiRegister, apiLogout, apiUserInfos } from './ConnectionService';

export const AuthContext = createContext();

export function AuthProvider({children})
{
    const [email, setEmail] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [token, setToken] = useState(undefined);
    const [id, setId] = useState(undefined);

    const [logged, setLogged] = useState(false);

    async function login(uEmail, password) {
        await apiLogin(uEmail, password)
            .then(async (token) => {
                console.log("token" + token);

                setToken(token);
                localStorage.setItem("token", token);

                await apiUserInfos(token, uEmail)
                    .then((data) => {
                        console.log(data);
                        setEmail(data.email);
                        setUsername(data.username);
                        setId(data.id);
                    })
                    .catch((exception) => {
                        console.log(exception);
                    });

                setLogged(true);
            })
            .catch((exception) => {
                console.log(exception);
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

    function logout() {
        setEmail(undefined);
        setUsername(undefined);
        setToken(undefined);
        setId(undefined);
        setLogged(false);
        localStorage.setItem("token", null);
    }

    useEffect(() => {
        let lToken = localStorage.getItem("token");
        if (lToken !== `null`) {
            setToken(lToken);
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