import React, { useEffect, useState } from "react";
import { Container } from "./styles";

interface Props {
  height?: number | string;
  animate?: boolean;
  seconds?: number;
  startInvisible?: boolean;
}

const AnimatedContent: React.FC<Props> = (props) => {
  const [show, setShow] = useState(!!props?.startInvisible);

  useEffect(() => {
    if (!props.animate || show) {
      return;
    }

    setShow(true);
  }, [props.animate, show]);

  return (
    <Container
      height={props.height}
      animate={props.animate}
      seconds={props.seconds}
      show={show}
    >
      {props.children}
    </Container>
  );
};

export default AnimatedContent;
