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
    max-width: 1140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    align-items: center;
    padding: 32px;

    > header {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h1 {
        font-size: 32px;
        margin-bottom: 32px;
      }

      margin-bottom: 80px;
    }

    > main {
      display: flex;
      justify-content: center;
      min-height: 100%;
      padding-bottom: 98px;

      > ul {
        display: flex;
        flex-direction: column;
        > li {
          list-style: none;

          > img {
            width: 328px;
          }

          margin-bottom: 32px;
        }

        margin-right: 32px;
      }
    }
  }
`;
