import React from "react";
import github from "../../assets/github-icon-2.svg";
import linkedin from "../../assets/linkedin-icon-3.svg";
import gmail from "../../assets/gmail.svg";

function Footer() {
  return (
    <div id="contactbg" className="w-full flex md:flex-row flex-col h-screen">
      <div className="relative md:w-[50%] h-full">
        <h1 className="absolute text-slate-200 md:top-40 bottom-14  text-xl md:text-6xl font-bold left-14 md:left-16">
          Let’s work together on
          <br />
          your next project.
        </h1>
      </div>

      <div className="md:w-[50%] flex justify-center md:items-center h-full">
        <div className="gap-6 w-[70%] h-[40%] mb-16 flex flex-col">
          
          <div onClick={() => window.open("mailto:abhishekkene01@gmai.com", "_blank")} className="flex gap-5 items-center cursor-pointer">
            <img className="w-[10%]" src={gmail} alt="Gmail Icon" />
            <h2 className="md:text-xl text-sm font-semibold text-slate-300">
              abhishekkene01@gmai.com
            </h2>
          </div>

          <div onClick={() => window.open("https://github.com/abhishek2001kene?tab=repositories", "_blank")} className="flex gap-5 items-center cursor-pointer">
            <img className="w-[10%]" src={github} alt="GitHub Icon" />
            <h2 className="md:text-xl text-sm font-semibold text-slate-300">
              github/abhishekkene
            </h2>
          </div>

          <div onClick={() => window.open("https://www.linkedin.com/in/abhishek-kene/", "_blank")} className="flex gap-5 items-center cursor-pointer">
            <img className="w-[10%]" src={linkedin} alt="LinkedIn Icon" />
            <h2 className="md:text-xl text-sm font-semibold text-slate-300">
              linkedin/abhishekkene
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
