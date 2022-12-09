import React from "react";
import Nav from "./Components/Navbar";
import About  from "./Components/About-Me"
import Starter from "./Components/Starter";
import Project from "./Components/Projects";
import Contact from "./Components/contact";


function App() {
   return (
    <div >
        <Starter/>
        <Nav  />
        <About />
        <Project/>
        <Contact/>
        
    </div>



  );

    
  
};

export default App;
