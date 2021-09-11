import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  /* max-width: 1140px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000;
  min-height: 100vh;
  align-items: center;
  /* padding: 12px; */
  color: #fff;

  width: 100%;

  > header {
    width: 100%;
    max-width: 1110px;
    padding: 12px;
    margin-bottom: 24px;

    > h1 {
      width: 100%;
      text-align: left;
    }
  }

  > main {
    display: flex;
    justify-content: center;
    min-height: 100%;
    padding-bottom: 98px;
    max-width: 1110px;

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
`;
