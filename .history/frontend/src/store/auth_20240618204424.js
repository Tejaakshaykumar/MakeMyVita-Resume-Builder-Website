import {  createContext, useContext, useEffect, useState } from "react";

export const AuthContext =createContext();

export const AuthProvider =({children})=> {
    const [token,setToken]=useState(localStorage.getItem("token"));
    const storeTokenInLS=(serverToken)=>{
        return localStorage.setItem("token",serverToken);
    };
    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    };

    //JWT auth to get currently loggedin user data 
    const userAuthentication=async ()
    
    useEffect(()=>{
        userAuthentication();
    })
    return <AuthContext.Provider value={{storeTokenInLS,LogoutUser}}>
        {children}
    </AuthContext.Provider>
};

export const useAuth =()=> {
    const AuthContextValue = useContext(AuthContext);
    if(!AuthContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return AuthContextValue;
}