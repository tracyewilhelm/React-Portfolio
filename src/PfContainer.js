import React, { useState } from "react";
import NavigationBar from "./navbar";
import Profile from "./components/profile/Profile.js";
import Portfolio from "./components/portfolio/Portfolio.js";
import Contact from "./components/contact/Contact.js";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Profile");

  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Profile />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
        <NavigationBar
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />

        {renderPage()}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
