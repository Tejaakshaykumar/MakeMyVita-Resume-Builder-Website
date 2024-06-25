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
    let isLoggedIn=!!token;
    const LogoutUser=()=>{
        setToken("");
        setUser(null);
        return localStorage.removeItem("token");
    };

    const userAuthentication= async ()=>{
        if (token) { 
            try {
              const response = await fetch('http://localhost:5000/api/auth/user', {
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
      
              if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
              }
            } catch (error) {
              console.error('Error fetching user data:', error);
            } finally {
              setLoading(false); // Set loading to false after attempt to fetch user data
            }
          }
    };
    
    useEffect(()=>{
        userAuthentication();
    }, []);
    return <AuthContext.Provider value={{storeTokenInLS,LogoutUser ,user,loading,isLoggedIn}}>
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