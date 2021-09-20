import React from "react";
import { Container } from "./styles";

interface Props {
  height?: number;
  animate?: boolean;
}

const AnimatedCover: React.FC<Props> = (props) => {
  return <Container height={props.height} animate={props.animate}></Container>;
};

export default AnimatedCover;
