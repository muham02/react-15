import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import TelegramLoginButton from 'telegram-login-button'

import axios from '../../../API'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {LOGIN,ERROR} from '../../../redux/actions/actionTypes'

const Login = () => {
let dispatch = useDispatch()

  const {Text,Title} = Typography
const [form] = Form.useForm()

  let navigate = useNavigate()
  const notify = () => toast("success");

    const onFinish =async (values) => {
      console.log(values);
        try{
            let {data} = await axios.post("/auth/login",values)
          console.log(data);
dispatch({type:LOGIN,token:data.payload.token,user:data.payload.user})
          if(data){
            notify('sucse');
            setTimeout(()=>{
              navigate('/home')
            },3000)
          }
          }   
          catch(error){
            dispatch({type:ERROR})

            if(error){

              toast(error);
            }
          }   
form.resetFields()

      };    
  return (
  <div className="login">
      <ToastContainer />
      <Form
    
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
  >
     <Title>Login</Title>
     <Form.Item
    label="User Name"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your userName!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item
    label="Password"
      name="password"
      required  

      rules={[
        {
          required: true,
          message: 'Please input your Password!',
        },
      ]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
   
    <Form.Item>
      <Form.Item name="remember" rules={[
        
      ]} valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <a className="login-form-forgot" href="">
        Forgot password
      </a>
    </Form.Item>
   <Form.Item className='formIten google'>
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
  console.log(responce.data);
    
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
<TelegramLoginButton
    botName={import.meta.env.VITE_BOT_NAME}
    dataOnauth={(user) => console.log(user)}
  />,
   </Form.Item>
    <Form.Item  className='formItem'>
      <Button type="primary" htmlType="submit" className="login-form-button">
       Login
      </Button>
      </Form.Item>
      <Form.Item  className='formItem'>
<Text>Already Have an Account? <Link to='/'>Register</Link></Text>
    </Form.Item>
  </Form>
  </div>

  )
}

export default Login