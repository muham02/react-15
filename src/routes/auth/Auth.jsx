import React from 'react'
import { Outlet } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

const Auth = () => {
  return (
 <GoogleOAuthProvider clientId={import.meta.env.VITE__GOOGLE__CLIEnt}>
   <Outlet/>
 </GoogleOAuthProvider>
  )
}

export default Auth