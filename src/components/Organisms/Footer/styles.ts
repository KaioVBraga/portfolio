import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  padding: 120px 0px 100px 0px;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #191919;
  color: #fff;
  padding: 0 64px 150px 100px;

  /* position: fixed; */
  position: relative;
  bottom: 0px;
  /* z-index: -1; */

  /* position: fixed;
  z-index: 50;
  bottom: 0;
  left: 0;
  right: 0;
  height: 400px;
  z-index: -1; */

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1140px;
    padding: 48px;

    > header {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h1 {
        font-size: 32px;
        margin-bottom: 32px;

        > span {
          color: #d63447;
        }
      }
    }

    > nav {
      width: 100%;
      max-width: 480px;
      margin-bottom: 48px;

      > ul {
        list-style: none;
        display: flex;
        width: 100%;
        justify-content: space-between;

        > li {
          > a {
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.1rem;
            color: rgba(255, 255, 255, 0.5);
            text-decoration: none;
            cursor: pointer;
          }
        }
      }
    }

    > main {
      width: max-content;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const FormContainer = styled.div<ContainerProps>`
  position: relative;
  padding: 0px 100px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 630px;

  > fieldset {
    margin: 16px 0 40px 0;
    display: flex;
    width: 100%;

    > input {
      height: 24px;
      padding: 4px 0 16px 0;
      width: 100%;
      background-color: transparent;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      color: #fff;
      font-weight: 300;
      font-size: 16px;

      :not(:last-child) {
        margin-right: 32px;
      }

      ::placeholder {
        opacity: 0.7;
        color: rgba(255, 255, 255);
        font-weight: 700;
        font-size: 12px;
      }

      :focus {
        border-bottom: 1px solid rgba(255, 255, 255);

        ::placeholder {
          color: rgba(255, 255, 255);
        }
      }
    }

    > textarea {
      padding: 4px 0 16px 0;
      width: 100%;
      min-height: 180px;
      background-color: transparent;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      color: #fff;
      font-weight: 300;
      font-size: 16px;

      /* margin-right: 16px; */

      ::placeholder {
        opacity: 0.7;
        color: rgba(255, 255, 255);
        font-weight: 700;
        font-size: 12px;
      }

      :focus {
        border-bottom: 1px solid rgba(255, 255, 255);

        ::placeholder {
          color: rgba(255, 255, 255);
        }
      }
    }
  }
`;

export const InfoContainer = styled.div<ContainerProps>`
  > div {
    display: flex;
    flex-direction: column;

    > span {
      font-weight: 800;
      letter-spacing: 1.6px;
      font-size: 11px;
      color: rgba(255, 255, 255, 0.5);
    }

    > a {
      font-weight: 300;
      font-size: 20px;
    }

    > address {
      font-weight: 300;
      font-size: 20px;
      text-decoration: none;
    }

    > :not(:last-child) {
      margin-bottom: 12px;
    }
  }

  > :not(:last-child) {
    margin-bottom: 48px;
  }
`;
