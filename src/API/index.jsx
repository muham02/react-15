import axios from "axios";



const getApi = axios.create({
    baseURL : import.meta.env.VITE_GET_API,
    headers:{
        "Content-TYpe":"applicattion/json"
    },
    timeout:10000
})
export default getApi