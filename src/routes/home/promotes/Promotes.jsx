import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios  from 'axios'
import { Card } from 'antd'
const { Meta } = Card;

const Promotes = () => {
  let params =  useParams()

  const [ data , setData] = useState([])
useEffect(()=>{

const getdata = async ()=>{
  const res = await axios(`https://dummyjson.com/carts/${params.id}`)
  setData(res.data.products);
}
  getdata()
},[params])
console.log(data);
    return(
     <h1>{data.title}</h1>
    )
  
}

export default Promotes