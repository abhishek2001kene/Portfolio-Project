import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePro } from "../../feature/projectsSlice";
import link from "../../assets/link.png";

function Projects() {

  localStorage.clear()
  const pros = useSelector((state) => state.projects.projects); // Access `projects` array in the slice
  const dispatch = useDispatch();

  const [projects, setProjects] = useState([]);

  
  const defaultProjects = [
    {
      id: 1,
      name: "Tic Tac Toe",
      link: "https://abhishek2001kene.github.io/Tic-tac-toe-game/",
      sourceCodeLink: "https://github.com/abhishek2001kene/Tic-tac-toe-game",
      img:"https://media.licdn.com/dms/image/v2/D4D2DAQGBUyPweORp0Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1731572126511?e=1732345200&v=beta&t=LhNw38lW_OTttG8osi2m2xY-2rlYaiW5ebhQB_nYqSc"

    },
    {
      id: 2,
      name: "Tic Tac Toe",
      link: "https://abhishek2001kene.github.io/Rock-paper-scissor-game/",
      sourceCodeLink: "https://github.com/abhishek2001kene/Rock-paper-scissor-game",
      img:"https://media.licdn.com/dms/image/v2/D4D2DAQEAP_r4M7_hew/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1731597497364?e=1732348800&v=beta&t=dPy_OZK2KTxb3Y_hLsRYH2AAaj3UwzqvJ0e9GEZoJAI"

    },
    {
      id: 3,
      name: "E-Commerce Home Page",
      link: "https://abhishek2001kene.github.io/Luxury-bag-store/",
      sourceCodeLink: "https://github.com/abhishek2001kene/Luxury-bag-store",
      img:"https://media.licdn.com/dms/image/v2/D4D2DAQGr0NMgIX77Qw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1731599636579?e=1732348800&v=beta&t=jBAW9l8OYKE2C6SUymPaFBdV8Nv02Z4vlcUZ6rt8jyc"

    },
    {
      id: 4,
      name: "IMDB Clone",
      link: "https://imdb-ak.vercel.app/",
      sourceCodeLink: "https://github.com/abhishek2001kene/imdbClone",
      img:"https://media.licdn.com/dms/image/v2/D4D2DAQEjJUDPdVXiTw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1731611708771?e=1732348800&v=beta&t=gGrTOvb8uZ7APh09hdt2NxUYyWrRDMyBmU7IPJG28q4"

    },
    {
      id: 5,
      name: "Personal Portfolio",
      link: "https://portfolio-ask.vercel.app/",
      sourceCodeLink: "https://github.com/abhishek2001kene/Portfolio-Project",
      img:"https://media.licdn.com/dms/image/v2/D4D2DAQHvgCmH1QccEQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1731653419349?e=1732348800&v=beta&t=Jwn5kJxtQQ9tnirnRG6D93q-_q6OpyR1JkBniyKkE8k"

    },
    
  ];

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    if (storedProjects && storedProjects.length > 0) {
      setProjects(storedProjects);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(pros));
  }, [pros]);

  return (
    <div className="w-full min-h-screen justify-center relative flex">
      <h1 className="absolute md:top-15 top-20 left-8 md:left-16 font-bold md:text-5xl text-2xl text-[#ffa812]">
        Projects
      </h1>

      <div className="mt-40 w-[90%] h-full pb-5 flex flex-row justify-end">
        <ul className="h-full w-full md:overflow-x-scroll flex gap-10 pb-2 hide-scrollbar">
          
          {defaultProjects.map((pro) => (
            <li
              key={pro.id}
              className="bg-slate-800 bg-opacity-50 relative flex flex-col flex-shrink-0 md:w-[25%] md:h-[80%] w-[85%] h-[50%] rounded-2xl"
            >
              <div className="w-full h-[70%]">
                <img
                  className="w-full h-full rounded-t-2xl"
                  src={pro.img}
                  alt={pro.name}
                />
              </div>
              <div className="flex justify-between px-5 pb-3 pt-4 text-center">
                <h1 className="md:text-xl text-md text-white font-semibold">
                  {pro.name}
                </h1>
                
              </div>

              <div className="flex gap-5 px-5 mb-3 text-sm items-center justify-between w-full md:h-[20%] h-[15%]">
                <button
                  onClick={() => window.open(pro.sourceCodeLink, "_blank")}
                  className="w- bg-[#ffa812] font-semibold rounded-xl md:px-5 py-1 px-3 md:py-2"
                >
                  Source Code
                </button>
                <button
                  onClick={() => window.open(pro.link, "_blank")}
                >
                  <img
                    src={link}
                    className="w-16 bg-[#ffa812] font-semibold rounded-xl px-5 py-2"
                    alt="Link Icon"
                  />
                </button>
               

                {/* <button
                  onClick={() => dispatch(deletePro({ id: pro.id }))}
                  className="bg-black text-white p-2 mt-2 rounded"
                >
                  ❌
                </button> */}
              </div>
            </li>
          ))}

          {/* Render Dynamic Projects from Redux/LocalStorage */}
          {projects.map((pro) => (
            <li
              key={pro.id}
              className="bg-slate-800 bg-opacity-50 relative flex flex-col flex-shrink-0 md:w-[25%] md:h-[80%] w-[85%] h-[50%] rounded-2xl"
            >
              <div className="w-full h-[70%]">
                <img
                  className="w-full h-full rounded-t-2xl"
                  src={pro.img}
                  alt={pro.name}
                />
              </div>
              <div className="flex justify-between px-5 pb-3 pt-4 text-center">
                <h1 className="md:text-xl text-md text-white font-semibold">
                  {pro.name}
                </h1>
                <button
                  onClick={() => window.open(pro.link, "_blank")}
                >
                  <img
                    src={link}
                    className="w-16 bg-[#ffa812] font-semibold rounded-xl px-5 py-2"
                    alt="Link Icon"
                  />
                </button>
              </div>

              <div className="flex gap-5 px-5 mb-3 text-sm items-center justify-between w-full md:h-[20%] h-[15%]">
                <button
                  onClick={() => window.open(pro.sourceCodeLink, "_blank")}
                  className="w- bg-[#ffa812] font-semibold rounded-xl md:px-5 py-1 px-3 md:py-2"
                >
                  Source Code
                </button>
                <button
                  onClick={() => window.open(pro.link, "_blank")}
                >
                  <img
                    src={link}
                    className="w-16 bg-[#ffa812] font-semibold rounded-xl px-5 py-2"
                    alt="Link Icon"
                  />
                </button>
                {/* <Link to={`/discrip/${pro.id}`}>
                  <button className="bg-[#ffa812] p-2 font-semibold rounded-xl">
                    Features
                  </button>
                </Link> */}

                <button
                  onClick={() => dispatch(deletePro({ id: pro.id }))}
                  className="bg-black text-white p-2 mt-2 rounded"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
