import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.a<ContainerProps>`
  width: max-content;
  height: max-content;
  display: flex;
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 14px 28px;
  color: #fff !important;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  background-color: transparent;
  cursor: pointer;
  transition: var(--fast-transition);

  :hover {
    border: 2px solid rgba(255, 255, 255);
  }
`;
