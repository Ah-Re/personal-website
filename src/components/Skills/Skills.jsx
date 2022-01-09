import React, { useEffect } from 'react';
import "./Skills.css";
import Aos from "aos";
import "aos/dist/aos.css";


const Skills = () => {

    useEffect(() => {
        Aos.init({duration: 2000, once: true})
    }, []
)

    return (
        <section id="skills">
        <div className="skills-section">
            <h1 data-aos="fade-up">Skills</h1>
            <div className="skills-wrapper" data-aos="fade-up">
            <div>
            <h2>Languages</h2>
            <p>Javascript</p>
            <p>Java</p>
            <p>SQL</p>
            <p>HTML</p>
            <p>CSS</p>
            </div>
            <div>
            <h2>Frameworks</h2>
            <p>React</p>
            <p>Angular</p>
            <p>Node</p>
            <p>Express</p>
            <p>Spring Boot</p>
            </div>
            <div>
            <h2>Tools</h2>
            <p>MongoDB</p>
            <p>Firebase</p>
            <p>Maven</p>
            <p>Git & Github</p>
            <p>Chrome DevTools</p>
            <p>Postman</p>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Skills
