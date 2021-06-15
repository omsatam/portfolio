import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="footer__icons">
        <a href="https://github.com/omsatam" target="_blank" rel="noreferrer">
          <GitHubIcon className="footer__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/om-satam-6106a4196"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className="footer__icon" />
        </a>
        <a
          href="https://www.facebook.com/om.satam.79"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon className="footer__icon" />
        </a>
        <a
          href="https://instagram.com/om.satam_473"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon className="footer__icon" />
        </a>
      </div>
      <div className="footer__text">OMSATAM &#169;2021</div>
    </div>
  );
}

export default Footer;
