import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import link from "../../src/assets/link.png";

function Discrip() {
  const { id } = useParams();

  const pro = useSelector((state) =>
    state.projects.projects.find((pro) => pro.id == id)
  );


  if (!pro) {
    return <div>Loading...</div>;
  }


  const formattedFeatures = pro.Discrip.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <div className="w-full h-screen overflow-auto relative flex justify-center items-center">
      <div className="md:mt-32 mt-24 absolute flex pb-6 md:flex-row flex-col w-[90%] h-[90%] gap-8">
        
        <div className="md:w-[30%] flex flex-col gap-6">
          <img className="md:w-[90%] rounded-2xl" src={pro.imgUrl} alt="" />
          <div className="md:flex text-slate-300 text-2xl font-semibold flex-wrap w-[100%] h-[8%]">
            <h1>{pro.Title}</h1>
          </div>
          <div className="w-[100%] hidden h-[40%] md:flex items-center gap-5">
            <button onClick={() => window.open(`${pro.proUrl}`, "_blank")}>
              <img
                src={link}
                className="w-16 bg-[#ffa812] md:block font-semibold rounded-xl px-5 py-2"
                alt=""
              />
            </button>
            <button
              onClick={() => window.open(`${pro.srcUrl}`, "_blank")}
              className="bg-[#ffa812] h-10 p-2 rounded-lg font-semibold"
            >
              Source Code
            </button>
          </div>
        </div>

      
        <div className="text-slate-300 hidden text-2xl font-semibold flex-wrap w-[100%] h-[8%]">
          <h1>{pro.Title}</h1>
        </div>

        
        <div className="w-[100%] h-[90%] md:w-[60%] text-slate-300 overflow-y-scroll hide-scrollbar">
        
          <p className="shrink-0">{formattedFeatures}</p>
        </div>

  
        <div className="w-[100%] md:hidden h-[20%] flex justify-between items-center">
          <button onClick={() => window.open(`${pro.proUrl}`, "_blank")}>
            <img
              src={link}
              className="w-16 bg-[#ffa812] font-semibold rounded-xl px-5 py-2"
              alt=""
            />
          </button>
          <button
            onClick={() => window.open(`${pro.srcUrl}`, "_blank")}
            className="w- bg-[#ffa812] font-semibold rounded-xl px-5 py-2"
          >
            Source Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default Discrip;
