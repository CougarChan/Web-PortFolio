import React from "react";
import {FaLinkedin,FaGithub,FaMailBulk} from 'react-icons/fa'

const Footer = () => {
 
  return (
        <div className="bg-[#353CD4] py-4">
         <div className="text-center flex  justify-between  items-center ">
         <div className=" inline-flex ml-3"> <a className="mr-1" href="https://www.linkedin.com/in/german-lopez-/"><FaLinkedin size={35} color="White" /> </a> <a href="https://github.com/CougarChan"><FaGithub size={35} color="White"/></a> <a className="ml-1" href="mailto:techscapereality@gmail.com"><FaMailBulk size={35} color="White"/>
         </a> </div>
            <h1 className="ml-3 text-white font-medium absolute:center">Built and Designed by German Lopez</h1>
    
            <p className=" text-left "> </p>
         </div>

        </div>





  )



}



export default Footer