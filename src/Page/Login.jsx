import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../Redux/AuthReducer/action';
import { USER_LOGIN_SUCCESS } from '../Redux/AuthReducer/actionType';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const location = useLocation();
  const come = location.state?.from?.pathname || '/'
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(email && password){
          dispatch( login({
            email,password
          }))
          .then((r)=>{
            if(r.type === USER_LOGIN_SUCCESS){
              navigate(come,{replace: true})
            }
          })
    }
  }
  return (
    <div>
      <h3>Create an account / Login</h3>
      
     <form onSubmit={handleSubmit}>
      <label>UserEmail: </label>
      <input type="email" value={email} placeholder='User Email' onChange={(e)=>setEmail(e.target.value)}/><br />
      <label>Password : </label>
      <input type="password" value={password} placeholder='User Password' onChange={(e)=>setPassword(e.target.value)}/><br />
      <button type='submit'> Login </button>
     </form>
    </div>
  )
}

export default Login