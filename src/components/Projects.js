import React from "react";
import "../styles/Projects.css";
import MojaSapicaPng from "../images/mojasapicasajt.png";
import StefanmilicportofolioPng from "../images/stefanmilicportfolio.png";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const mojaSapica = 
    {
      imageSrc: MojaSapicaPng,
      imageAlt: "Moja Sapica website image",
      name: "Moja Sapica",
      text: 'Fully designed static website, created using React.JS with responsive UI design',
      webHref: 'https://mojasapica.netlify.app/',
      gitHref: 'https://github.com/stefanmilic017/mojasapica'
    }
  ;
  const portfolio = 
    {
      imageSrc: StefanmilicportofolioPng,
      imageAlt: "Portfolio website image",
      name: "My personal portfolio",
      text: 'Website created with React.JS and custom CSS',
      webHref: '#',
      gitHref: 'https://github.com/stefanmilic017/stefanmilic017-portfolio'
    }
  ;
  const mojaSapicaShop = 
    {
      imageSrc: MojaSapicaPng,
      imageAlt: "Moja Sapica shop",
      name: "Moja Sapica shop",
      text: 'Available soon.',
      webHref: '#',
      gitHref: '#'
    }
  ;

  return (
    <div id="projects" className="projects">
      <h1 className="header">My Projects</h1>
      <div className="cardContainer">
        <ProjectsCard
          imageSrc= {MojaSapicaPng}
          imageAlt={mojaSapica.imageAlt}
          name={mojaSapica.name}
          text={mojaSapica.text}
          webHref={mojaSapica.webHref}
          gitHref={mojaSapica.gitHref}
        />
        <ProjectsCard
          imageSrc= {StefanmilicportofolioPng}
          imageAlt={portfolio.imageAlt}
          name={portfolio.name}
          text={portfolio.text}
          webHref={portfolio.webHref}
          gitHref={portfolio.gitHref}
        />
        <ProjectsCard
          imageSrc= {MojaSapicaPng}
          imageAlt={mojaSapicaShop.imageAlt}
          name={mojaSapicaShop.name}
          text={mojaSapicaShop.text}
          webHref={mojaSapicaShop.webHref}
          gitHref={mojaSapicaShop.gitHref}
        />
      </div>
    </div>
  );
};

export default Projects;
