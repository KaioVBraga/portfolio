import React, { useState } from "react";
import { Container } from "./styles";

const Button: React.FC<ButtonProps> = (props) => {
  return <Container onClick={props.onClick}>{props.children}</Container>;
};

export default Button;
