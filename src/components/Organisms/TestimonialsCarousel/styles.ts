import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;

  > section {
    width: 100%;
    max-width: 1140px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > header {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h1 {
        font-size: 32px;
        margin-bottom: 32px;
      }

      margin-bottom: 80px;
    }

    > main {
      width: 3350px;
      /* width: 100%; */
      display: flex;
      align-items: center;

      > img {
        width: 100%;
      }
    }
  }

  .swiper-pagination-bullet {
    background-color: #686868 !important;
  }

  .swiper-pagination-bullet-active {
    background-color: #fff !important;
  }
`;

export const AngleLeftContainer = styled.div`
  position: absolute;
  left: 1105px;
  bottom: 0;
  font-size: 26px;
  cursor: pointer;
  height: min-content;
  width: min-content;
  max-width: 16px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
`;

export const AngleRightContainer = styled.div`
  position: absolute;
  right: 1105px;
  bottom: 0;
  font-size: 26px;
  cursor: pointer;
  height: min-content;
  width: min-content;
  z-index: 100;
  max-width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
`;
