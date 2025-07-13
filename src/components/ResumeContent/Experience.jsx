import React from "react";
import { StyledSection, StyledList, StyledExpItem } from "./Content.styled";

const Experience = () => {
  return (
    <StyledSection className="profile-section profile-experience">
      <div className="profile-section-header">
        <h2 className="profile-section-title">Experience</h2>
      </div>
      <div className="profile-experience-list">
        <div className="profile-experience-item">
          <StyledExpItem className="profile-experience-item-header">
            <img
              className="profile-experience-logo"
              height={60}
              width={60}
              src="/bold-technologies.jpg"
              alt="Bold Technologies Logo"
            />
            <h3 className="profile-experience-role">
              Module Lead - Bold Technologies
              <span className="profile-experience-meta">Hybrid | Jan 2019 - Present</span>
            </h3>
          </StyledExpItem>
          <StyledList className="profile-experience-bullets">
            <li>Led design, development, and maintenance of application modules in an Agile environment</li>
            <li>Coded and debugged complex features with focus on performance</li>
            <li>Optimized accessibility and Core Web Vitals</li>
            <li>Reviewed code, mentored juniors, and documented specs</li>
          </StyledList>
        </div>
        <div className="profile-experience-item">
          <StyledExpItem className="profile-experience-item-header">
            <img
              className="profile-experience-logo"
              height={60}
              width={60}
              src="/wipro-technologies.svg"
              alt="Bold Technologies Logo"
            />
            <h3 className="profile-experience-role">
              Software Developer - Wipro Infotech
              <span className="profile-experience-meta">Onsite | Nov 2015 - Dec 2018</span>
            </h3>
          </StyledExpItem>
          <StyledList className="profile-experience-bullets">
            <li>Built C# microservices and MVC-based bot automation tools</li>
            <li>Managed SQL databases, wrote new features for enterprise tools</li>
            <li>Designed cross-platform apps with strong UX</li>
          </StyledList>
        </div>
      </div>
    </StyledSection>
  );
};

export default Experience;
