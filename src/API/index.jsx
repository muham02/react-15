import axios from "axios";
import store from '../redux/store'
const getApi = axios.create({
    baseURL : import.meta.env.VITE_GET_ART,
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer${store.getState().token}`
    },
    timeout:10000
})
export default getApi