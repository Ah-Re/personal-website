import React, { useEffect } from 'react';
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {

    useEffect(() => {
        Aos.init({duration: 2000, once: true})
    }, []
)

    return (
        <section id="contact">
        <div className="contact-section">
            <h1 data-aos="fade-up">contact</h1>
            <a href="mailto:reiza6@gmail.com" data-aos="fade-up"><button>Say Hello</button></a>
        </div>
        </section>
    )
}

export default Contact;
