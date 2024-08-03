
import { Button, Card,Typography } from 'antd';
// import axios from '../../../API'
const { Title,Text } = Typography;
import axios  from 'axios';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const Products = () => {
const [ data , setData] = useState([])
const getdata = async ()=>{
  const res = await axios('https://dummyjson.com/carts')
 setData(res.data.carts[14].products);
}
useEffect(()=>{
  getdata()
},[])
  return (
   <div className='body'>
  {
    
     data?.map(item=>{
    console.log(item);
    
      return(
       <div className='card'>
      <NavLink to={`/home/pro/:${item.id}`}><img className='cardImg' alt="example" src={item.thumbnail} /></NavLink>
      <Title style={{minHeight:"150px"}}>{item.title}</Title>
      <Text>{item.price}</Text> <br />
         <Button><button style={{background:"none",border:"none"}}>+</button>
         <button style={{background:"none",border:"none"}}>-</button></Button>
       </div>
      )

     })
  }
   </div>
  )
}

export default Products