import React,{useContext} from "react"
import { Route, Navigate,Outlet } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
{/* <Route path="/" element={<Dashboard/>}/>
          <Route path="/addReservations" element={<AddReservations/>}/> */}
function PrivateRoute() {
  const { username, email } = useContext(AuthContext);

  //funcgtion to check auth permissions


  return (
    email ? <Outlet/> : <Navigate to="/login" />
  )
}

export default PrivateRoute