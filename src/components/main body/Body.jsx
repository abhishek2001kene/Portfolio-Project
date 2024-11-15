import React from 'react'
import About from '../About/About'
import Home from '../Home/Home'
import Projects from '../projects/Projects'
import Footer from '../Footer/Footer'
// import Features from '../features'

function Body() {
  return (
    <div id='bg'  className='flex flex-col gap-32 md:gap-28 overflow-y-scroll hide-scrollbar'>
        <Home/>
        <About/>
        <Projects/>
        <Footer/>

    </div>
  )
}

export default Body