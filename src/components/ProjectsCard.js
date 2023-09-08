import React, { useEffect } from "react";

const ProjectsCard = ({imageSrc, imageAlt, name, text, webHref, gitHref}) => {


  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show')
      }
      else {
        entry.target.classList.remove('show');
      }
    })
  })
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  },[])
  
  return (
    <div className="projectCard hidden">
      <div className="imageWrapper">
        <img
          src={imageSrc}
          width="470"
          height="237"
          alt={imageAlt}
        />
      </div>
      <div className="contentWrapper">
        <h2>{name}</h2>
        <p>
          {text}
        </p>
        <div className="projectLinks">
          <a href={webHref} target="_blank" rel="noreferrer">
            visit website
          </a>
          <a
            href={gitHref}
            target="_blank" rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
