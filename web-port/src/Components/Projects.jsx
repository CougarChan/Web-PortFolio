import React from "react";
import { data } from "../Data/data";

const Project =() => {

        const work= data;

 return(
    <div name="Projects" className=" bg-[#0a192f] md:h-screen border-b-2 w-full ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
             <div className="pb-12">
            <h1 className="m-4 text-4xl flex border-b-5 border-b-blue-500 border-b-4 font-extrabold text-gray-300 "  >These are some of the projects that I have worked on and completed</h1>
              </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          
          {work.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div transition ease-out duration-500 "
  >
   
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
      
        <a href={item.github} target="blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>

        <a href={item.live} target="blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};



export default Project