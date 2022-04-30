import React from "react";
import "./resume.css";
import resume from "./Resume-TracyeWilhelm.pdf";

export default function Resume({ mode, toggleTheme }) {
  return (
    <div
      className={`resumeCard ${mode}
`}
    >
      <div>
        <h2>Resume and Proficiencies</h2>
      </div>
      <div className={`resumeBtnCard textCard-${mode}`}>
        {/* <img id="resume" src={resume} /> */}
        <div>
          <button className="downloadBtn">
            <a href={resume} target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </button>
        </div>
        <div className="skills">
          <div className="skillCard">
            <ul className="languages textBox">
              <h4>Languages:</h4>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="skillCard">
            <ul className="tools  textBox">
              <h4>Tools:</h4>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
              <li>GraphQL</li>
              <li>MySQL</li>
              <li>Tableau</li>
            </ul>
          </div>
          <div className="skillCard">
            <ul className="applications  textBox">
              <h4>Applications:</h4>
              <li>GitHub</li>
              <li>Heroku</li>
              <li>Tableau</li>
              <li>Mongo Compass</li>
              <li>Insomnia</li>
              <li>MySQL</li>
              <li>Apollo Sandbox</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
