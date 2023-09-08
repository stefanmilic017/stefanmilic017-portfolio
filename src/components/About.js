import React, { useEffect } from "react";
import "../styles/About.css";

const About = () => {

  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    const cur = document.querySelector('.cur');
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('codeText');
        cur.classList.add('cursor')
      } else {
        entry.target.classList.remove('codeText');
        cur.classList.remove('cursor');
      }
    });
  });
    const hiddenElements = document.querySelectorAll(".codeText");
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <div id="about" className="about">
      <h1 className="header">About Me</h1>
    
      <div data-line-nr="1" className="code">
        <div className="codeText">
          <span className="declaration">const</span>
          <span className="variable"> name</span>
          <span> = </span>
          <span className="string"> "Stefan Milić"</span>
          <span>&#59;</span>
        </div>
      </div>
      <div data-line-nr="2" className="code">
        <div className="codeText code-2">
          <span className="declaration">let</span>
          <span className="variable"> education</span>
          <span> = &#91;</span>
          <span className="string">
            {" "}
            "Master's degree of Technics and Informatics - Pedagogical Faculty
            in Vranje" , "Computer professional - Technical School in Vranje"
          </span>
          <span> &#93;&#59;</span>
        </div>
      </div>
      <div data-line-nr="3" className="code">
        <div className="codeText code-3">
          <span className="declaration">let</span>
          <span className="variable"> email</span>
          <span> = </span>
          <span className="string"> "stefanmilic017@gmail.com"</span>
          <span>&#59;</span>
        </div>
      </div>
      <div data-line-nr="4" className="code">
        <div className="codeText code-4">
          <span className="declaration">let</span>
          <span className="variable"> currentGoal</span>
          <span> = </span>
          <span className="string">
            {" "}
            "To start a job/professional career as a Web Developer"
          </span>
          <span>&#59;</span>
        </div>
      </div>
      <div data-line-nr="5" className="code">
        <div className="codeText code-5">
          <span className="declaration">let</span>
          <span className="variable"> skills </span>
          <span>= &#91; </span>
          <span className="string">
            "React.JS" , "HTML" , "CSS" , "JavaScript" , "Git" , "Node.js"
          </span>
          <span className="cursor cur"></span>
          <span>&#93;&#59;</span>
        </div>
      </div>
    
      
      <div className="btn-download">
        <a
          className="btn"
          href="resume/StefanMilicCV.pdf"
          download="Stefan Milic CV"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
