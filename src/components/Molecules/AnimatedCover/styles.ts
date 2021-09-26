import styled from "styled-components";

interface ContainerProps {
  height?: number | string;
  animate?: boolean;
  backgroundColor?: string;
  show?: boolean;
  expandAnimation?: boolean;
  seconds?: number;
}

export const Container = styled.div<ContainerProps>`
  display: block;
  height: ${(props) => props?.height || "110px"};
  width: ${(props) => (props.show ? "100%" : "0%")};
  position: absolute;
  top: 0;
  background-color: ${(props) => props.backgroundColor || "#d63447"};

  ${(props) =>
    props?.animate &&
    (props.expandAnimation
      ? `animation: expand ${props.seconds || 2}s normal;`
      : `animation: shrink-cover ${props.seconds || 2}s normal;`)}

  @keyframes expand {
    0% {
      left: 0;
      width: 0%;
    }
    40% {
      left: 0;
      width: 100%;
    }
    60% {
      right: 0;
      width: 100%;
    }
    100% {
      right: 0;
      width: 0%;
    }
  }

  @keyframes shrink-cover {
    0% {
      right: 0;
      width: 100%;
    }
    100% {
      right: 0;
      width: 0%;
    }
  }
`;
