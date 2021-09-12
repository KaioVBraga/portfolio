import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  padding: 120px 0px 100px 0px;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1140px;

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
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
  }
`;

export const ImageContainer = styled.div<ContainerProps>`
  position: relative;
  padding: 0px 100px 0px 40px;

  > img {
    position: relative;
    width: 100%;
    z-index: 1;
  }

  :before {
    display: block;
    height: 240px;
    width: 240px;
    position: absolute;
    z-index: 0;
    bottom: -50px;
    right: 45px;
    content: "";
    background-image: url("https://preview.colorlib.com/theme/unfold/images/xdotted_light.png.pagespeed.ic.h7RVVSENpI.png");
    background-size: cover;
    background-position: 50% 46%;
    background-repeat: repeat;
  }
`;

export const TextContainer = styled.div<ContainerProps>`
  padding: 0px 40px;

  > h3 {
    font-size: 24px;
  }

  > p {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.8;
    margin-top: 32px;
    > a {
      color: #d63447;
      text-decoration: none;
      transition: var(--transition);

      :hover {
        color: #ffffff;
      }
    }
  }
`;