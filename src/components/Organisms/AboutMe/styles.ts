import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  padding-top: 120px;

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
  padding: 0px 100px 0px 40px;

  > img {
    width: 100%;
  }
`;

export const TextContainer = styled.div<ContainerProps>`
  padding: 0px 40px;

  > h3 {
    font-size: 24px;
  }

  > p {
    font-size: 18px;
    font-weight: 300;
    line-height: 2;
    margin-top: 16px;
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
