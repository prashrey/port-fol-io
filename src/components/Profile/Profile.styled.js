import styled from "styled-components";

export const StyledContent = styled.section`
  position: relative;
  &.profile-section {
    &::before {
      content: "";
      border: 5px solid #fff;
      position: absolute;
      top: 40px;
      right: -20px;
      width: 40%;
    }

    &::after {
      content: "";
      position: absolute;
      top: 40px;
      right: calc(40% - 10px);
      border: 5px solid transparent;
      border-right-color: #fff;
      border-bottom-color: #fff;
    }

    .profile-section-title {
      margin-bottom: 40px;
      text-align: right;
    }
  }
`;

export const StyledCard = styled.section`
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/profile-bg-2.png");
  background-repeat: no-repeat;
  background-size: cover;
  /* filter: brightness(0.5); */

  .profile-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
    border-radius: 100%;
    /* background: linear-gradient(45deg, #19647e, #28afb0); */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    position: relative;
    cursor: pointer;

    border: 20px solid transparent;
    background: linear-gradient(black, black) padding-box, linear-gradient(0deg, #fff, #19647e) border-box;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;

    /* &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      background: linear-gradient(45deg, #19647e, #28afb0);
      z-index: -1;
      transition: all 0.3s ease-in-out;
    } */

    &:hover {
      /* margin: 0 auto; */
      /* height: 220px;
      width: 220px; */
    }

    .profile-image {
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #000;
      /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
    }

    .profile-content {
      filter: blur(20px);
      transition: filter 0.5s ease-in-out;

      &:hover {
        filter: blur(0);
      }
    }
  }
`;

export const StyledProfile = styled.div`
  padding: 20px;
  /* user-select: none; */
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: inherit;
  display: grid;
  gap: 0;
  grid-template-rows: repeat(6, 1fr);
  position: relative;
  z-index: 1;

  transform-style: preserve-3d;
  transform: perspective(1000px);

  .profile-skill-list-item {
    /* display: flex;
    justify-content: space-around; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* font-size: 12px; */
    display: grid;
    grid-template-columns: 150px 1fr;
    align-items: center;

    padding: 20px;
    border-radius: 5px;

    color: #fff;
    background: linear-gradient(45deg, #19647e, #28afb0);
    outline: 2px solid #fff;
    outline-offset: -5px;

    position: relative;

    transition: 0.5s;
    filter: brightness(0.2);

    &:hover {
      filter: brightness(1);
      transform: translateZ(100px);
    }

    &:hover + * {
      filter: brightness(0.6);
      transform: translateZ(80px); // rotateY(40deg);
    }

    &:hover + * + * {
      filter: brightness(0.4);
      transform: translateZ(50px); // rotateY(20deg);
    }

    &:hover + * + * + * {
      filter: brightness(0.2);
      transform: translateZ(30px); // rotateY(10deg);
    }

    &:has(+ *:hover) {
      filter: brightness(0.6);
      transform: translateZ(80px); // rotateY(-40deg);
    }

    &:has(+ * + *:hover) {
      filter: brightness(0.4);
      transform: translateZ(50px); // rotateY(-20deg);
    }
    &:has(+ * + * + *:hover) {
      filter: brightness(0.2);
      transform: translateZ(30px); // rotateY(-10deg);
    }

    strong {
      /* display: block; */
      /* width: 100%; */
      /* background-color: #fff; */
      color: #fff;
      margin-right: 10px;
      /* float: left; */
      /* text-decoration: underline; */
    }
    .profile-skill-names-wrap {
      display: flex;
      /* flex-wrap: wrap; */
      align-items: center;
      justify-content: flex-start;
      /* gap: 10px; */
      /* margin-left: 10px; */
      /* width: 100%; */
      /* padding-left: 10px; */
    }
    .profile-skill-name {
      min-width: 50px;
      display: inline-block;
      color: #19647e;
      background-color: #f2f2f2;
      font-weight: 600;
      /* text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); */
      box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.25);
      padding: 5px 10px;
      border-radius: 15px;
      margin: 0 5px;
    }
  }
`;
