import React, { useEffect, useState } from "react";
import "../styles/Menu.css";

const Menu = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [changeButtonPosition, setChangeButtonPosition] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // disable scroll when burger menu is active
  if(!isActive) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }

  // change position of menu
  useEffect(() => {
    const menuBtn = document.querySelector(".menu");
    console.log();
    const handleButtonPosition = () => {
      window.scrollY > 300
        ? setChangeButtonPosition(menuBtn.classList.add("fixed"))
        : setChangeButtonPosition(menuBtn.classList.remove("fixed"));
    };
    window.addEventListener("scroll", handleButtonPosition);
    return () => {
      window.removeEventListener("scroll", handleButtonPosition);
    };
  }, [changeButtonPosition]);

  // toggle visibility of menu
  useEffect(() => {
    const menuToggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");
    const indicator = document.getElementById("indicator");

    const handleMenuToggle = () => {
      menuToggle.classList.toggle("active");
      menu.classList.toggle("opacity");
      menu.classList.toggle("active");
    };
    menuToggle.addEventListener("click", handleMenuToggle);

    const list = document.querySelectorAll("li");
    const handleItemClick = (index) => {
      indicator.style.visibility = "visible";
      setActiveItem(index);
    };
    list.forEach((item, index) => {
      item.addEventListener("click", () => handleItemClick(index));
    });

    return () => {
      menuToggle.removeEventListener("click", handleMenuToggle);
      list.forEach((item, index) => {
        item.removeEventListener("click", () => handleItemClick(index));
      });
    };
  }, [activeItem]);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };
  const handleMenuItemClick = () => {
    setIsActive(false);
  }

  //allow overflow when over 768px width body scroll on mobile when the menu is active
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener('resize', updateDimension);

    if(screenSize > 768) {
      document.body.style.overflow = 'auto';
    }
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  return (
    <div className="menu-holder">
      <div className="menu-wrapper" id="menu-wrapper">
        <ul className="menu">
          <div className="toggle">
            <ion-icon name="add-outline"></ion-icon>
          </div>
          <li
            id="aboutMenu"
            style={{ "--i": 0 }}
            className={activeItem === 0 ? "active" : ""}
          >
            <a href="#about">
              <ion-icon name="person-outline"></ion-icon>
            </a>
          </li>
          <li
            id="skillsMenu"
            style={{ "--i": 1 }}
            className={activeItem === 1 ? "active" : ""}
          >
            <a href="#hero">
              <ion-icon name="code-working-outline"></ion-icon>
            </a>
          </li>
          <li
            id="projectsMenu"
            style={{ "--i": 2 }}
            className={activeItem === 2 ? "active" : ""}
          >
            <a href="#contact">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </li>
          <li
            id="contactMenu"
            style={{ "--i": 3 }}
            className={activeItem === 3 ? "active" : ""}
          >
            <a href="#projects">
              <ion-icon name="hammer-outline"></ion-icon>
            </a>
          </li>
          <div className="indicator" id="indicator"></div>
        </ul>
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleHamburgerClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`hamburgerMenu ${isActive ? 'active' : ''}`}>
          <ul>
            <li className="nav-item">
              <a href="." className="nav-link" onClick={handleMenuItemClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={handleMenuItemClick}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={handleMenuItemClick}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={handleMenuItemClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
