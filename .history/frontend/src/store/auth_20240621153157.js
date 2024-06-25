import {  createContext, useContext, useEffect, useState } from "react";
export const AuthContext =createContext();

export const AuthProvider =({children})=> {
    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const storeTokenInLS=(serverToken)=>{
        setToken(serverToken)
        return localStorage.setItem("token",serverToken);
    };
    const LogoutUser=()=>{
        setToken("");
        setUser(null);
        return localStorage.removeItem("token");
    };

    //JWT auth to get currently loggedin user data 
    const userAuthentication= async ()=>{
        try {
          const response =await fetch("http://localhost:5000/api/auth/user",{
            method:"GET",
            headers: {
                // "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
          });  
          if(response.ok){
            const data = await response.json();
            console.log("user data",data.userData);
            setUser(data.userData);
          }
        } catch (error) {
            console.error("error fetching user data");
        }
    };
    
    useEffect(()=>{
        userAuthentication();
    }, []);
    return <AuthContext.Provider value={{storeTokenInLS,LogoutUser ,user}}>
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