import React from "react";
import Seattle from "../../images/darkened-seattle.png";
import Navbar from "./Navbar";
import "./Title.css";


function Title() {

    

    return (
        <section id="title">
        <div className="title">
            <Navbar />
            <h1 className="title-message" >hey, I'm <span>Ahmet</span></h1>
        </div>
        </section>
    )
}

export default Title;