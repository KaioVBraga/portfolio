import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 24px;
  color: #fff;
  width: 100%;
  transform-style: inherit;

  > main {
    display: flex;
    justify-content: center;
    min-height: 100%;
    padding-bottom: 98px;
    z-index: 2;

    > section {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 640px;
      align-items: center;
      justify-content: center;

      > h1 {
        font-size: 80px;
        margin-bottom: 22px;
      }

      > p {
        font-size: 33px;
        text-align: center;
        line-height: 1.5;
      }
    }
  }

  :before {
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: block;

    background-image: url("https://preview.colorlib.com/theme/unfold/images/xcover_bg_2.jpg.pagespeed.ic.80gbjoZ17c.webp");
    background-size: cover;
    background-position: 50% 46%;
    background-repeat: repeat;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    content: "";

    z-index: -1;
    transform-origin: center center 0;
    transform: translateZ(-1px) scale(2);
  }
`;

interface InputProps {}

export const Input = styled.input<InputProps>`
  background-color: #121212;
  border: #333333 1px solid;
  height: 50px;
  width: 100%;
  color: #fff;
  padding: 16px;
`;

interface ButtonProps {}

export const Button = styled.button<ButtonProps>`
  background-color: #333333;
  border: #333333 1px solid;
  height: 50px;
  width: min-content;
  color: #616161;
  padding: 16px;
  cursor: pointer;
  transition: var(--fast-transition);

  :hover {
    color: #888;
  }
`;
