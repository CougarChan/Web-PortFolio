import React, {useState} from "react";
import { GoGrabber, GoX } from "react-icons/go";




const Nav = () => {
   
   const  [set, setTime] =useState(false);
      
   const handleClick = () => {
    setTime(!set);
   };
   
   return (
     
      <div className="sticky top-0">
    <div className=" flex mx-auto px-4 bg-[#1a5280]  justify-between items-center text-gray-50 h-28 " >
         <h2 className=" text-3xl font-bold p-3 "> German Lopez 
        </h2>
           <ul className="hidden md:flex font-extralight text-2xl ">
              <li className="p-6 border-r ">About Me</li>
              <li className="p-6 border-r   ">  Projects</li>
              <li className="p-6 ">Contact Me!</li>
           </ul>
    
          <div onClick={handleClick} className= "block md:hidden">
           {set ? <GoX size={30}/> :<GoGrabber size={30}/>}
          </div>
            
            <ul className={ set ? " fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900  bg-black ease-in-out  duration-500 " :" ease-in-out duration-500 fixed left-[-100%] top-0"}>
              <h2 className="  text-3xl font-bold underline m-5"> German Lopez </h2>
              <li className="p-5 border-b ">About Me</li>
              <li className="p-5 border-b ">Projects</li>
              <li className="p-5 border-b ">Contact Me!</li>
           </ul>
            
         
    </div>

   </div>
   );
};


export default Nav