import React from 'react'
import html from '../../assets/html-1.svg'
import css from '../../assets/css-3.svg'
import js from '../../assets/javascript-1.svg'
import react from '../../assets/react-2.svg'
import redux from '../../assets/redux.svg'
import tailwind from '../../assets/tailwind-css-2.svg'
import git from '../../assets/git-icon.svg'
import github from '../../assets/github-icon-2.svg'





function About() {
    return (
<div className='w-full h-screen flex md:flex-row  flex-col justify-center items-center '>

<div id='aboutbg' className='w-[90%] md:h-[75%] flex md:flex-row flex-col-reverse mt-20   bg-opacity-10 rounded-md '>

    
    <div className='md:w-[50%]  w-full pb-5 h-full flex flex-col gap-6  justify-center' >

<div className=' flex flex-wrap justify-around  md:justify-start px-7 py-5 items-center md:gap-12 gap-10 '>

    
    <img className='md:w-[17vmin] w-[15vmin]' src={html} alt="" />
    <img className='md:w-[17vmin] w-[15vmin]' src={css} alt="" />
    <img className='md:w-[17vmin] w-[15vmin]' src={js} alt="" />
    <img className='md:w-[17vmin] w-[15vmin]' src={react} alt="" />
    <img className='md:w-[17vmin] w-[15vmin]' src={redux} alt="" />
    <img className='md:w-[17vmin] w-[15vmin]' src={tailwind} alt="" />
    <img className='md:w-[17vmin] w-[15vmin]' src={git} alt="" />
    <img className='md:w-[17vmin] w-[15vmin] ' src={github} alt="" />

    

</div>
    </div>




    <div className=' py-10 md:w-[50%] p-4 h-full'>
    <h1 className='font-bold ml-4 md:text-5xl text-2xl text-[#ffa812]'>About</h1>
    <div className=' flex flex-wrap'>
        <p className=' md:mt-20 mt-10 ml-4 text-slate-400 font-semibold md:text-lg '>
        I’m Abhishek Kene, a recent graduate in Electronics and Telecommunication Engineering with a strong foundation in front-end development, including HTML, CSS, JavaScript, and React.js. My technical toolkit includes hands-on experience with responsive design, state management, and API integration, supported by proficiency in Git and Chrome Developer Tools. I bring a blend of problem-solving skills, attention to detail, and effective team collaboration, complemented by a solid grasp of design principles. My adaptability and eagerness to learn enable me to tackle new challenges quickly. I look forward to applying my skills at your organisation to contribute to the creation of impactful, user-focused web applications.
        </p>
    </div>


    </div>

</div>

</div>
      );
    };

export default About