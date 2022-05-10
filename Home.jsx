import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.jpg";
import Common from "./Common";

const Home= ()=>{
    return (
        <div>
        <Common  
        name= "Grow your business with" 
        imgsrc={web}
        visit="/service"
        btnname="Get Started"/>
            
        </div>
    );

};

export default Home;