import React, {useEffect} from "react";
import {TiChevronRight} from "react-icons/ti"
import {Link} from "react-scroll"
import AOS from 'aos'
import "aos/dist/aos.css"
import { CiCircleList} from "react-icons/ci"
import Resume from "../assets/Resume.pdf"

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
   <div className=" bg-[#0a192f]   flex items-center border-b-2 justify-evenly ">
   <div data-aos="fade-up" data-aos-duration="1000" name='About-Me'className="   flex flex-row max-w-[1500px] w-full justify-between h-full items-center  ">
    <div className="  max-h-[900px] py-6 h-full ">
     
      <h1 className=" text-6xl  font-bold border-b-4 border-blue-600 w-2/4  text-slate-400">About <span className="text-white">Me</span> </h1>
         <h2 className=" text-5xl font-bold text-slate-400 mt-6 ">My name is <span className="text-white"> German Lopez </span></h2>
         <p className=" text-xl py-8 max-w-[700px] font-bold font-sans text-white">Welcome to my Portfolio! I am a full-stack developer who specializes in a building applications, currently working with websites using various frameworks to work front and back-end.  </p>
         
        
        <div className=" flex flex-col max-w-[700px]">
        <p className="font-bold mb-8 text-white">My interest in technology has been a life long for me, Ive enjoyed how things function and work in unison, but I really didnt think of programming as my career, but fast forward
          to the present, and I've become a lot more knowledgable about programming and even graduated with a certification in Web Development. I love this community due to how much you have to keep up with new material constantly coming out.</p>
         <p className=" font-bold text-white"> Currently looking for work in the Miami area (On-site or Remote). Always will be looking for an opportunity to advance my programming pursuits.  </p>
          
          
        </div>
        <button className=" group transition ease-in-out text-white  bg-blue-500 hover:translate-y-2 hover:scale-100 hover:bg-blue-400 duration-300 items-center  rounded-md flex px-6 py-2 font-semibold mt-6 "> 
      <Link  to="Projects"  smooth={true}  duration={500} >
          Take me to your Projects
        </Link>
       <span className=" group-hover:rotate-90">
       <TiChevronRight className=" ml-2"/>
       </span>
       </button>
      </div>
    
    <div data-aos="fade-up" data-aos-duration="1000" className=" text-white mx-auto max-w-[700px] w-full my-6 items-center rounded-md" >
      <div className="flex flex-col h-screen items-center"> 
      <h1 className=" font-bold py-4 border border-blue-700 px-6 bg-black rounded-sm">Here are my top skills and languages</h1>
     <div className="max-w-[650px] mt-6 w-full flex flex-col max-h-[650px] items-center border border-blue-700 bg-black rounded-md h-full">
           <div className="  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2 font-bold">HTML</h1>
        <div className="w-full  bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 w-full text-center text-xs leading-none text-white font-semibold">100%</div>
        </div>
      </div>

      <div className="  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2 font-medium ">CSS</h1>
        <div className="w-full bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 rounded-r w-3/4 text-center text-xs leading-none text-white font-semibold">75%</div>
        </div>
      </div>
      <div className="   mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">React.Js</h1>
        <div className="w-full bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 rounded-r w-4/5 text-center text-xs leading-none text-white font-semibold"> 80%</div>
        </div>
      </div>
      <div className="   mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">SQL</h1>
        <div className="w-full bg-gray-300 h-3 text-center"> 
          <div className="bg-blue-500 h-3 w-2/3 rounded-r text-center text-xs leading-none text-white font-semibold">66%
            
          </div>
        </div>
      </div>
      <div className="   mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">REDUX</h1>
        <div className="w-full bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 w-2/4 rounded-r text-center text-xs leading-none text-white font-semibold"> 50%</div>
        </div>
      </div>
      <div className="  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">MERN</h1>
        <div className="w-full bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 w-2/3  rounded-r text-center text-xs leading-none text-white font-semibold">66%</div>
        </div>
      </div>
      <div className="  mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">Express.js</h1>
        <div className="w-full bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 w-3/4 rounded-r text-center text-xs leading-none text-white font-semibold">75%</div>
        </div>
      </div>
      <div className="   mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">jQuery</h1>
            
        <div className="w-full bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 w-4/5 rounded-r text-center text-xs leading-none text-white font-semibold">80%</div>
          
        </div>
      </div>
      <div className="   mt-6 max-w-[500px] w-full items-center  ">
            <h1 className="mx-2">JavaScript</h1>
        <div className="w-full bg-gray-300 h-3">
          <div className="bg-blue-500 h-3 w-4/5 rounded-r text-center text-xs leading-none text-white font-semibold">80%</div>
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
