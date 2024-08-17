import React from "react";
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const Navbar = ({sidebarToggle, setsidebarToggle}) => {
    return (
        // navbar 
        <nav className="bg-gray-800 px-4 py-3 flex justify-between ">
            <div className="flex items-center text-xl">
               <FaBars className="text-white me-4 cursor-pointer" onClick={() => setsidebarToggle(!sidebarToggle)}/>
             // Logo Location  <span className="text-white font-semibold">2Wheelers</span> 
            </div>
            // Search bar icon
            <div className="flex items-center gap-x-5">
                <div className="relative md:w-65">
                <span className="relative md:absolute insert-y-0 left-0 flex items-center pl-2">
                    <button className="p-1 focus:outline-none text-white md:text-black"><FaSearch /></button></span>
                <input type="text" className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:black"></input>
                </div>
            </div>
            // notification icon
            <div className="text-white">
                <FaBell className="w-6 h-6"/>
            </div>
            // profile
            <div className="relative">
               <button className="text-white group">
                  <FaUserCircle className="w-6 h-6 mt-1"/>
                  <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:black top-full right-0">
                    <ul className="py-2 text-sm text-grey-950">
                        <li>
                           <a href="">Profile</a> 
                           <a href="">Settings</a> 
                           <a href="">Log Out</a> 
                        </li>
                    </ul>
                  </div>
               </button>
            </div>
        </nav>
    )
}

export default Navbar