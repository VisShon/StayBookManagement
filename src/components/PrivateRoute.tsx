import React,{useContext} from "react"
import { Navigate,Outlet } from "react-router-dom"
import { useJwt } from "react-jwt";
function PrivateRoute() {
  
  const user = sessionStorage.getItem('user');
  const { isExpired } = useJwt(user!);

  return (
    !isExpired ? <Outlet/> : <Navigate to="/login" />
  )
}

export default PrivateRoute