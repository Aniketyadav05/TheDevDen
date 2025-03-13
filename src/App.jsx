import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './Store/authSlice'
import {Header,Footer} from './Components/index'
import { Outlet } from 'react-router-dom'
import FadeInWrapper from './Components/Animation/FadeInWrapper'
import ShinyText from './Components/Animation/ShinyText'
const App = () => {
  const [Loading,setLoading] = useState(true);
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) =>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !Loading ? (
    <FadeInWrapper>
      <div className='min-h-screen flex flex-col  bg-[rgba(30,30,30,255)]'>
        <div className="flex flex-col min-h-screen" >
          <Header/>
          <main className='w-full  flex-grow'>
          <Outlet />
          </main>
          <Footer/>
        </div>
      </div>
      </FadeInWrapper>
  ) : 
  <div className='flex items-center justify-center min-h-screen bg-black'>
  <ShinyText text="THE DEV DEN" disabled={false} speed={3} className="text-lg font-bold tracking-wide text-[rgba(106,111,113,255)] rock-salt "/>
  </div>
  
}

export default App