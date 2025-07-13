import styled from "styled-components";

export const StyledContent = styled.aside`
  /* max-height: 100vh;
  overflow-y: auto; */
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  border-spacing: 10px;
  border-left: 10px solid #fff;
`;
export const StyledSection = styled.section`
  @property --angle {
    syntax: "<angle>";
    initial-value: -90deg;
    inherits: false;
  }
  --angle: -90deg;

  @keyframes rotateGradient {
    from {
      --angle: -90deg;
    }
    to {
      --angle: 270deg;
    }
  }
  position: relative;
  text-align: left;

  .profile-experience-list .profile-experience-item {
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    border: 4px solid transparent;
    background: linear-gradient(black, black) padding-box,
      conic-gradient(from var(--angle), #19647e, #28afb0) border-box;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    box-shadow: inset 0 0 8px 2px rgba(40, 175, 176, 0.75);

    &:hover {
      animation: rotateGradient 4s ease-in-out infinite;
    }
  }

  &.profile-section {
    &::before {
      content: "";
      /* border-radius: 0 6px 6px 0; */
      border: 5px solid #fff;
      position: absolute;
      top: 40px;
      left: 0;
      width: 40%;
    }

    &::after {
      content: "";
      position: absolute;
      top: 40px;
      left: calc(40% + 10px);
      border: 5px solid transparent;
      border-left-color: #fff;
      border-bottom-color: #fff;
    }

    .profile-section-title {
      text-align: left;
    }
  }

  &.profile-summary {
    &:after {
      /* border-color: #f7d02c; */
    }

    .profile-section-title {
      /* color: #f7d02c; */
    }

    .profile-section-text strong {
      color: #28afb0;
      &::selection {
        background-color: #28afb0;
        color: #fff;
        border-radius: 3px;
      }
    }
  }

  &.profile-experience {
    &::after {
      /* border-color: #6493eb; */
    }
    .profile-section-title {
      /* color: #6493eb; */
    }
  }

  &.profile-skills {
    &::after {
      /* border-color: #f68a45; */
    }
    .profile-section-title {
      /* color: #f68a45; */
    }
  }

  .profile-section-header {
    /* padding: 30px 10px;
    border-radius: 5px 5px 0 0; */
    padding-bottom: 10px;

    .profile-section-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0;
      padding-left: 25px;
    }
  }
  .profile-section-content {
    padding: 20px;

    .profile-section-text {
      text-align: left;
      margin: 0;
    }
  }
`;

export const StyledExpItem = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: auto;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  /* background: linear-gradient(45deg, #c0e5c8, #85b79d); */

  .profile-experience-logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: contain;
    flex-shrink: 0;
  }

  .profile-experience-role {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    border-left: 1px solid #fff;
    padding-left: 15px;

    .profile-experience-meta {
      display: block;
      font-size: 14px;
      color: #666;
      margin-top: 5px;
    }
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  font-size: 12px;
  padding: 0;
  margin: 0%;

  li {
    margin: 5px;
  }
`;
export const StyledHighlightedList = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  margin: 15px 0 0;

  .profile-certification-item {
    display: block;
    padding: 10px;
    padding-left: 30px;
    position: relative;

    @keyframes rotateArrow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    &:hover::before {
      animation: rotateArrow 0.6s ease-in-out;
    }

    /* &::after, */
    &::before {
      content: "";
      position: absolute;
      top: 15px;
      border: 7px solid #28afb0;
      font-weight: bold;
    }
    &::before {
      left: 0;
      border-top-color: transparent;
    }
    /* &::after {
      right: -20px;
      border-width: 7px;
      transform: rotate(-45deg);
      border-top-color: transparent;
      border-left-color: transparent;
    } */
  }
  .profile-cert-year,
  .profile-cert-source {
    padding: 2px 5px;
    margin: 0 5px;
    border-radius: 3px;
  }
  .profile-cert-source {
    color: #000;
    background-color: #28afb0;
  }
  .profile-cert-year {
    color: #28afb0;
    border: 2px solid #28afb0;
    font-weight: bold;
  }
`;
