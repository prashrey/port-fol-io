import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 15px;
  background-color: white;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 100%;

    &::before,
    &::after {
      display: none;
    }
  }

  &::before {
    content: "";
    display: block;
    height: 25px;
    width: 190px;
    position: absolute;
    top: 100%;
    z-index: 1;
    left: 0px;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
  }
  &::after {
    content: "";
    display: block;
    height: 25px;
    width: 190px;
    position: absolute;
    top: 100%;
    z-index: 1;
    right: 0px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%);
  }
`;

export const BrandLogo = styled.div`
  svg {
    fill: #000;
  }
`;
export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    font-size: 1.2rem;
    transition: color 0.5s;
    height: 40px;

    /* &:hover {
      color: #19647e;
    } */
  }

  svg {
    fill: #000;
    transition: fill 0.2s;

    &:hover {
      fill: #19647e;
    }

    @media (max-width: 600px) {
      height: 30px;
    }
  }
`;
