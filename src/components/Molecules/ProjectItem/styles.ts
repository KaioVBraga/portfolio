import styled from "styled-components";

interface ContainerProps {
  animate?: boolean;
  show?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: block;
  position: relative;
  cursor: pointer;
  width: 348px;
  height: min-content;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    min-height: 240px;
    ${(props) => !props.show && `opacity: 0;`}
    /* width: 348px; */
    /* width: 328px; */
    ${(props) => props.animate && `animation: shrink-image 4s normal;`}

    @keyframes shrink-image {
      /* 0% {
        transform: scale(1.1);
        width: 0%;
      }
      50% {
        transform: scale(1.1);
        width: 100%;
      }
      100% {
        transform: scale(1);
        width: 100%;
      } */
      0% {
        opacity: 0;
      }
      24% {
        opacity: 0;
      }
      25% {
        opacity: 1;
      }
      100% {
        transform: scale(1);
        width: 100%;
      }
    }
  }
`;

export const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: var(--transition);
  padding: 20px 24px 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header {
    display: flex;
    justify-content: flex-end;

    > span {
    }
  }

  > main {
    > h2 {
      font-size: 16px;
      font-weight: 400;
      color: #fff;
    }

    > span {
      font-size: 13px;
      color: #cecece;
    }
  }

  :hover {
    opacity: 1;
  }
`;
