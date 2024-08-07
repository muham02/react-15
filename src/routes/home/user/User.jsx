
import { Avatar, Button, Table ,Typography} from 'antd';
import axios from '../../../API/index';
const { Paragraph ,Title} = Typography;
import useFetch from '../../../hooks/useFetch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
const User = () => {
//   const[date,isLoading] =  useFetch(`admin/registered-users`)

let [data]= useFetch("/admin/registered-users")
console.log(data);
const [disabled, setDisabled] = useState(false)


const columns = [
  {
    title: 'Name',
    dataIndex: 'first_name',
    key: 'name',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'age',
  },
  {
    title: 'EnteredTime',
    dataIndex: 'registeredAt',
    key: 'address',
  },
  {
    title: 'Role',
    dataIndex: 'user',
    key: 'address',
  },
  {
    title: 'action',
render:(user)=><Button disabled={disabled} type='primary' onClick={()=>handlePromoteUser(user)} danger>Promote</Button>
  }, 
];
const handlePromoteUser = async (user)=>{
  try{
let response = await axios.post("/admin/add-admin",{username:user.username})
console.log(response);
if(response.status === 200){
  toast("Promoted")
setDisabled(true)
}
  }
  catch(error){
toast(error)
  }
}
  return (
    <>
<ToastContainer />
    <Table dataSource={data} columns={columns} />
    </>
  )
}

export default User