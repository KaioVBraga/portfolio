import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000;
  min-height: 100vh;
  padding: 24px;
  color: #fff;

  background: no-repeat center / 100%
    url("https://preview.colorlib.com/theme/unfold/images/xcover_bg_2.jpg.pagespeed.ic.80gbjoZ17c.webp");

  > main {
    display: flex;
    justify-content: center;
    min-height: 100%;
    padding-bottom: 120px;

    > section {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 640px;
      align-items: center;
      justify-content: center;

      > h1 {
        font-size: 80px;
        margin-bottom: 16px;
      }

      > p {
        font-size: 32px;
        text-align: center;
      }
    }
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
