// import styled from "styled-components";

// interface ContainerProps {}

// export const Container = styled.div<ContainerProps>`
//   width: 100%;
//   height: 60px;
//   /* height: max-content; */
//   display: flex;
//   background-color: #fff;
//   align-items: center;
//   justify-content: center;

//   z-index: 2;

//   > ul {
//     display: flex;
//     list-style: none;

//     > li {
//       > a {
//         cursor: pointer;
//         font-size: 14px;
//         transition: var(--fast-transition);

//         :hover {
//           color: #d63447;
//         }
//       }
//     }

//     *:not(:last-child) {
//       margin-right: 16px;
//     }
//   }

//   > h2 {
//     font-size: 28px;

//     > span {
//       color: #d63447 !important;
//     }
//   }

//   *:not(:last-child) {
//     margin-right: 80px;
//   }
// `;

import styled from "styled-components";

interface ContainerProps {
  displayNavbar?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: max-content;
  /* height: max-content; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #fff;
  z-index: 10;
  padding: 4px 0 4px 0;
  position: fixed;
  top: -60px;
  transition: var(--transition);

  ${(props) => props.displayNavbar && `transform: translateY(60px);`}

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
    margin-right: 71px !important;
    margin-top: -2px !important;
    color: #000 !important;

    white-space: nowrap;

    > span {
      color: #d63447 !important;
    }
  }

  *:not(:last-child) {
    margin-right: 69px;
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
    margin-top: 17px;
    transition: var(--fast-transition);
    color: #000000;

    :hover {
      color: #d63447 !important;
    }
  }

  *:not(:last-child) {
    margin-right: 18px;
  }
`;
