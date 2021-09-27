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
  width: 100%;
  font-weight: 300;
  padding: 10px;
  opacity: ${(props) => (props.show ? "1" : "0")};
  ${(props) => props.animate && `animation: up-item 1s normal;`}

  > img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    max-height: 330px;
    object-fit: cover;
    /* width: 328px; */
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
`;

export const Content = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 16px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px 32px 42px 16px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: var(--transition);

  > section {
    > h3 {
      font-weight: 400;
      margin: 0;
    }

    > span {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
      font-family: Arimo !important;
      font-weight: 500;
    }
  }

  :hover {
    opacity: 0;
  }
`;
