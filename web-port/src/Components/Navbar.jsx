import React, {useState} from "react";
import { GoGrabber, GoX } from "react-icons/go";
import {Link} from 'react-scroll'
import Picture from "../assets/German López (1).png";



const Nav = () => {
   
   const  [set, setTime] =useState(false);
      
   const handleClick = () => {
    setTime(!set);
   };
   
   return (
     
      
    <div className=" flex mx-auto px-4 bg-[#6b77c0]  justify-between items-center text-gray-50 h-28 " >
         <div > <img src= {Picture} alt="Hello" style={{width: '160px'}} />
         </div>
         
           <ul className="hidden md:flex font-extralight text-2xl ">
              <li className="p-6 border-r hover:scale-110 transition ease-in-out duration-300 "><Link  to="About-Me"  smooth={true}  duration={500} >
          About Me
        </Link></li>
              <li className="p-6 border-r hover:scale-110 transition ease-in-out duration-300"> <Link  to="Projects"  smooth={true}  duration={500} >
          Projects
        </Link></li>
              <li className="p-6  hover:scale-110 transition ease-in-out duration-300"><Link  to="Contact"  smooth={true}  duration={500} >
          Contact Me!
        </Link></li>
           </ul>
    
          <div onClick={handleClick} className= "block md:hidden">
           {set ? <GoX size={30}/> :<GoGrabber size={30}/>}
          </div>
            
            <ul className={ set ? " fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900  bg-black ease-in-out  duration-500 " :" ease-in-out duration-500 fixed left-[-100%] top-0"}>
              <h2 className="  text-3xl font-bold underline m-5"> German Lopez </h2>
              <li className="p-5 border-b "><Link onClick={handleClick} to="About-Me"  smooth={true}  duration={500} >
          About Me</Link></li>
              <li className="p-5 border-b "><Link onClick={handleClick} to="Projects"  smooth={true}  duration={500} >
          Projects
        </Link></li>
              <li className="p-5 border-b "><Link onClick={handleClick} to="Contact"  smooth={true}  duration={500} >
          Contact Me!
        </Link></li>
           </ul>
            
         
    </div>

   
   );
};


export default Nav