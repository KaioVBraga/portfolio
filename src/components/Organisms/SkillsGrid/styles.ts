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

  > section {
    width: 100%;
    max-width: 1140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0px 32px 0px;

    > header {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      > h1 {
        font-size: 32px;
        margin-bottom: 32px;
      }

      margin-bottom: 80px;
    }

    > main {
      display: flex;
      /* justify-content: space-between; */
      justify-content: space-around;
      width: 100%;
    }
  }
`;
