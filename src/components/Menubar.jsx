import React from 'react'
import {NavLink, Link} from 'react-router-dom'


function Menubar() {
  return (
    <div><div id='bg' className='top-5  absolute right-0 p-10 rounded-xl shadow-sm shadow-white '>
            
    <ul className='flex md:flex-row flex-col gap-12 md:px-20'>
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
        {/* <li>
            <NavLink 
                to='/addProject' font-bold  
                className={({ isActive }) => `transition-all  ${isActive ? '' : ''} text-sm font-semibold bg-[#ffa812] p-2 rounded-md text-slate-800`}>
                Add Project
            </NavLink>
        </li> */}
    </ul>
</div></div>
  )
}

export default Menubar