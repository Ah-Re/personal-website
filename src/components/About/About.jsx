import React, { useEffect } from 'react';
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {

    useEffect(() => {
        Aos.init({duration: 2000, once: true})
    }, []
)
    return (
        <section id="about">
        <div className="about-section" >
        <h1 className="subtitle" data-aos="fade-up">About</h1>
        <p className="description" data-aos="fade-up">I started my programming journey at DePaul University 
        where I studied Computer Science before working as a 
        Java developer for a Fortune 500 company. My experience has led me to working with various technologies
        spanning the full stack. I'm currently looking for a software development position, where I can further my knowledge
        and assist in creating great products.
        <br></br>
        <br></br>

        Outside of coding, I like to run marathons, grind Rocket League and Fifa, and
        keep up with all things Chicago Bulls and Tottenham Hotspurs.
        
        </p>
        
        </div>
        </section>
        
    )
}

export default About;