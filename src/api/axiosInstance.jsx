import axios from "axios";
import { useContext } from "react";
import AuthContext from "../hooks/AuthenticationContext";

const api = axios.create(
    {
        baseURL: "http://localhost:8080/api/v1",

    }
)

// const {token}  = useContext(AuthContext);
// api.interceptors
//     .request
//     .use
//     ((config)=>{
//         if(token){
//             config.headers.Authorization=`Bearer ${token}`;
//         }
//         return config;
//     }
//     ,
//     (error)=>{
//         Promise.reject(error)
//     }
// )

export default api;