import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;

  > section {
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 1140px;

    > img {
      width: 100%;
    }
  }
`;