import React, { useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Button, Layout, Menu, theme, Input,Modal } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { SIGN__OUT } from '../../redux/actions/actionTypes';
  const { Header, Sider, Content } = Layout;
 const {Search} = Input
const items1 = ['Home', 'Auth', 'Admin'].map((key) => ({
  key,
  label: `${key}`,
  
}));

const onSearch = (value, _e, info) => console.log(info?.source, value);
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let dispatch = useDispatch()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
const [collapsed,setCollapsed] =useState(false)
const handleSignOut = () => {
 setIsModalOpen(true);

};   
const handleOk = () => {
  setIsModalOpen(false);
 dispatch({type:SIGN__OUT})

};
const handleCancel = () => {
  setIsModalOpen(false);
};

  return (
  <div className='parent'>
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        Are you sure Delete?
      </Modal>
   <Layout style={{minHeight:"100vh",width:"1500px", margin:'0 auto'}}>
      <Sider  trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" style={{display:"Flex"}} />
       
        <Menu style={{height:"800px",display:"flex",flexDirection:"column",}}
          theme="dark"
          mode="inline"
          items={[
            {
              key: '1',
        
              label: <NavLink className='navlin__lnik' to="">Products</NavLink>,
            },
           
            {
              key: '2',
            
              label:<NavLink className='navlin__lnik' to='pro'>User</NavLink>,
            },
            
            
          ]}
          
    ></Menu>
    <Button onClick={handleSignOut} danger type='primary' style={{width:"180px",margin:"0 auto",display:"flex",alignItems:"end"}}>Sign Out</Button>
      </Sider>
      <Layout>
        <Header style={{width:"1400px",display:"flex",alignItems:"center",gap:"20px"}}>
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color:"#fff",
              
            }}
          />
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <Menu style={{width:"350px"}}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
            
              label:<Button>
                 <NavLink className='nav__btn' to='/login'>Login</NavLink>
              </Button>,
            },
            {
              key: '2',
          
              label: <Button>
                <NavLink className='nav__btn' to='/'>Register</NavLink>
              </Button>,
            },

          ]}
        />

        </Header>
        <Content  style={{
            padding: 24,
            minHeight: 380,
            background: "dodgerblue",
            color:"#fff",
            fontSize:"25px",
           borderRadius:"15px",
            margin:"30px"
          }}>
         <Outlet/>
        </Content>
      </Layout>
      </Layout>
  <Outlet/>
  </div>
  )
}

export default Home