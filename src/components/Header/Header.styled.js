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

// export const Brand = styled.div`
//   font-size: 1.2rem;
//   font-weight: bold;
//   letter-spacing: 2px;
//   text-shadow: 3px 2px 0 #2a2a2a;
//   background-color: #000;
//   border-radius: 5px;
//   padding: 5px 10px;
//   position: relative;
//   /* text-shadow: -1px -1px 0 #f7d02c, 1px -1px 0 #f7d02c, -1px 1px 0 #f7d02c, 1px 1px 0 #f7d02c; */
// `;

export const BrandLogo = styled.div`
  svg {
    fill: #000;
  }
`;

// export const Nav = styled.nav`
//   display: grid;
//   gap: 2rem;
//   grid-template-columns: 1fr 1fr 1fr;

//   @media (max-width: 500px) {
//     gap: 1rem;
//   }
// `;

// export const NavLink = styled.a`
//   text-decoration: none;
//   font-weight: 500;
//   font-size: 1rem;
//   transition: color 0.2s;
//   &:hover {
//   }
// `;

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

// export const Toggle = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   gap: 0.5rem;
//   width: 90px;
// `;

// export const ToggleLabel = styled.span`
//   font-size: 0.95rem;
//   font-weight: 500;
// `;

// export const SwitchLabel = styled.label`
//   position: relative;
//   display: inline-block;
//   width: 38px;
//   height: 22px;
//   input {
//     opacity: 0;
//     width: 0;
//     height: 0;
//   }
// `;

// export const Slider = styled.span`
//   position: absolute;
//   cursor: pointer;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   border-radius: 22px;
//   transition: 0.4s;
//   &:before {
//     position: absolute;
//     content: "";
//     height: 16px;
//     width: 16px;
//     left: 3px;
//     bottom: 3px;
//     border-radius: 50%;
//     transition: 0.4s;
//   }
//   input:checked + & {
//   }
//   input:checked + &:before {
//     transform: translateX(16px);
//   }
// `;
