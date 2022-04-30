import React from "react";
import "./navbar.css";

export default function NavigationBar({
  currentPage,
  handlePageChange,
  mode,
  toggleTheme,
}) {
  return (
    <div className={`navBar navBar-${mode}`}>
      <h1>Tracye Wilhelm</h1>
      <div>
        <ul className={`navTabs navTabs-${mode}`}>
          <li className={`navItem navItem-${mode}`}>
            <a
              href="#profile"
              onClick={() => handlePageChange("Profile")}
              className={
                currentPage === "Profile" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li className={`navItem navItem-${mode}`}>
            <a
              href="#contact"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className={`navItem navItem-${mode}`}>
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li className={`navItem navItem-${mode}`}>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
