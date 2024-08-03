import React, { useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
 
  } from '@ant-design/icons';
  import { Button, Layout, Menu, theme, Input,Modal } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { AiFillProduct } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { SIGN__OUT } from '../../redux/actions/actionTypes';
import useFetch from '../../hooks/useFetch';
  const { Header, Sider, Content } = Layout;
 const {Search} = Input
const items1 = ['Home', 'Auth', 'Admin'].map((key) => ({
  key,
  label: `${key}`,
  
}));

const onSearch = (value, _e, info) => console.log(info?.source, value);
const Home = () => {
  useFetch()
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
  <div className='parentHome'>
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        Are you sure Delete?
      </Modal>
   <Layout style={{height:"900px",width:"1600px", margin:'0 auto'}}>
      <Sider  trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" style={{display:"Flex"}} />
       
        <Menu style={{height:"850px",width:"160px",display:"flex",flexDirection:"column",}}
          theme="dark"
          mode="inline"
          items={[
            {
              key: '1',
              icon: <AiFillProduct />,
              label: <NavLink className='navlin__lnik' to="products">Products</NavLink>,
            },
           
            {
              key: '2',
              icon:<FaUserAlt />,
            
              label:<NavLink className='navlin__lnik' to='user'>User</NavLink>,
            },
            {
              key: '3',
              icon:<FaUserAlt />,
            
              label:<NavLink className='navlin__lnik' to='pro'>Promote</NavLink>,
            },
            
          ]}
          
    ></Menu>
    <Button onClick={handleSignOut} danger type='primary' style={{width:"180px",margin:"0 auto",display:"flex",alignItems:"end"}}>Sign Out</Button>
      </Sider>
      <Layout>
        <Header style={{width:"1600px",display:"flex",alignItems:"center",gap:"20px"}}>
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
        <Menu style={{width:"450px"}}
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
            {
              key: '3',
             
              label: <div style={{
                width:"60px",
                height:"60px",
                borderRadius:"50%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:"30px",
                background:"gray"}}>
             <FaUserAlt />
              </div>,
            },

          ]}
        />

        </Header>
        <Content  style={{
          width:"1600px",
            padding: 24,
            minHeight: 380,
            background: "rgb(134, 130, 130)",
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