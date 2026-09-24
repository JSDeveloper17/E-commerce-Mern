import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext()

export const AuthProvider = ({children})=>{

    const [user, setUser] = useState(null); 
    //?null means We don't currently have an authenticated user.

    const [token, setToken] = useState(null)

    //todo- isLoading  Used while restoring authentication when the application starts.
    const [isLoading, setLoading] = useState(true);

    const isAuthenticated = !!token; //!We don't currently have an authenticated user.

    const login = async (credential)=>{
        const response = await api.post("/login", credential);

        const data = response.data;

        setToken(data.token)
        localStorage.setItem("token",data.token);

        const userData = {
            name:data.name,
            email:data.email,
            role:data.role,
            id:data.id
        }
        setUser(userData)

        localStorage.setItem("user",JSON.stringify(userData))
        return data
    }

    const register = async (userData)=>{
        try{
            const response = await api.post("/register", userData)

            console.log(response.data)
            const data = response.data;
            const newUser = {
                name: data.name,
                email:data.email,
                role:data.role
            }
            
            setToken(data.token);
            localStorage.setItem("token", data.token)

            setUser(newUser)
            localStorage.setItem("user", JSON.stringify(newUser))

            return data;
        }
        catch(err){}
    }
    const logout = async ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user")
        setToken(null)
        setUser(null)
    }

    useEffect(()=>{
        const restoreAuth = async ()=>{
            try{
                 const restoreToken = localStorage.getItem("token");
                 const restoredUser = JSON.parse(localStorage.getItem("user"))

                 if(!restoreToken || !restoredUser)return;
                 setToken(restoreToken)
                 setUser(restoredUser)

            }
            catch(err){
                console.log("Failed to restore Authentication")
                localStorage.removeItem('token')
                localStorage.removeItem("user")
                setToken(null)
                setUser(null)
            }
            finally{
                setLoading(false)
            }
        }
        restoreAuth()
    },[])

    const value = { user, token, login, logout, isAuthenticated, isLoading, register}

    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth = ()=>{
    const context = useContext(AuthContext)
    return context;
}