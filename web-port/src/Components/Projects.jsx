import React from "react";
import Logo from "../assets/portfolio.png"

const Project =() => {

 return(
    <div className=" bg-slate-600 md:h-screen w-full ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">

            <h1>These are the projects that i have worked on and completed</h1>



       <div id="contentId" style={{backgroundImage: `url(${Logo})`}}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          
          <div className="shadow-lg shadow-black group container rounded-md flex justify-center item-center mx-auto content-div">

           </div>
              <div>
                  <span>

                  </span>
               <div>
                     <a href="/">
                        <button></button>
                     </a>
                     <a href="/">
                        <button></button>
                     </a>



               </div>

              </div>



         </div>

      </div>





    </div>

 )


}





export default Project