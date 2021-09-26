import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  padding: 60px 0px 100px 0px;

  position: relative;
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
      position: relative;
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

interface ImageContainerProps {
  animate: boolean;
  show?: boolean;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  /* padding: 0px 100px 0px 40px; */
  padding: 0px 98px 0px 16px;

  > img {
    position: relative;
    width: 100%;
    opacity: ${(props) => (props.show ? "1" : "0")};
    z-index: 1;
    top: 3px;
    left: 2px;
    ${(props) => props.animate && `animation: shrink-image 4s normal;`}
  }

  @keyframes shrink-image {
    0% {
      opacity: 0;
    }
    24% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
      width: 100%;
    }
  }

  :before {
    display: block;
    /* height: 240px;
    width: 240px; */
    height: 230px;
    width: 230px;
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
  /* padding: 0px 40px; */
  padding: 0px 40px 0 16px;

  > h3 {
    font-size: 26px;
  }

  > p {
    font-size: 16px;
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

  > p:first-of-type {
    font-size: 18px;
  }
`;
