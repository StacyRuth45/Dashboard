import React from "react";
import FaHome, { FaCog, FaMapPin, FaPoll, FaRegBell, FaRegEnvelope } from "react-icons/fa"
const Sidebar = ({SidebarToggle}) => {
    return ( // sidebar Location
        //errer  on line 6
        <div className={' ${{sidebarToggle ? "hidden" : "black"}} w-64 bg-gray-800 fixed h-full px-4 py-2'}>
            <div className="my-2 mb-4">
                <h1 className="text-2x text-wihte font-bold">Rider Dashboard</h1>
            </div>
            <hr />
            <ul className="mt-3 text-white font-bold"> 
                <li className="mb-2 rounded hover:shadow hover:bg-orange-500 py-2">
                    <a href="" className="px-3">
                        <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                        Home
                    </a>
                </li>

                <li className="mb-2 rounded hover:shadow hover:bg-orange-500 py-2">
                    <a href="" className="px-3">
                        <FaRegBell className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegBell>
                        Notification
                    </a>
                </li>

                <li className="mb-2 rounded hover:shadow hover:bg-orange-500 py-2">
                    <a href="" className="px-3">
                        <FaPoll className='inline-block w-6 h-6 mr-2 -mt-2'></FaPoll>
                        Reports
                    </a>
                </li> 
                
                 <li className="mb-2 rounded hover:shadow hover:bg-orange-500 py-2">
                    <a href="" className="px-3">
                        <FaRegEnvelope className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegEnvelope>
                        Inbox
                    </a>
                </li>

                <li className="mb-2 rounded hover:shadow hover:bg-orange-500 py-2">
                    <a href="" className="px-3">
                        <FaMapPin className='inline-block w-6 h-6 mr-2 -mt-2'></FaMapPin>
                        Tracker
                    </a>
                </li>

                <li className="mb-2 rounded hover:shadow hover:bg-orange-500 py-2">
                    <a href="" className="px-3">
                        <FaCog className='inline-block w-6 h-6 mr-2 -mt-2'></FaCog>
                        Setings
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar