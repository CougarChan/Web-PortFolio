import React from "react";
import {TiChevronRight} from "react-icons/ti"

const About = () => {

  return (
  <div className=" w-full h-screen bg-slate-500 ">

    <div className=" max-w-[980px] mx- px-6 flex flex-col justify-center h-full ">
           
         <h1 className=" text-6xl  font-bold">About Me</h1>
         <h2 className=" text-5xl font-bold ">My name is German Lopez</h2>
         <p className=" text-3xl py-8 max-w-[700px]">Welcome to my Portfolio! I am a full-stack developer who specalize in a building applications, currently I am working with websites utililziing fullstack. Also Ive worked in building applications and using different frameworks. Thank you! Enjoy your time! </p>

         <div>
      <button className=" group transition ease-in-out text-white  bg-blue-500 hover:translate-y-2 hover:scale-100 hover:bg-blue-400 duration-300 items-center  rounded-md flex px-6 py-2 font-semibold ">Take me to your projects 
       <span className=" group-hover:rotate-90">
       <TiChevronRight className=" ml-2"/>
       </span>
      </button>
    </div>
    </div>
    




  </div>
 

  )



}
export default About;
