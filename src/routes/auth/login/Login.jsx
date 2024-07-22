import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Typography } from 'antd';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
const Login = () => {
  const {Text,Title} = Typography
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };    
  return (
    <Form
    
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
  >
    <Form.Item
    label="First Name"
      name="firstname"
      rules={[
        {
          required: true,
          message: 'Please input your FirstName!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item
    label="Password"
      name="password"
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
    <Form.Item
    label="User Name"
      name="userName"
      rules={[
        {
          required: true,
          message: 'Please input your userName!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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

    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
       Login
      </Button>
      <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
<Title>Already Have an Account? <Link to='/'>Register</Link></Title>
    </Form.Item>
  </Form>

  )
}

export default Login