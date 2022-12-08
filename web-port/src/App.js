import React from "react";
import Nav from "./Components/Navbar";
import About  from "./Components/About-Me"
import Starter from "./Components/Starter";
import Project from "./Components/Projects";


function App() {
   return (
    <div >
        <Starter/>
        <Nav  />
        <About />
        <Project/>
        
    </div>



  );

    
  
};

export default App;
