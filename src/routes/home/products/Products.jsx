
import { Card } from 'antd';
// import axios from '../../../API'
import axios  from 'axios';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;
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
   <div>
  {
    
     data?.map(item=>{
    
    
      return(
       <div style={{
        width:"1200px",
   
       display:"flex",
       justifyContent:"space-between"
       }}>
         <Card
        hoverable
        style={{
          width: 240,
          background:"#fff",
          
        }}
        cover={<NavLink to={`/home/pro/${item.id}`}><img alt="example" src={item.thumbnail} /></NavLink>}
      >
        <Meta title={item.title} description={item.price} />
      </Card>
       </div>
      )
     })
  }
   </div>
  )
}

export default Products