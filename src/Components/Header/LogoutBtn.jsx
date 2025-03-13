import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../Store/authSlice'
const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () =>{
    authService.logout().then(() =>{
      dispatch(logout())
    })
  }
  return (
    <button onClick={logoutHandler}
    className='font-[Hind Madurai] cursor-pointer hover:text-[#ffffffbe]'>Logout</button>
  )
}

export default LogoutBtn