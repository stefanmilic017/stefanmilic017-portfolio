import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div>
        <h1 className="header">Contact Me</h1>
      <div className="contactLinks">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/stefanmilic017">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5 3c0 1.062-0.71 1.976-2.001 1.976-1.215 0-1.999-0.862-1.999-1.924 0-1.090 0.76-2.052 2-2.052s1.976 0.91 2 2zM1 19v-13h4v13h-4z"></path>{" "}
            <path d="M7 10.444c0-1.545-0.051-2.836-0.102-3.951h3.594l0.178 1.723h0.076c0.506-0.811 1.746-2 3.822-2 2.532 0 4.432 1.695 4.432 5.342v7.442h-4v-6.861c0-1.594-0.607-2.81-2-2.81-1.062 0-1.594 0.86-1.873 1.569-0.102 0.254-0.127 0.608-0.127 0.963v7.139h-4v-8.556z"></path>
          </svg>
          linkedin.com/in/stefanmilic017
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/stefanmilic017">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
          </svg>
          github.com/stefanmilic017
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:stefanmilic017@gmail.com">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M18 6v7c0 1.1-0.9 2-2 2h-4v3l-4-3h-4c-1.101 0-2-0.9-2-2v-7c0-1.1 0.899-2 2-2h12c1.1 0 2 0.9 2 2z"></path>
          </svg>
          stefanmilic017@gmail.com
        </a>
      </div>
      </div>
      
      <div className="footer">© 2023 designed by stefanmilic017</div>
    </div>
  );
};

export default Contact;
