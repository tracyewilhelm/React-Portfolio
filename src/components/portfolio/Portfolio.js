import React from "react";
import aboutMe from "../../Assets/aboutMe.jpg";
import CSScheat from "../../Assets/CSS-Cheat.png";
import JavaScriptQuiz from "../../Assets/JavaScriptQuiz.png";
import MtnMadness from "../../Assets/MtnMadness.jpg";
import PantryChefImg from "../../Assets/PantryChefImg.png";
import weatherTracker from "../../Assets/weatherTracker.png";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolioContainer">
      <h2 id="portfolio">Portfolio</h2>
      <section className="infoCard">
        <div className="aboutMe">
          <div>
            <a
              href={"https://tracyewilhelm.github.io/prework-about-me/"}
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="aboutMeImg"
                src={aboutMe}
                alt="child's hand with blue paint"
              />
              <p>About Me</p>
            </a>
            <p>A quick snippet about me</p>
          </div>
        </div>

        <div className="weatherTracker">
          <div>
            <a
              href="  https://tracyewilhelm.github.io/weather-tracker/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="weatherTrackerImg"
                src={weatherTracker}
                alt="black rectangle with blue words CSS Cheat Sheet"
              />
              <p>Weather Tracker</p>
            </a>
            <p>A way to see the 5-day weather forecast of almost any city</p>

            <p>
              <a
                href="https://github.com/tracyewilhelm/weather-tracker"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Link: Weather Tracker
              </a>
            </p>
          </div>
        </div>

        <div className="MtnMadness">
          <div>
            <a
              href="https://paterma.github.io/Bug-Spray/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="MtnMadnessImg"
                src={MtnMadness}
                alt="mountain with snow"
              />
              <p>Mountain Madness</p>
            </a>

            <p>
              Mountain Magic - a mobile-first app that provides a user with
              weather and traffic information to local ski resorts using
              JavaScript, Bootstrap, Web API, two 3rd party APIs, Waze mapping
              features, and more.
            </p>

            <p>
              <a
                href="https://github.com/Paterma/Bug-Spray"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Link: paterma/BugSpray
              </a>
            </p>
          </div>
        </div>

        <div className="JavaScriptQuiz">
          <div>
            <a
              href="https://tracyewilhelm.github.io/Javascript-Quiz/"
              target="_blank"
              rel="noreferrer"
            >
              <img id="JSquiz" src={JavaScriptQuiz} alt="Javascript-Quiz" />

              <p>JavaScript Quiz</p>
            </a>
            <p>A true/false quiz to test your JavaScript knowledge.</p>
            <p>
              <a
                href="https://github.com/tracyewilhelm/Javascript-Quiz"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Link: JavaScript Quiz
              </a>
            </p>
          </div>
        </div>

        <div className="PantryChef">
          <div>
            <a
              href="https://awesome-pantry-chef.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <img id="PChefImg" src={PantryChefImg} alt="Pantry Chef Logo" />
              <p>Pantry Chef</p>
            </a>
            <p>
              A full-stack mobile-first web app that allows a user to check mark
              items in their pantry and see recipes based on their selection.
              Allows a user to see their favorite recipes by storing user info
              and saved recipe ID to a remote database. Technology used includes
              Bootstrap, Handlebars, Node, JavaScript, JSON, MySql, bcrypt,
              Express, Sequelize, and 3rd Party API calls.
            </p>
            <p>
              <a
                href="https://github.com/tracyewilhelm/Pantry_Chef"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Link: Pantry Chef
              </a>
            </p>
          </div>
        </div>

        {/* <div className="">Future Project</div>
          <div className="">Future Project</div>
          <div className="">Future Project</div> */}
      </section>
    </div>
  );
}
