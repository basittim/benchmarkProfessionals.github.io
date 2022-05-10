import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img3.jpg";
import Common from "./Common";


const About= ()=>{
    return (
        <div>
        <Common
         name= "Welcome to About page" 
         imgsrc={web} visit="/contact"
         btnname="Contact Now"/>
            
        </div>
    );

};

export default About;