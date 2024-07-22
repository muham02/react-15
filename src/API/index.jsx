import axios from "axios";



const getApi = axios.create({
    baseURL : 'http://localhost:6000',
    headers:{
        "Content-TYpe":"applicattion/json"
    },
    timeout:10000
})
export default getApi