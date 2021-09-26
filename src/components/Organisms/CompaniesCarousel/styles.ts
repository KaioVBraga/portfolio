import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;

  padding: 0px 0px 60px 0px;

  > section {
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 1140px;

    img {
      width: 100%;
      height: 100px !important;
    }
  }
`;
