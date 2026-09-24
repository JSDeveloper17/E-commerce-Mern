import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext()

export const AuthProvider = ({children})=>{

    const [user, setUser] = useState(null); 
    //?null means We don't currently have an authenticated user.

    const [token, setToken] = useState(null)

    //todo- isLoading  Used while restoring authentication when the application starts.
    const [isLoading, setLoading] = useState(null);

    const isAuthenticated = !!token; //!We don't currently have an authenticated user.

    const login = async (credential)=>{
        const response = await api.post("/login", credential);

        const {token, ...userData} = response.data;

        setToken(token)
        setUser(userData)
        localStorage.setItem("token",token);

        return response.data;
    }

    const logout = async ()=>{
        localStorage.removeItem("token");
        setToken(null)
        setUser(null)
    }

    useEffect(()=>{
        const restoreAuth = async ()=>{
            try{
                 const restoreToken = localStorage.getItem("token");

                 if(!restoreToken)return;
                 setToken(restoreToken)
            }
            catch(err){
                console.log("Failed to restore Authentication")
                localStorage.removeItem('token')
                setToken(null)
                setUser(null)
            }
            finally{
                setLoading(false)
            }
        }
        restoreAuth()
    },[])

    const value = { user, token, login, logout, isAuthenticated, isLoading}

    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth = ()=>{
    const context = useContext(AuthContext)
    return context;
}