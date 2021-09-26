import styled from "styled-components";

interface ContainerProps {
  animate?: boolean;
  show?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
`;
