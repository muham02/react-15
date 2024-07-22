import React, { Suspense,lazy } from 'react'

import { useRoutes } from 'react-router-dom'
import Login from './auth/login/Login'
import Register from './auth/register/Register'
import Loading from './loading/Loading'
const Auth = lazy (()=> import("./auth/Auth"))
const Home = lazy (()=> import("./home/Home"))

const SendRoutes = () => {
  return useRoutes([
    {
        path: "/",
        element:<Suspense fallback={<Loading/>}><Auth/></Suspense>,
        children:[
{
    path: "",
    element:<Suspense fallback={<Loading/>}><Register/></Suspense>,
},
{
    path: "login",
    element:<Suspense fallback={<Loading/>}><Login/></Suspense>,
}
        ]
    },
    {
        path: "/home",
        element:<Suspense fallback={<Loading/>}><Home/></Suspense>
    },
])
}

export default SendRoutes
