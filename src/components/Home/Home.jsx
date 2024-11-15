import React from "react";
import TextChange from "./TextChanger";
// import me from '../../assets/me.svg'


import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      <div
        id="divide"
        className="md:h-screen h-[140vmin] flex  text-white justify-betwee relative "
      >
        <div
          id="name"
          className=" md:w-[60%] w-full  absolute z-10  mt-32 md:text-6xl text-2xl leading-tight font-bold p-4 md:px-20 bg-opacity-25"
        >
          <h1>Hii there !</h1>
          <h1>
            I'm{" "}
            <span className="text-[#ffa812]   inline-block">
              <TextChange />
            </span>
          </h1>
          <h1 className="text-[#f46b1c]">Frontend Developer</h1>

          <p className="md:text-xl text-sm mt-10 font-normal">
          Driven by a passion for web development and creating impactful content, I thrive on building dynamic, user-centered applications and bringing ideas to life through engaging digital experiences!
          </p>
        <NavLink to='/footer'>
        <button className="md:text-xl text-sm mt-10 bg-[#ffa812] p-2 rounded-lg text-black">
            Contact Me
          </button>
        </NavLink>
        </div>

        <div
          id="img"
          className="md:w-[40%] w-full absolute md:right-40 opacity-20  mt-14  md:opacity-40 h-[80%] md:h-[92%] ">
        
   
        </div>
      
      </div>

      
    </div>
  );
}

export default Home;
