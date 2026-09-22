import axios from "axios"

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

