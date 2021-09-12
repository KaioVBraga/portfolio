import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  max-width: 300px;
  font-weight: 300;

  > img {
    width: max-content;
    /* width: 328px; */
  }

  > p {
    line-height: 1.5;
  }

  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;
