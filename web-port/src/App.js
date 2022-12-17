import React from "react";
import Nav from "./Components/Navbar";
import About  from "./Components/About-Me"
import Project from "./Components/Projects";
import Contact from "./Components/contact";
import Footer from "./Components/Footer";
import Starter from "./Components/Starter";

function App() {
   return (
    <div >
        <Starter/>
        <Nav />
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
        
    </div>



  );

    
  
};

export default App;
