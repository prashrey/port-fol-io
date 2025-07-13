import React from "react";
import { StyledContent, SkillList } from "./Profile.styled";

const Skills = () => {
  return (
    <StyledContent className="profile-section profile-skills">
      <h2 className="profile-section-title">Skills</h2>
      <SkillList className="profile-skills-list">
        <li className="profile-skill-list-item">
          <strong>Frontend</strong>
          <div className="profile-skill-names-wrap">
            <span className="profile-skill-name">React</span>
            <span className="profile-skill-name">Redux</span>
            <span className="profile-skill-name">Next.js</span>
            <span className="profile-skill-name">HTML, CSS</span>
          </div>
        </li>
        <li className="profile-skill-list-item">
          <strong>Backend</strong>

          <div className="profile-skill-names-wrap">
            <span className="profile-skill-name">Node.js</span>
            <span className="profile-skill-name">Express.js</span>
          </div>
        </li>
        <li className="profile-skill-list-item">
          <strong>Testing</strong>

          <div className="profile-skill-names-wrap">
            <span className="profile-skill-name">Jest</span>
            <span className="profile-skill-name">Unit Testing</span>
          </div>
        </li>
        <li className="profile-skill-list-item">
          <strong>Performance</strong>

          <div className="profile-skill-names-wrap">
            <span className="profile-skill-name">Core Web Vitals</span>
            <span className="profile-skill-name">Lighthouse</span>
          </div>
        </li>
        <li className="profile-skill-list-item">
          <strong>DevOps</strong>

          <div className="profile-skill-names-wrap">
            <span className="profile-skill-name">Git</span>
            <span className="profile-skill-name">CI/CD</span>
          </div>
        </li>
        <li className="profile-skill-list-item">
          <strong>Soft Skills</strong>

          <div className="profile-skill-names-wrap">
            <span className="profile-skill-name">Communication</span>
            <span className="profile-skill-name">Teamwork</span>
          </div>
        </li>
      </SkillList>
    </StyledContent>
  );
};

export default Skills;
