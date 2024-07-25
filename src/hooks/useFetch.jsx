import {useEffect,useState} from 'react'
import axios from '../API'
const useFetch = () => {
const [data,setData]= useState(null)
useEffect(()=>{
    const loadData = async()=>{
       try{
        const responce = await  axios("/auth/profile")
        console.log(responce.data);
        }
       catch(error){
console.log(error);
       }
    }

        loadData()
},[])

  return (
    <div>useFetch</div>
  )
}

export default useFetch