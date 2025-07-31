import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo.png'
import userImg from '../assets/user.png'
import {FaBars,FaBarsStaggered} from "react-icons/fa6"
import {FaSearch} from "react-icons/fa"
import {RiUserLine} from "react-icons/ri"
import Navbar from "./Navbar"
const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header>
      <div className='flex flex-1'>
        <Link to={'/'} className='bold-22 x1:bold-28 flex items-end gap-1'>
          <img src={logoImg} alt="" className='hidden sm:block h-9'/>
          {/* this h-9 make the image size small */}
          <div className="sm:relative top-1.5">Ramya<span className='text-secondary'>a.</span></div>
        </Link>
      </div>
      {/* Navbar for mobile and desktop */}
      <div className='flex-1'>
        <Navbar setMenuOpened={setMenuOpened} countainerStyles={`${menuOpened ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-x1 shadow-md w-52 ring-1 ring-slate-900/5 z-50":"hidden lg:flex gap-x-5 xl:gap-x-7 medium-15 ring-1 ring-1 ring-slate-900/15 rounded-full p-1 bg-primary" }`}/>
      </div>
      <div>
        {/* {searchbar} */}
        <div className="flex sm:flex-1 items-center">
          
        </div>
      </div>
    </header>
  )
}

export default Header
