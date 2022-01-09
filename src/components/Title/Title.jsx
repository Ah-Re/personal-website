import React from "react";
import Seattle from "../../images/darkened-seattle.png";
import Navbar from "./Navbar";
import "./Title.css";

function Title() {
  return (
    <section id="title">
      <div className="title">
        <Navbar />
        <div>
          <h1 className="title-message">
            Hey, I'm <span>Ahmet.</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Title;
