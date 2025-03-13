import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub,FaSkullCrossbones } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin} from "react-icons/fa6";
import { Button1 } from '..';
function Footer() {
  return (
    <footer className="bg-[rgba(30,30,30,255)] text-gray-400 py-6 px-10 mt-auto">
      <div className="flex justify-between items-center ">
        {/* Left Section */}
        <div className='flex flex-row '>
          <h1 className="text-8xl font-bold text-gray-500 tracking-wide">
            THE <span className="text-gray-400">DEV DEN</span>
          </h1>
          <p className="text-gray-400 font-extrabold mt-4 ml-4">Blog about Tech<br />Life<br />Anime.</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
        <Button1 icon={FaGithub} link="https://github.com/Aniketyadav05" className="shadow-gray-700 text-black"/>
        <Button1 icon={FaXTwitter} link="https://x.com/AniketYadav05_" className=" shadow-gray-700 " />
        <Button1 icon={FaLinkedin} link="/dashboard" className=" shadow-gray-700 " />
        <Button1 icon={FaSkullCrossbones} link="/policy" className=" shadow-gray-700 " />
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="border-t border-gray-700 mt-6 pt-4 flex justify-between text-sm">
        <div className="flex space-x-6">
          <Link to="/policy" className="hover:text-white">Terms & Conditions</Link>
          <Link to="/policy" className="hover:text-white">Cookie & Policy</Link>
        </div>
        
        <p>© 2025 The DEV DEN. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer