import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePro } from "../../feature/projectsSlice";
import link from "../../assets/link.png";

function Projects() {
  const pros = useSelector((state) => state.projects.projects); // Access `projects` array in the slice
  const dispatch = useDispatch();

  const [projects, setProjects] = useState([]);

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
    <div className="w-full min-h-screen justify-center relative flex  ">
       
       <h1 className='absolute md:top-15 top-20 left-8 md:left-16  font-bold md:text-5xl text-2xl  text-[#ffa812]'>Projects</h1>


      <div className="mt-40 w-[90%] h-full pb-5 flex flex-row justify-end">
      <ul className="h-full w-full md:overflow-x-scroll flex  gap-10 pb-2 hide-scrollbar">


        {pros.map((pro) => (
          <li
            key={pro.id}
            className="bg-slate-800 bg-opacity-50 relative  flex flex-col  flex-shrink-0 md:w-[25%] md:h-[80%] w-[85%] h-[50%] rounded-2xl"
          >
            <div className="w-full h-[70%]  ">
              <img
                className="w-full h-full rounded-t-2xl"
                src={`${pro.imgUrl}`}
                alt=""
              />
            </div>
            <div className="flex justify-between px-5 pb-3 pt-4 text-center ">
            <h1 className=" md:text-xl text-md text-white font-semibold">
              {" "}
              {pro.Title}
            </h1>
            <button
              onClick={()=> window.open(`${pro.proUrl}`, "_blank")}
              >
                {" "}
                <img

                  src={link}
                  className="w-16 bg-[#ffa812] font-semibold rounded-xl px-5 py-2"
                  alt=""
                />
              </button>
            </div>

            <div className=" flex gap-5 px-5 mb-3 text-sm items-center justify-between  w-full md:h-[20%] h-[15%]">
          
              <button
              onClick={()=> window.open(`${pro.srcUrl}`, "_blank")}
              className="w- bg-[#ffa812] font-semibold rounded-xl md:px-5 py-1 px-3 md:py-2"
              >
                {" "}
                Source Code
              </button>
              <Link to={`/discrip/${pro.id}`}>
  <button className="bg-[#ffa812] p-2 font-semibold rounded-xl">
    Features
  </button>
</Link>

              {/* <button
                onClick={() => dispatch(deletePro({ id: pro.id }))}
                className="bg-black text-white p-2 mt-2 rounded"
              >
                ❌
              </button> */}
            </div>
          </li>
        ))}
      </ul>
      </div>

    </div>
  );
}

export default Projects;

{
  /* <ul className="flex overflow-x-auto w-[30%] bg-red-600  gap-4">
{pros.map((pro) => (
  <li
    key={pro.id}
    className="bg-slate-800  p-4 text-slate-50 rounded-md"
  >
    <h1 className="font-bold">{pro.Title}</h1>
    <h4>{pro.Features}</h4>
    <button
      onClick={() => dispatch(deletePro({ id: pro.id }))}
      className="bg-black text-white p-2 mt-2 rounded"
    >
      ❌
    </button>
  </li>
))}
</ul> */
}
