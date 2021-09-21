import React from "react";
import { Container } from "./styles";

interface Props {
  height?: number | string;
  animate?: boolean;
}

const AnimatedContent: React.FC<Props> = (props) => {
  return (
    <Container height={props.height} animate={props.animate}>
      {props.children}
    </Container>
  );
};

export default AnimatedContent;
