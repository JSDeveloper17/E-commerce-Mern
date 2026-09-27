import axios from "axios";

/*
 * Create one Axios instance.
 * All API requests in the application can use
 * this instance.
 */

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout:10000, //Req will fall if server does't respond in 10 sec 
    headers:{
        "Content-Type":"application/json" // Default header for JSON requests.
    }
})

/*
 * REQUEST INTERCEPTOR
 * Runs before every request made through `api`.
 */

api.interceptors.request.use( 
     //! Register a function that Axios should execute before sending a request.
    (config)=>{    //config contains the configuration for the current request.
        const token = localStorage.getItem("token")
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config  //"I'm finished modifying the request. Continue with it."
    },
    (error) =>{
        return Promise.reject(error)
    }
)