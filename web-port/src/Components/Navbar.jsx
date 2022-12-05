import React from "react";
import { GoGrabber, GoX } from "react-icons/go";
import { useState } from "react";



const Nav = () => {
   const  [set, setTime] =useState(false)
   const handleClick = () => setTime(!set)
   return (
    <div className=" flex mx-auto px-4 bg-[#000]  justify-between items-center text-gray-50 h-28" >
         <h2 className=" text-3xl font-bold underline "> German Lopez 
        </h2>
           <ul className="hidden md:flex ">
              <li className="p-6  ">About Me</li>
              <li className="p-6">  Projects</li>
              <li className="p-6 ">Contact Me!</li>
           </ul>
    
          <div onClick={handleClick} className= "block md:hidden">
           {!set ? <GoGrabber size={30}/> : <GoX size={30}/>}
          </div>
            
            <div className={ !set ?  "fixed left-0 top-0 w-[50%]  h-full border-r border-r-gray-900  bg-black ease-in-out  duration-300" :"fixed left-[-100%]"}>
            <h2 className="  text-3xl font-bold underline m-5"> German Lopez </h2>
            <ul className=" uppercase p-4 ">
              <li className="p-5 border-b ">About Me</li>
              <li className="p-5 border-b ">Projects</li>
              <li className="p-5 border-b ">Contact Me!</li>
           </ul>
            </div>

        
         
    </div>
   )
}


export default Nav