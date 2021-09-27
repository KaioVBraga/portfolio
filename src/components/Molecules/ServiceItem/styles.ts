import styled from "styled-components";

interface ContainerProps {
  animate?: boolean;
  show?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  max-width: 290px;
  font-weight: 300;
  opacity: ${(props) => (props.show ? "1" : "0")};
  ${(props) => props.animate && `animation: up-item 1s normal;`}

  > img {
    width: max-content;
    /* width: 328px; */
  }

  > p {
    font-size: 16px !important;
    line-height: 1.7;
  }

  > h2 {
    font-size: 22px;
    margin-bottom: 10px !important;
  }

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

  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;
