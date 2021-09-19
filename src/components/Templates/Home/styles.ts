import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;

  > section {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    /* background-color: #181818; */
    overflow-y: scroll;
    overflow-x: hidden;
    perspective: 1px;
    transform-style: preserve-3d;
    /* margin: 0 0 400px 0 !important; */
  }
`;
