import React from "react";
import { StyledProfile } from "./Profile.styled";
import Skills from "./Skills";
import ContactCard from "./ContactCard";

const Profile = () => {
  return (
    <StyledProfile>
      {/* Profile Card */}
      <ContactCard />
      {/* Skills */}
      <Skills />
    </StyledProfile>
  );
};

export default Profile;
