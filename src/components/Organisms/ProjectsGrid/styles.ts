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
    padding: 32px 16px 32px 16px;

    > header {
      width: 100%;
      margin-bottom: 40px;

      > h1 {
        width: 100%;
        text-align: left;
        font-size: 36px;
      }
    }

    > main {
      display: flex;
      justify-content: space-between;
      /* justify-content: center; */
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
      }

      > ul:not(:last-child) {
        margin-right: 32px;
      }
    }
  }
`;
