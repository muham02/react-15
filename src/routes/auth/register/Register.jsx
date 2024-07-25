import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../API'
import { GoogleLogin } from '@react-oauth/google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {REGISTER,ERROR} from '../../../redux/actions/actionTypes'

const Register = () => {
  let navigate = useNavigate()
const [form] = Form.useForm()
  const {Text,Title} = Typography
const notify = () => toast("success");
let dispatch = useDispatch()
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
    const onFinish = async (values) => {
      
try{
  let {data} = await axios.post("/auth",values)
  console.log(data);
  dispatch({type:REGISTER,token:data.payload.token,user:data.payload.user})
  if(data){
    notify('sucse');
    setTimeout(()=>{
      navigate('login')
    },3000)
  }

}   
catch(error){
  //notify(error);
 dispatch({type:ERROR})
}   
form.resetFields()
      };
  return (
 <div className='register '>
      <ToastContainer />
       <Form
       form={form}
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
  >
    <Title>Register</Title>
    <Form.Item
    className='formIten'
     label="User Name"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your Username!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item className='formIten'
    label="First Name"
      name="first_name"
      rules={[
        {
          required: true,
          message: 'Please input your FirstName!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="firstname" />
    </Form.Item>
    
    <Form.Item
     label="Password"
     name="password"
     required
    className='formIten'>

    <Input
        prefix={<LockOutlined className="site-form-item-icon" />}

        type="password"
        
        placeholder="Password"
      />
      </Form.Item>
      <Form.Item  name="remember" valuePropName="checked" noStyle>
       <Checkbox  className='formIten' onChange={onChange}>Remember me</Checkbox>
      </Form.Item>
      <Form.Item className='formIten google' >

      <GoogleLogin
     
  onSuccess={async  (credentialResponse) => {
    const decode = credentialResponse.credential.split(".")[1];
    const userData = JSON.parse(atob(decode));
    userData.username = userData.email;
    userData.password = userData.sub;
    userData.first_name = userData.name
   
    const user = {
        username:userData.email,
        password:userData.sub,
        first_name:userData.name
    }
    let responce = await axios.post("/auth",user)
  console.log(responce);
    
  }}
  onError={() => {
    console.log('Login Failed');
  }}
 
/>

  
    </Form.Item>
   

    <Form.Item  className='formItem' >

      <Button  type="primary" htmlType="submit" className="login-form-button">
       Register
      </Button>
      </Form.Item>
      <Form.Item  className='formItem' >    
<Text className='text'>Already Have an Account? <Link to='/login'>Login</Link></Text>
    </Form.Item>

  </Form>
 </div>
  )
}

export default Register