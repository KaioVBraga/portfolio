import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  display: block;
  position: relative;
  cursor: pointer;

  > img {
    width: 100%;
    /* width: 328px; */
  }
`;

export const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: var(--transition);
  padding: 20px 24px 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header {
    display: flex;
    justify-content: flex-end;

    > span {
    }
  }

  > main {
    > h2 {
      font-size: 16px;
      font-weight: 400;
      color: #fff;
    }

    > span {
      font-size: 13px;
      color: #cecece;
    }
  }

  :hover {
    opacity: 1;
  }
`;
