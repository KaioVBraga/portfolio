import styled from "styled-components";

interface ContainerProps {
  height?: number | string;
  animate?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: block;
  width: 100%;
  height: min-content;
  max-height: min-content;
  ${(props) => props?.animate && `animation: expand-h1 2s normal;`}
  overflow: hidden;
  white-space: nowrap;
  position: relative;

  > img {
    object-fit: contain;
  }

  @keyframes expand-h1 {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;
