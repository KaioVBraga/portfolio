import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  width: 100%;
  font-weight: 300;
  padding: 10px;

  > img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    max-height: 330px;
    object-fit: cover;
    /* width: 328px; */
  }
`;

export const Content = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px 32px 42px 16px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: var(--transition);

  > section {
    > h3 {
      font-weight: 400;
      margin: 0;
    }

    > span {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
      font-family: Arimo !important;
      font-weight: 500;
    }
  }

  :hover {
    opacity: 0;
  }
`;
