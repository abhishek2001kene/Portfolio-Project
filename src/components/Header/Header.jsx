import React, {useState } from 'react'
import { Link, NavLink, useActionData } from "react-router-dom"
import logo from "../../assets/bird_2.png";
import menu from '../../assets/menu-2-line.png'
import {GiHamburgerMenu} from "react-icons/gi"
import Menubar from '../Menubar';


function Header() {


   const [show, setshow] = useState(false)
    


  return (
    <div>
      <div id='head' className='z-20 flex justify-between  h-20 fixed w-full md:p- p-2 items-center'>
        <div>
            <Link to="/">
                <div id='logo' className='w-12 h-12 ml-5 md:ml-20 shadow shadow-white  rounded-3xl'>
                    <img src={logo} alt="" />
                </div>
            </Link>   
        
        </div>


        <div >
            <ul className='flex gap-12 md:px-20'>
                <li>
                    <NavLink 
                        to='/'
                        className={({ isActive }) => `transition-all  ${isActive ? 'text-[#ffa812] font-bold ' : 'text-white'}  text-lg font-semibold hover:text-[#ffa812] `}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/about'
                        className={({ isActive }) => `transition-all  ${isActive ? 'text-[#ffa812] font-bold ' : 'text-white'} text-lg  font-semibold hover:text-[#ffa812] `}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/projects' font-bold  
                        className={({ isActive }) => `transition-all  ${isActive ? 'text-[#ffa812] font-bold ' : 'text-white'} text-lg  font-semibold hover:text-[#ffa812] `}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/footer' font-bold  
                        className={({ isActive }) => `transition-all  ${isActive ? 'text-[#ffa812] font-bold ' : 'text-white'} text-lg  font-semibold hover:text-[#ffa812] `}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/addProject' font-bold  
                        className={({ isActive }) => `transition-all  ${isActive ? '' : ''} text-sm font-semibold bg-[#ffa812] p-2 rounded-md text-slate-800`}>
                        Add Project
                    </NavLink>
                </li>
            </ul>
        </div>
    </div> 




    <div id='head' className='z-20 md:hidden \ flex justify-between h-20 fixed w-full md:p- p-2 items-center'>
        <div className='w-full flex items-center justify-between'>
            <Link to="/">
                <div id='logo' className='w-12 h-12 ml-5 md:ml-20 shadow shadow-white  rounded-3xl'>
                    <img src={logo} alt="" />
                </div>

            </Link> 
            <GiHamburgerMenu onClick={()=>setshow(!show)} className='text-white w-16 z-40 '/>
          

        </div>

        {show && <Menubar />}

      

       
    </div> 
    </div>
  )
}

export default Header
