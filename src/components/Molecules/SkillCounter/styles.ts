import styled from "styled-components";

interface ContainerProps {
  animate?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 80px;
  opacity: ${(props) => (props.show ? "1" : "0")};
  ${(props) => props.animate && `animation: up-item 1s normal;`}

  @keyframes up-item {
    0% {
      opacity: 0;
      transform: translateY(32px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  > div {
    display: flex;
    align-items: flex-start;
    margin-bottom: 4px;

    > span:first-of-type {
      font-family: Arimo !important;
      color: #d63447;
      font-size: 70px;
      font-weight: 500;
      margin-right: 4px;
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
