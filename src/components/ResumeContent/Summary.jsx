import React from "react";
import { StyledSection } from "./Content.styled";

const Summary = () => {
  return (
    <StyledSection className="profile-section profile-summary">
      <div className="profile-section-header">
        <h2 className="profile-section-title">Summary</h2>
      </div>
      <div className="profile-section-content">
        <p className="profile-section-text">
          Versatile software developer with <strong>9 years of experience</strong> building scalable, high-performance
          web applications. Initially focused on frontend development, now actively transitioning into full stack
          development with practical skills in <strong> React, Next.js, Redux</strong>, and growing backend expertise in
          <strong>Node.js</strong> and <strong> Express.js</strong>. Strong advocate for <strong>accessibility </strong>
          and <strong> Core Web Vitals optimization</strong>. Proven track record in leading modules, mentoring
          developers, and delivering high-quality code in agile environments.
        </p>
      </div>
    </StyledSection>
  );
};

export default Summary;
