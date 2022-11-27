import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a target="_blank" rel="noreferrer" href="https://twitter.com/palmsci">
          <TwitterIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/angelo-chaknis-866857238/"
        >
          <LinkedInIcon />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/AngeloTree"
        >
          <GitHubIcon />
        </a>
      </div>
      <p> &copy; 2022 angelochaknis.com</p>
    </div>
  );
};

export default Footer;
