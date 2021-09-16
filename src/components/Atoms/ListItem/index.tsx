import React, { useState } from "react";
import { Container } from "./styles";

interface ListItemProps {
  active?: boolean;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <Container active={props.active}>
      <a>{props.children}</a>
      <div></div>
    </Container>
  );
};

export default ListItem;
