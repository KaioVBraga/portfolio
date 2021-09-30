import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background-color: transparent;
  color: #fff;
  height: 400px !important;
  min-height: 400px !important;
  position: relative;
  display: block;
  z-index: -10;
`;
