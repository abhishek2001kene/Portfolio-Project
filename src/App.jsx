import { useState } from 'react'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
  <div  id='bg' className='overflow-scroll hide-scrollbar'>
    <Header/>
   <Outlet/>
 
  </div>
  )
}

export default App
