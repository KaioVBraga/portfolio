import React, { useEffect, useState } from "react";
import { Container } from "./styles";

interface Props {
  height?: number | string;
  animate?: boolean;
  backgroundColor?: string;
  startVisible?: boolean;
  seconds?: number;
}

const AnimatedCover: React.FC<Props> = (props) => {
  const [show, setShow] = useState(!!props.startVisible);

  useEffect(() => {
    if (!props.animate || !show) {
      return;
    }

    setTimeout(() => setShow(false), 1500);
  }, [show, props.animate]);

  return (
    <Container
      height={props.height}
      animate={props.animate}
      backgroundColor={props.backgroundColor}
      show={show}
      expandAnimation={!props.startVisible}
      seconds={props.seconds}
    ></Container>
  );
};

export default AnimatedCover;
