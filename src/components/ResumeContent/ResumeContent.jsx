import React from "react";
// import "./ProfileResume.css";
import { StyledContent } from "./Content.styled";
import Summary from "./Summary";
import Experience from "./Experience";
import Certifications from "./Certifications";

export default function ResumeContent() {
  return (
    <StyledContent className="profile-main">
      {/* Header Section */}
      {/* <section className="profile-header-section">
        <h1 className="profile-title">[Full Name]</h1>
        <p className="profile-role">Full Stack Developer • 9 Years Experience</p>
      </section> */}
      {/* Experience */}
      <Experience />
      {/* Summary */}
      <Summary />
      {/* Certifications */}
      <Certifications />
      {/* Education */}
      <section className="profile-education-section">
        <h2 className="profile-section-title">Education</h2>
        <p className="profile-education-text">
          B.Tech in Computer Science – Krishna Engineering College, Ghaziabad (2011 – 2015)
        </p>
      </section>
    </StyledContent>
  );
}
