import React,{useContext} from "react"
import { Route, Navigate,Outlet } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import {getAuth} from 'firebase/auth'
import { useJwt } from "react-jwt";
{/* <Route path="/" element={<Dashboard/>}/>
          <Route path="/addReservations" element={<AddReservations/>}/> */}
function PrivateRoute() {
  
  const user = sessionStorage.getItem('user');
  const { isExpired } = useJwt(user!);

  return (
    !isExpired ? <Outlet/> : <Navigate to="/login" />
  )
}

export default PrivateRoute