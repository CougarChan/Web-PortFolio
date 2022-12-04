import React from "react";
import { GoGrabber } from "react-icons/go";
import { useState } from "react";



const Nav = () => {
   const  [set, setTime] =useState(false)
   const handleClick = () => setTime(!set)
   return (
    <div className="fixed w-full bg-[#000] flex justify-between items-center px-5 text-gray-50 h-24" >
         <h2 className="text-3xl font-bold underline"> German Lopez 
        </h2>
        
           <ul className="hidden md:flex">
              <li>About Me</li>
              <li>Projects</li>
              <li>Contact Me!</li>
           </ul>
    
          <div onClick={handleClick} className="md-hidden z-10 cursor-pointer">
            <GoGrabber />
          </div>

            <ul className={!set ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center '}>
              <li className="py-6 text-3xl">About Me</li>
              <li className="py-6 text-3xl">Projects</li>
              <li className="py-6 text-3xl">Contact Me!</li>
           </ul>
    

        
         
    </div>
   )
}


export default Nav