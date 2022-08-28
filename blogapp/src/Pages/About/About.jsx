import React from 'react';
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about">
        <h1 className="aboutTitle">About Me</h1>
        <h4 className="aboutDesc">
          Hello! I Am{" "}
          <span style={{ color: "purple", fontSize: "25px" }}> Ajaj Ahmad</span>
          .
        </h4>
        <h4 className="aboutDesc">I Created this website.</h4>
        <h4 className="aboutDesc">I am a web developer.</h4>
        <h4 className="aboutDesc">I am currently in NIT Agartala</h4>
        <h4 className="aboutDesc">
          currently pursuing BTech with CSE as major.
        </h4>
        <h4 className="aboutDesc warning">This website is still under construction...</h4>
      </div>
    </>
  );
}
