import styled from "styled-components";

interface ContainerProps {
  animate?: boolean;
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
    /* width: 348px; */
    /* width: 328px; */
    ${(props) => props.animate && `animation: shrink-image 2s normal;`}

    @keyframes shrink-image {
      0% {
        transform: scale(2);
      }
      100% {
        transform: scale(1);
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
