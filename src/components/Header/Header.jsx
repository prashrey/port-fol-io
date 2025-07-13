// import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
import {
  HeaderWrapper,
  Brand,
  BrandLogo,
  Nav,
  NavLink,
  RightSection,
  Socials,
  Toggle,
  ToggleLabel,
  SwitchLabel,
  Slider,
} from "./Header.styled";

const Header = () => {
  // const [isNerdMode, setIsNerdMode] = useState(false);

  // const handleModeChange = () => {
  //   setIsNerdMode(!isNerdMode);
  // };

  return (
    <HeaderWrapper>
      {/* <Brand>PRASHREY</Brand> */}
      <BrandLogo>
        <img className="profile-experience-logo" height={60} width={60} src="/logo.svg" alt="Bold Technologies Logo" />
      </BrandLogo>
      {/* <Nav>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#summary">Summary</NavLink>
      </Nav> */}
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
          <a href="mailto:example@email.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
            <SiGmail size={40} />
          </a>
        </Socials>
        {/* <Toggle>
          <ToggleLabel>{isNerdMode ? "nerd" : "Dev"}</ToggleLabel>
          <SwitchLabel>
            <input type="checkbox" checked={isNerdMode} onChange={handleModeChange} />
            <Slider />
          </SwitchLabel>
        </Toggle> */}
      </RightSection>
    </HeaderWrapper>
  );
};

export default Header;
