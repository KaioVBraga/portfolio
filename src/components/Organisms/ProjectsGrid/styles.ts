import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  /* min-height: 100px; */
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
    padding: 60px 16px 32px 16px;

    > header {
      width: 100%;
      margin-bottom: 40px;
      position: relative;

      > h1 {
        /* width: 100%;
        text-align: left; */
        width: min-content;
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

export const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;

  padding: 0 64px 0 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.div`
  width: 0px;
  height: 100%;
  border-left: 1px solid #222;
`;
