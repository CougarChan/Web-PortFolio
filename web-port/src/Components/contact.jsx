import React from "react";
import { useState} from "react";



const Contact =() => {
    const[active, setActive] = useState(false);
    const handleClick = () => {

        setActive(!active)
    };

   return(
      <div name="Contact" className="w-full h-screen flex justify-center items-center bg-[#0a192f] p-4">
        <form action="https://getform.io/f/5ec733f2-319d-4730-be5d-d8995c956088" method="POST" className="flex flex-col max-w-[700px] w-full">
            <div className='pb-5'>

             <p className="text-white text-5xl mb-6 font-bold pb-1  text-center "> Contact</p>
             <p className=" text-white font-medium border-b-4 text-center">If you wish to pursue further business with me, Send me a message with your email. Have a wonderful day!</p>   




            </div>

            <input type="text" placeholder="Your Name" className="px-2 py-1 " name="Name" />
            <input  type="Email" placeholder="Email goes here." className=" my-3 px-2 py-1" name="Email" />
            <textarea className=" resize-none bg-white p-2" name="message" cols='30' rows='10' placeholder="Message..."/>
            <button onClick={handleClick} 
            className=" transition ease-in-out bg-blue-600 text-white mx-auto my-4 flex item-center px-5 py-2 rounded-md  hover:bg-slate-600 hover:scale-110 duration-20 ">{active ? "Thank You!": "Send"}</button>
        













        </form>



















      </div>




   )






}


export default Contact