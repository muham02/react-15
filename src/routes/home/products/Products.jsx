
import { Button,Carousel , Card,Typography,Table, Flex } from 'antd';
const { Title,Text } = Typography;
import axios  from '../../../API/index';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ADD_CARD } from '../../../redux/actions/actionTypes'
import useFetch from '../../../hooks/useFetch';
import { FaRegHeart,FaHeart } from "react-icons/fa";
const Products = () => {
  let dispatch = useDispatch()
const [ data ] = useFetch('product/all')


const handleAdd = (id)=>{
dispatch({type:ADD_CARD,foods:id})
}

  return (
   <div className='body'>
  {
    
    data&& data?.map(item=>{
    console.log(item._id);
    
      return(
       <Card  style={{width:"250px",
       height:"500px",
       fontSize:"30px",
       boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
       display:"flex",
       alignItems:"center",
       justifyContent:"center",
       flexDirection:"column",
       position:"relative",
       zIndex:"0"
       }} className='card' key={item.id}>
        <FaRegHeart style={{
          position:"absolute",
          top:"2px",
          right:"2px",
          zIndex:"1"
      }}/>
      <NavLink to={`/home/single/${item._id}`}>
       <Carousel arrows infinite autoplay style={{minHeight:"200px",width:"250px"}}>
       {
        item.product_images.map((image)=>{
        return(
          <img className='cardImg' alt="example" src={image} />
        )
        })
       }
       </Carousel>
        </NavLink>
      <Title style={{minHeight:"60px",fontSize:"30px"}}>{item.product_name}</Title>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <Text style={{fontSize:"20px",textDecoration:"line-through"}}>${item.original_price}</Text> <br />
      <Text style={{fontSize:"20px",color:"red"}}>${item.sale_price}</Text>
      </div>
      <br />
         <Button style={{width:"100%",minHeight:"30px",marginBottom:"10px"}}><button onClick={()=>handleAdd(item)} style={{background:"none",border:"none",fontSize:"22px"}}>+</button>
         <button style={{background:"none",border:"none",fontSize:"22px"}}>-</button></Button>
       </Card>

      )

     })
  }
   </div>
  )
}

export default Products