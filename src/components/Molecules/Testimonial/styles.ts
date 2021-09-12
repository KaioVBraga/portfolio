import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  > main {
    position: relative;
    min-height: 200px;
    width: 1000px;
    background-color: #212121;
    padding: 32px 64px 96px 64px;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;

    > span {
      font-size: 100px;
      font-family: Georgia !important;
      height: 100px;
    }

    > blockquote {
      font-weight: 300;
      text-align: center;
      font-size: 20px;
      line-height: 1.8;
    }

    :before {
      position: absolute;
      z-index: -1;
      content: "";
      top: 100%;
      width: 95%;
      height: 10px;
      background-color: #d63447;
    }
  }

  > footer {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: -50px;

    > img {
      border-radius: 50%;
      margin-bottom: 16px;
    }

    > h3 {
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 12px;
    }

    > span {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
      font-weight: 300;
    }
  }
`;
