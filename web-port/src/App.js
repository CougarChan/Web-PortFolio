import React from "react";
import Nav from "./Components/Navbar";
import About  from "./Components/About-Me"
import Project from "./Components/Projects";
import Contact from "./Components/contact";
import Footer from "./Components/Footer";


function App() {
   return (
    <div >
        
        <Nav />
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
        
    </div>



  );

    
  
};

export default App;
