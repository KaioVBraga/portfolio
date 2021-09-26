import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1268px;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  margin-left: auto;
  margin-right: auto;

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
