import React, { Suspense,lazy } from 'react'

import { useRoutes } from 'react-router-dom'

import Loading from './loading/Loading'
const Auth = lazy (()=> import("./auth/Auth"))
const Private = lazy (()=> import("././private/Private"))

const Register = lazy (()=>import("./auth/register/Register"))
const Login = lazy(()=>import('./auth/login/Login'))
   const Products = lazy(()=>import("./home/products/Products"))
const  Promotes = lazy(()=>import("./home/promotes/Promotes"))


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
        element:<Suspense fallback={<Loading/>}><Private/></Suspense>,
        children:[
{
    path:"",
    element:<Suspense fallback={<Loading/>}><Products/></Suspense>,

},
{
path:"pro",
element:<Suspense fallback={<Loading/>}><Promotes/></Suspense>
}

        ]
    },
])
}

export default SendRoutes
