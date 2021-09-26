import React from "react";
import { Container } from "./styles";

interface Props {
  height?: number | string;
  animate?: boolean;
  backgroundColor?: string;
}

const AnimatedCover: React.FC<Props> = (props) => {
  return (
    <Container
      height={props.height}
      animate={props.animate}
      backgroundColor={props.backgroundColor}
    ></Container>
  );
};

export default AnimatedCover;
