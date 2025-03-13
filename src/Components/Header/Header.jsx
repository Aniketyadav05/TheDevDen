import React from 'react'
import {Container, Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ShinyText from '../Animation/ShinyText'


const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
   {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <div className='py-3 shadow bg-[rgba(30,30,30,255)]'>
      <Container>
        <nav className=" text-gray-300 py-4 flex justify-between items-center">
          <div className=''>
            <Link to='/'>
              <ShinyText text="THE DEV DEN" disabled={false} speed={3} className="text-lg font-bold tracking-wide text-[rgba(106,111,113,255)] rock-salt "/>
            </Link>
          </div>
          <ul className="flex space-x-6 text-sm font-semibold text-white "> 
            {navItems.map((item,index) => 
              item.active ? (
                <li key={index}  className='hover:text-[#ffffffbe]'>
                  <Link
                    to={item.slug}
                    onClick={() => navigate(item.slug)}
                  >{item.name}</Link>
                </li>
              ): null
            )}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </div>
  )
}

export default Header