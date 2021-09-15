import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 60px;
  /* height: max-content; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  > ul {
    display: flex;
    list-style: none;

    > li {
      > a {
        cursor: pointer;
        font-size: 14px;
        transition: var(--fast-transition);

        :hover {
          padding-bottom: 16px;
          border-bottom: 1px solid #fff;
        }
      }
    }

    *:not(:last-child) {
      margin-right: 18px;
    }
  }

  > h2 {
    font-size: 27px;
    margin-right: 76px !important;
  }

  *:not(:last-child) {
    margin-right: 70px;
  }
`;

interface ItemsList {
  align?: string;
}

export const ItemsList = styled.div<ItemsList>`
  display: flex;
  list-style: none;
  width: 100%;

  ${(props) =>
    (props.align === "left" && "justify-content: flex-start;") ||
    (props.align === "right" && "justify-content: flex-end;") ||
    (props.align === "center" && "justify-content: center;")}

  > li {
    margin-top: 18px;
  }

  *:not(:last-child) {
    margin-right: 18px;
  }
`;
