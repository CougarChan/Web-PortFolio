import React, {useEffect} from "react";
import {TiChevronRight} from "react-icons/ti"
import { Link } from "react-scroll";
import AOS from 'aos'
import "aos/dist/aos.css"

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
   <div className="bg-slate-500 h-screen w-screen flex items-center  justify-evenly">
   <div name='About-Me'className="   flex flex-row max-w-[1500px] w-full justify-between h-full items-center">
    <div className=" px-5  ">
    <div data-aos= "fade-left" data-aos-duration="1000">
      <h1 className=" text-6xl  font-bold">About Me </h1>
         <h2 className=" text-5xl font-bold ">My name is German Lopez</h2>
         <p className=" text-3xl py-8 max-w-[700px]">Welcome to my Portfolio! I am a full-stack developer who specalize in a building applications, currently I am working with websites utililziing fullstack. Also Ive worked in building applications and using different frameworks. Thank you! Enjoy your time! </p>
           <div>
             <button className=" group transition ease-in-out text-white  bg-blue-500 hover:translate-y-2 hover:scale-100 hover:bg-blue-400 duration-300 items-center  rounded-md flex px-6 py-2 font-semibold "> 
               <Link  to="Projects"  smooth={true}  duration={500} >
                Take me to your Projects
              </Link>
              <span className=" group-hover:rotate-90">
              <TiChevronRight className=" ml-2"/>
              </span>
              </button>
          </div>
        </div>
      </div>
    
    <div className="bg-white mx-auto max-w-[700px] w-full max-h-[650px] h-full items-center rounded-md " >
      <div className="flex flex-col h-full items-center"> 
      <h1 className=" font-bold py-4">Here are my top skills and languages</h1>
     <div className="max-w-[650px] mt-6 w-full flex flex-col max-h-[500px] items-center h-full">
           <div className=" flex  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">HTML</h1>
        <div className="w-full bg-gray-200 h-2">
          <div className="bg-blue-500 h-2 w-9"></div>
        </div>
      </div>

      <div className=" flex  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">HTML</h1>
        <div className="w-full bg-gray-200 h-2">
          <div className="bg-blue-500 h-2 w-9"></div>
        </div>
      </div>
      <div className=" flex  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">HTML</h1>
        <div className="w-full bg-gray-200 h-2">
          <div className="bg-blue-500 h-2 w-9"></div>
        </div>
      </div>
      <div className=" flex  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">HTML</h1>
        <div className="w-full bg-gray-200 h-2">
          <div className="bg-blue-500 h-2 w-2/4"></div>
        </div>
      </div>
      <div className=" flex  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">HTML</h1>
        <div className="w-full bg-gray-200 h-2">
          <div className="bg-blue-500 h-2 w-9"></div>
        </div>
      </div>
      <div className=" flex  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">HTML</h1>
        <div className="w-full bg-gray-200 h-2">
          <div className="bg-blue-500 h-2 w-9"></div>
        </div>
      </div>
      <div className=" flex  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">HTML</h1>
        <div className="w-full bg-gray-200 h-2">
          <div className="bg-blue-500 h-2 w-9"></div>
        </div>
      </div>
      <div className=" flex  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">HTML</h1>
        <div className="w-full bg-gray-200 h-2">
          <div className="bg-blue-500 h-2 w-9"></div>
        </div>
      </div>
      <div className=" flex  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">HTML</h1>
        <div className="w-full bg-gray-200 h-2">
          <div className="bg-blue-500 h-2 w-9"></div>
        </div>
      </div>
         <button></button>
        </div>
      
      </div>


    </div>
   
    </div>
    </div>
   )
}
export default About;
