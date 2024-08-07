import axios from "axios";
import { SIGN__OUT } from "../redux/actions/actionTypes";
import store from '../redux/store'
const getApi = axios.create({

    baseURL : import.meta.env.VITE_GET_ART,
    headers:{
        "Content-Type":"application/json",
        "Authorization":``
    },
    timeout:10000
})
getApi.interceptors.request.use(
    (request)=>{
        if(request){
            request.headers['Authorization'] = `Bearer ${store.getState().token}`
            return request
        }

    },
    (error)=>{
        return Promise.reject(error)
    }
)
getApi.interceptors.response.use(
(response)=>{
        if(response){
            return response
        }
    },
    (error)=>{

if(error.response?.status===401||error.response?.status===403){

   store.dispatch({type:SIGN__OUT})
   return Promise.reject(error)
}
    }
)
export default getApi