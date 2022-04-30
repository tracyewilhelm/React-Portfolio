import React, { useState } from "react";
import NavigationBar from "./navbar";
import Profile from "./components/profile/Profile.js";
import Portfolio from "./components/portfolio/Portfolio.js";
import Contact from "./components/contact/Contact.js";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer";

export default function PortfolioContainer({ mode, toggleTheme }) {
  const [currentPage, setCurrentPage] = useState("Profile");

  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio mode={mode} toggleTheme={toggleTheme} />;
    }
    if (currentPage === "Contact") {
      return <Contact mode={mode} toggleTheme={toggleTheme} />;
    }
    if (currentPage === "Resume") {
      return <Resume mode={mode} toggleTheme={toggleTheme} />;
    }
    return <Profile mode={mode} toggleTheme={toggleTheme} />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
        <NavigationBar
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          mode={mode}
          toggleTheme={toggleTheme}
        />

        {renderPage()}
      </div>
      <div>
        <Footer mode={mode} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}
