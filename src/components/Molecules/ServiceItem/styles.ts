import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  max-width: 290px;
  font-weight: 300;

  > img {
    width: max-content;
    /* width: 328px; */
  }

  > p {
    font-size: 16px !important;
    line-height: 1.7;
  }

  > h2 {
    font-size: 22px;
    margin-bottom: 10px !important;
  }

  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;
