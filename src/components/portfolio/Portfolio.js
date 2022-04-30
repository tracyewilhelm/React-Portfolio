import React from "react";
import aboutMe from "../../Assets/aboutMe.jpg";

import JavaScriptQuiz from "../../Assets/JavaScriptQuiz.png";
import MtnMadness from "../../Assets/MtnMadness.jpg";
import PantryChefImg from "../../Assets/PantryChefImg.png";
import weatherTracker from "../../Assets/weatherTracker.png";
import dayPlanner from "../../Assets/DayPlanner.png";
import CacheBandit from "../../Assets/CacheBandit.png";
import "./portfolio.css";

export default function Portfolio({ mode, toggleTheme }) {
  return (
    <div className={`portfolioContainer ${mode}`}>
      <h2 id="portfolio">Portfolio</h2>
      <section className={`infoCard textCard-${mode}`}>
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

        <div className="CacheBandit">
          <div>
            <a
              href="https://cache-bandit.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img id="CacheBandit" src={CacheBandit} alt="Cache Bandit Logo" />
              <p>Cache Bandit</p>
            </a>
            <p>
              A full-stack, mobile-first web app that allows a user to monitor
              their monthly and annual subscriptions. Allows a user to enter
              data about all of their subscriptions so they can see it all in
              one location, including monthly cost, due date, and the ability to
              edit or delete individual subscriptions.
            </p>
            <p>
              <a
                href="https://github.com/alexgeis/Subscription-Tracker"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Link: Cache Bandit
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
        <div>
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

        <div className="DayPlanner">
          <div>
            <a
              href="https://tracyewilhelm.github.io/Daily-Planner/"
              target="_blank"
              rel="noreferrer"
            >
              <img id="dayPlanner" src={dayPlanner} alt="Day planner title" />
              <p>Work Day Scheduler</p>
            </a>
            <p>A simple calendar app that allows you to schedule your day.</p>
            <p>
              <a
                href="https://github.com/tracyewilhelm/Daily-Planner"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Link: Daily-Planner
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
