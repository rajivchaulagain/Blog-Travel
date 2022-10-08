import { createContext, useState } from "react";
import { getSession, setSessionInLocalStorage } from "../_helpers/authCrud";

export const AuthContext = createContext();

export const ProvideAuth = ({ children }) => {
    const auth = getSession();
    const [session, setSession] = useState(auth || '');
    const setAuth = (token) => {
        // console.log("token" , token.token);
        setSession(token);
        setSessionInLocalStorage(token);
    };
    const token = session.token;
    return (
        <AuthContext.Provider value={{ session, token, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
};