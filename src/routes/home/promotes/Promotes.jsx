import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios  from 'axios'
import { Card } from 'antd'
const { Meta } = Card;

const Promotes = () => {
  let params =  useParams()

  const [ data , setData] = useState(null)
const getdata = async ()=>{
  const res = await axios(`https://dummyjson.com/carts/${params.id}`)
  console.log(res.data.products);
}
useEffect(()=>{
  getdata()
},[params])
console.log(data.title);
    return(
      <div>
        {
          data?  <Card
          hoverable
          style={{
            width: 240,
            background:"#fff",
            
          }}
          cover={<img alt="example" src={data.thumbnail} />}
        >
          <Meta title={data.title} description={data.price} />
        </Card> :<></>
        }
      </div>
    )
  
}

export default Promotes