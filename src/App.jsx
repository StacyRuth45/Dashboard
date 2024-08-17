
import { useState } from 'react'
import './App.css'
import Dash from './Dashboard/Dash'
import Sidebar from './Dashboard/Sidebar'

function App() {
 const [sidebarToggle, setsidebarToggle] = useState(false)

  return (
    <div className='flex'>
     <Sidebar sidebarToggle={sidebarToggle}/>
     <Dash
      sidebarToggle={sidebarToggle}
       setsidebarToggle= {setsidebarToggle}/>
    </div>
  )
}

export default App
