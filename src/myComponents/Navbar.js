import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
// import { BrowserRouter as Router } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  const [show, handleShow] = useState(false);
  const navs = document.getElementsByClassName("nav-item");
  // const menuIcon = document.getElementsByClassName("navbar__menu");
  // console.log(menuIcon);

  // console.log(navs);
  const showMenu = () => {
    for (let i = 0; i < navs.length; i++) {
      navs[i].classList.toggle("navitem__hide");
    }
  };
  // console.log(window.screen.width);
  useEffect(() => {
    for (let i = 0; i < navs.length; i++) {
      if (window.screen.width < parseInt(700)) {
        navs[i].addEventListener("click", showMenu);
      }
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  return (
    <>
      <div id="navbar" className={`navbar__row ${show && "navbar_background"}`}>
        <MenuIcon
          onClick={showMenu}
          id="navbar__menu"
          className="navbar__menu"
          fontSize="large"
        />
        <li className="nav-item">
          <Link
            activeClass="active"
            to="home"
            offset={-80}
            spy={true}
            smooth={true}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            spy={true}
            to="about"
            offset={-80}
            smooth={true}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            spy={true}
            to="projects"
            offset={-80}
            smooth={true}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            offset={-80}
            smooth={true}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item navitem__hide">
          <Link to="home" spy={true} smooth={true}>
            Portfolio
          </Link>
        </li>
      </div>
    </>
  );
}

export default Navbar;
