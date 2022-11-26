import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Angelo</h2>
        <div className="prompt">
          <p>A software developer with a pasion for learning and creating.</p>
          <div className="prompt-holder">
            <div className="prompt-icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/angelo-chaknis-866857238/"
              >
                <LinkedInIcon />
              </a>
            </div>
            <div className="prompt-icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AngeloTree"
              >
                <GitHubIcon />
              </a>
            </div>
            <div className="prompt-icon">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/palmsci"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End </h2>
            <span>ReactJS, HTML, CSS, BootStrap, MaterialUI, NPM, Flexbox</span>
          </li>
          <li className="item">
            <h2> Back-End </h2>
            <span>NodeJS, MySQL, SQL, ExpressJS, AWS</span>
          </li>
          <li className="item">
            <h2> Languages </h2>
            <span>JavaScript, Python, Lua, C#</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
