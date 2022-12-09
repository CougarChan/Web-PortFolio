import React from "react";
import { useState} from "react";



const Contact =() => {
    const[active, setActive] = useState(false);
    const handleClick = () => {

        setActive(!active)
    };

   return(
      <div className="w-full h-screen flex justify-center items-center bg-slate-500 p-4">
        <form action="" className="flex flex-col max-w-[700px] w-full">
            <div className='p-8'>

             <p></p>
             <p></p>   




            </div>

            <input type="text" placeholder="Your Name Goes Here" />
            <input  type="text" placeholder="Email goes here." className=" border-red-50" />
            <textarea className=" bg-gray-400 p-2" name="message" cols='30' rows='10' placeholder="Message"/>
            <button onClick={handleClick} 
            className=" transition ease-in-out bg-black text-white mx-auto my-4 flex item-center px-5 py-2 rounded-md  hover:bg-slate-600 hover:scale-110 duration-20">{active ? "Thank You!": "Send"}</button>
        













        </form>



















      </div>




   )






}


export default Contact