import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const REqAuth = ({children}) => {
    const location = useLocation();
    const auth = useSelector((store )=> store.AuthReducer.isAuth)

    if(!auth){
      return <Navigate to='/login' state={{from:location}} replace/>
    }
  return children
}

export default REqAuth