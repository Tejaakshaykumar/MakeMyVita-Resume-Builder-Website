import { Children, createContext } from "react";

export const AuthContext =createContext();

export const AuthProvider =({Children})=> {
    const storeTokenInLS.ser
    return <AuthContext.Provider value={{storeTokenInLS}}>
        {Children}
    </AuthContext.Provider>
}