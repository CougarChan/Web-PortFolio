import React from "react";
import {TiChevronRight} from "react-icons/ti"

const About = () => {

  return (
  <div  id= "About"  className="text-white w-full h-screen ">

    <div className=" bg-black  h-full  mx-auto px-8 text-center  flex flex-col justify-center">

         <h1>About Me</h1>
         <h2>My name is German Lopez</h2>
         <p>Welcome to my Portfolio! I am a full-stack developer who specalize in a building applications, currently I am working with websites utililziing fullstack. Also Ive worked in building applications and using different frameworks. Thank you! Enjoy your time! </p>

         <div>
      <button className="">Take me to your projects <TiChevronRight/></button>
    </div>
    </div>
    




  </div>
 

  )



}
export default About;
