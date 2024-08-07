import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios  from 'axios'

const Promotes = () => {
  let params =  useParams()
  const [ userData , setUserData] = useState(null)
useEffect(()=>{

const getdata = async ()=>{
  try{
    const responce = await axios(`https://dummyjson.com/carts/${params.id}`)
  console.log(responce);
  }
  catch(error){
    console.log(error);
  }
}
  getdata()
},[params])
console.log(userData);
    return(
     <h1></h1>
    )
  
}

export default Promotes