import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

const nav = [
    {path: "/",       name: "Home",    element: <Home/>,   isMenu: true,  isPrivate: false},
    {path: "/login",  name: "Log In",  element: <Login/>,  isMenu: false, isPrivate: false},
    {path: "/signUp", name: "Sign Up", element: <SignUp/>, isMenu: false, isPrivate: false},
]

export default nav