import { Children, createContext, useContext } from "react";

export const AuthContext =createContext();

export const AuthProvider =({Children})=> {
    const storeTokenInLS=(serverToken)=>{
        return localStorage.serItem("token",serverToken);
    };
    return <AuthContext.Provider value={{storeTokenInLS}}>
        {Children}
    </AuthContext.Provider>
}

export const useAuth =()=> {
    const AuthContextValue = useContext(AuthContext);
    if(!AuthContextValue){
        throw new Error("useAuth use")
    }
}