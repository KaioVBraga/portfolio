import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 80px;

  > div {
    display: flex;
    align-items: flex-start;

    > span:first-of-type {
      font-family: Arimo !important;
      color: #d63447;
      font-size: 69px;
      font-weight: 500;
    }

    > span:last-of-type {
      font-weight: 700;
      font-size: 28px;
      padding-top: 8px;
    }
  }

  > p {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
  }
`;
