// import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
import {
  HeaderWrapper,
  BrandLogo,
  RightSection,
  Socials,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <BrandLogo>
        <img className="profile-experience-logo" height={60} width={60} src="/logo.svg" alt="Bold Technologies Logo" />
      </BrandLogo>
      <RightSection>
        <Socials>
          <a
            href="https://www.linkedin.com/in/prashrey/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/prashrey" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={40} />
          </a>
          <a href="https://leetcode.com/u/prashrey/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <SiLeetcode size={40} />
          </a>
          <a href="mailto:prashreyh@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
            <SiGmail size={40} />
          </a>
        </Socials>
      </RightSection>
    </HeaderWrapper>
  );
};

export default Header;
