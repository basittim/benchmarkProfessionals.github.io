import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Navebar from "./Navebar";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import { Route, Routes, Navigate} from "react-router-dom";


const App = () => {
    return (
        <div>
        <Navebar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/service" element={<Service />} /> 
            {/* <Navigate to ="/" />  */}
        </Routes>
        
  
            
        </div>
    );
    
};

export default App;