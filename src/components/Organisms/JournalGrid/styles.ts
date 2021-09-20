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
    justify-content: space-between;
    min-height: 100vh;
    align-items: center;
    /* padding: 32px; */
    padding: 32px 5px 32px 5px;

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
      display: grid;
      grid-template-areas:
        "first first second"
        "third forth fifth";
      grid-template-columns: 1fr 1fr 1fr;
      min-height: 100%;
      padding-bottom: 48px;
      /* padding-bottom: 98px; */
      width: 100%;

      > :nth-child(1) {
        grid-area: first;
      }

      > :nth-child(2) {
        grid-area: second;
      }

      > :nth-child(3) {
        grid-area: third;
      }

      > :nth-child(4) {
        grid-area: forth;
      }

      > :nth-child(5) {
        grid-area: fifth;
      }
    }
  }
`;
