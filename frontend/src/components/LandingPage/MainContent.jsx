
// MainContent.jsx
import React from "react";
import Header from "../Header.jsx"; // adjust path if needed
import Navbar from "../Navbar.jsx"; // adjust path if needed
import UploadSection from "./UploadSection.jsx";
import CarouselInfo from "./CarouselInfo.jsx";
import NoticeBoard from "./NoticeBoard.jsx";

const MainContent = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload(); // optional: reload to update UI after logout
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      {/* Landing Page Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex-grow">
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  <div className="md:col-span-1">
    <UploadSection />
  </div>
  <div className="md:col-span-2">
    <CarouselInfo />
  </div>
  <div className="md:col-span-1">
    <NoticeBoard />
  </div>
</div>

      </div>
    </div>
  );
};

export default MainContent;
