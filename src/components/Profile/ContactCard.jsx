import React from "react";
import { StyledCard } from "./Profile.styled";

const ContactCard = () => {
  return (
    <StyledCard className="profile-card">
      <div className="profile-header">
        <img height={180} src="/lock.svg" alt="Profile" className="profile-image" />
      </div>
      <div className="profile-content">
        <h1 className="profile-name">Prashrey</h1>
      </div>
    </StyledCard>
  );
};

export default ContactCard;
