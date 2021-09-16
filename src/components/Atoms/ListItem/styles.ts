import styled from "styled-components";

interface ContainerProps {
  active?: boolean;
}

export const Container = styled.li<ContainerProps>`
  width: min-content;
  cursor: pointer;

  > a {
    cursor: pointer;
    font-size: 14px;
    transition: var(--transition);
    margin: 0 !important;

    /* :hover {
      padding-bottom: 16px;
      border-bottom: 1px solid #fff;
    } */
  }

  > div {
    width: 0;
    height: 1px;
    margin-top: 16px;
    transition: var(--transition);

    border-bottom: 1px solid #fff;
  }

  ${(props) =>
    props.active &&
    `
    > div {
      width: 100%;
    }
    `}

  :hover {
    > div {
      width: 100%;
    }
  }
`;
