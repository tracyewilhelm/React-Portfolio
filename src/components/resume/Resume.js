import React from "react";
import "./resume.css";
import resume from "./Resume-TracyeWilhelm.pdf";

export default function Resume() {
  return (
    <div className="resumeCard">
      <div>
        <h2>Resume</h2>
      </div>
      <div>
        {/* <img id="resume" src={resume} /> */}
        <button class="downloadBtn">
          <a href={resume} target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
}
