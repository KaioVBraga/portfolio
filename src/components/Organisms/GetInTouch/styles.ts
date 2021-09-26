import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  position: relative;
  /* padding: 120px 0px 100px 0px; */

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 50px 64px 0 100px;

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
      position: relative;

      > h1 {
        font-size: 32px;
        margin-bottom: 32px;
      }

      margin-bottom: 80px;
    }

    > main {
      display: grid;
      grid-template-columns: 2fr 1fr;
      width: 100%;
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
