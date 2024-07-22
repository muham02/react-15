import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Typography } from 'antd';
import { Link } from 'react-router-dom';
import axios from '../../../API'
const Register = () => {
  const {Text,Title} = Typography
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
    const onFinish = async (values) => {
        console.log(values);
try{
  let responce = await axios.post("/auth",values)
  console.log(responce);

}   
catch(error){
  console.log(error);
}     
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
    <Form.Item
    label="First Name"
      name="first_name"
      rules={[
        {
          required: true,
          message: 'Please input your FirstName!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    
    <Form.Item label="Password"
     className='w-200'>

    <Input
        prefix={<LockOutlined className="site-form-item-icon" />}

        type="password"
        placeholder="Password"
      />
      <Form.Item name="remember" valuePropName="checked" noStyle>
      <Checkbox onChange={onChange}>Remember me</Checkbox>
      </Form.Item>

      
    </Form.Item>
   
    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
       Register
      </Button>
<Title>Already Have an Account? <Link to='/login'>Login</Link></Title>
    </Form.Item>

  </Form>
  )
}

export default Register