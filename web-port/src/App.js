import React from "react";
import Nav from "./Components/Navbar";
import About  from "./Components/About-Me"
import Starter from "./Components/Starter";


function App() {
   return (
    <div className=" overflow-y-hidden ">
        <Starter/>
        <Nav  />
        <About />
        
    </div>



  );

    
  
};

export default App;
