import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 60px;
  /* height: max-content; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  > ul {
    display: flex;
    list-style: none;

    > li {
      > a {
        cursor: pointer;
        font-size: 14px;
        transition: var(--fast-transition);

        :hover {
          padding-bottom: 16px;
          border-bottom: 1px solid #fff;
        }
      }
    }

    *:not(:last-child) {
      margin-right: 16px;
    }
  }

  > h2 {
    font-size: 28px;
  }

  *:not(:last-child) {
    margin-right: 80px;
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
