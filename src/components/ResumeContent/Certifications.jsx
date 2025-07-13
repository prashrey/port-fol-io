import React from "react";
import { StyledSection, StyledHighlightedList } from "./Content.styled";

const Certifications = () => {
  return (
    <StyledSection className="profile-section profile-certifications">
      <div className="profile-section-header">
        <h2 className="profile-section-title">Certifications</h2>
      </div>
      <StyledHighlightedList className="profile-certifications-list">
        <li className="profile-certification-item">
          <span className="profile-cert-name">Next.js Complete Guide</span> -
          <span className="profile-cert-source">Coursera</span>
          <span className="profile-cert-year">2025</span>
        </li>
        <li className="profile-certification-item">
          <span className="profile-cert-name">Version Control with Git</span> -
          <span className="profile-cert-source">Coursera</span>
          <span className="profile-cert-year">2020</span>
        </li>
        <li className="profile-certification-item">
          <span className="profile-cert-name">Visual Elements of User Interface Design</span> -
          <span className="profile-cert-source">Udemy</span>
          <span className="profile-cert-year">2020</span>
        </li>
      </StyledHighlightedList>
    </StyledSection>
  );
};

export default Certifications;
