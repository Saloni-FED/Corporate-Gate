import React from "react";
import Sidebar from "../components/Analyze/Sidebar";
import Header from "../components/Analyze/Header";
import ResumeList from "../components/Analyze/ResumeList";
const analyze = () => {
  return (
    <div className="custom-app">
      <Sidebar />
      <div className="custom-main-content">
        <Header />
        <ResumeList />
      </div>
    </div>
  );
};

export default analyze;
