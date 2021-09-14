import React, { useState } from "react";
import { Container } from "./styles";

const ListItem: React.FC = (props) => {
  return (
    <Container>
      <a>{props.children}</a>
      <div></div>
    </Container>
  );
};

export default ListItem;
