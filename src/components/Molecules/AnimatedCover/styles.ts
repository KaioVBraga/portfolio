import styled from "styled-components";

interface ContainerProps {
  height?: number | string;
  animate?: boolean;
  backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
  display: block;
  height: ${(props) => props?.height || "110px"};
  width: 0%;
  position: absolute;
  top: 0;
  background-color: ${(props) => props.backgroundColor || "#d63447"};

  ${(props) => props?.animate && `animation: expand 2s normal;`}

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
`;
