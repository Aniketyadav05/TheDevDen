import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './Store/authSlice'
import { Header, Footer } from './Components/index'
import { Outlet } from 'react-router-dom'
import FadeInWrapper from './Components/Animation/FadeInWrapper'
import ShinyText from './Components/Animation/ShinyText'

const App = () => {
  const [Loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 750); // Adjust breakpoint if needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  if (isMobile) {
    return (
      <div className='flex flex-col gap-10 items-center justify-center min-h-screen bg-black text-white text-center p-4'>
        <FadeInWrapper>
        <ShinyText text="THE DEV DEN" disabled={false} speed={4} className="text-lg font-bold tracking-wide text-[rgba(106,111,113,255)] rock-salt mb-6"/>
        <p className="text-lg teko">This website is not ready for mobile devices yet. Please Try to access it with a Desktop</p>
      </FadeInWrapper>
      </div>
    );
  }

  return !Loading ? (
    <FadeInWrapper>
      <div className='min-h-screen flex flex-col bg-[rgba(30,30,30,255)]'>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className='w-full flex-grow'>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </FadeInWrapper>
  ) : (
    <div className='flex items-center justify-center min-h-screen bg-black'>
      <ShinyText text="THE DEV DEN" disabled={false} speed={3} className="text-lg font-bold tracking-wide text-[rgba(106,111,113,255)] rock-salt " />
    </div>
  );
}

export default App;
