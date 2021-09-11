import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  display: block;
  position: relative;
  cursor: pointer;

  > img {
    width: 328px;
  }
`;

export const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0;
  transition: var(--fast-transition);

  :hover {
    opacity: 0.5;
  }
`;
