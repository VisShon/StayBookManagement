import React,{useState,useContext} from 'react'
import '../styles/login.scss'
import logo from '../images/logo.png'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from "react-router-dom";

function Login() {
  const[error,setError] = useState(false)
  const[userEmail,setUserEmail] = useState<string|undefined>('')
  const[password,setPassword] = useState<string|undefined>('')
  const {Login,email} = useContext(AuthContext)
  const navigate = useNavigate();

  const onClickHandler = async ()=>{
    userEmail?setError(false):setError(true);
    try{
      await Login(userEmail,password);
      navigate('/');
    }
    catch(err){
      navigate('/NoAccess');
    }

  }
  return (
    <div  className = "bgCard">
      <div className="fillerImage">
        <h2>Admin Portal</h2>
        <img src={logo}/>
        {error&&<p style={{color: 'red'}}>Please enter your email and password</p>}
      </div>
      <div className="form">
        <input type="text" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)}  className="form-control" placeholder="Email"></input>
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"></input>
        <div className="Book" style={{marginTop:'2rem'}} onClick={onClickHandler}>Login</div>
      </div>
    </div>
  )
}

export default Login