import React, { useState } from "react";
import { Container } from "./styles";

interface ListItemProps {
  active?: boolean;
  onClick: (value: any) => any;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <Container active={props.active} onClick={props.onClick}>
      <a>{props.children}</a>
      <div></div>
    </Container>
  );
};

export default ListItem;
