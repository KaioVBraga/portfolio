import styled from "styled-components";

interface ContainerProps {
  height?: number | string;
  animate?: boolean;
  seconds?: number;
}

export const Container = styled.div<ContainerProps>`
  display: block;
  width: 100%;
  height: min-content;
  max-height: min-content;
  ${(props) =>
    props?.animate && `animation: expand-h1 ${props.seconds || 2}s normal;`}
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
