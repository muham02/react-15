import axios from '../../../API/index'
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import { Button, Card,Carousel,Grid,Typography } from 'antd'
const { Title,Text } = Typography;

const Single = () => {
  const {id} = useParams()
  const [data] = useFetch(`/product/single-product/${id}`)
const [mainImage,setMainIMage] = useState(0)
  
  return (
    <div style={{width:"1400px",height:"750px",display:"flex",alignItems:'center',justifyContent:"center"}} >
   {
    data && <div style={{display:"flex"}}>
      <div className='singleImg' >
       {
        data.product_images.map((image)=>{
        return(
          <img style={{width:"150px",height:"150px"}} alt="example" src={image} />
        )
        })
       }
      </div>
<div style={{width:"700px"}}>
<Title>{data.product_name}</Title>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>

<Text style={{fontSize:"20px",textDecoration:"line-through"}}>${data.original_price}</Text> <br />
      <Text style={{fontSize:"20px",color:"red"}}>${data.sale_price}</Text>
      </div>
      <Text style={{fontSize:"20px"}}>${data.description}</Text>
<br />
   <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",position:"relative"}}>
   <Button onClick={()=>handleAdd(item)} style={{width:"140px",height:"40px",background:"blue",border:"none",fontSize:"31px",position:"absolute",left:"10px",top:"100px",color:"#fff"}}>+</Button>
      <Button style={{width:"140px",height:"40px",background:"crimson",border:"none",fontSize:"31px",position:"absolute",right:"350px",top:"100px",color:"#fff"}}>-</Button>
   </div>
</div>
    </div>
   }
   </div> 
  )
}

export default Single