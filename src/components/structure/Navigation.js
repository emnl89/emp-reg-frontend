import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Calendar from '../pages/Calendar'
import Account from '../pages/Account'
import Attendance from '../pages/Attendance'
import EmployeeDetails from '../pages/EmployeeDetails'
import Registry from '../pages/Registry'
import UpdateAttendance from '../pages/UpdateAttendance'
import UpdateEmployee from '../pages/UpdateEmployee'
import AddEmployee from '../pages/AddEmployee'

const nav = [

    { path: "/",                         name: "Home",                      element: <Home/>,                     isMenu: true,   isPrivate: false },
    { path: "/login",                    name: "Log In",                    element: <Login/>,                    isMenu: false,  isPrivate: false },
    { path: "/signUp",                   name: "Sign Up",                   element: <SignUp/>,                   isMenu: false,  isPrivate: false },
    { path: "/account",                  name: "Account",                   element: <Account/>,                  isMenu: true,   isPrivate: true },
    { path: "/calendar",                 name: "Calendar",                  element: <Calendar/>,                 isMenu: false,  isPrivate: true },
    { path: "/calendar/day",             name: "Attendance",                element: <Attendance/>,               isMenu: false,  isPrivate: false },
    { path: "/employeeDetails",          name: "Employee Details",          element: <EmployeeDetails/>,          isMenu: true,   isPrivate: true },
    { path: "/registry",                 name: "Registry",                  element: <Registry/>,                 isMenu: true,   isPrivate: true },
    { path: "/updateAttendance",         name: "Update Attendance",         element: <UpdateAttendance/>,         isMenu: false,  isPrivate: true },
    { path: "/updateEmployee",           name: "Update Employee",           element: <UpdateEmployee/>,           isMenu: false,  isPrivate: true },
    { path: "/addEmployee",              name: "Add Employee",              element: <AddEmployee/>,              isMenu: false,  isPrivate: true },
]

export default nav