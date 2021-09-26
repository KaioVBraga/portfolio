import React, { useEffect, useState } from "react";
import { Container } from "./styles";

interface Props {
  width?: number | string;
  height?: number | string;
  animate?: boolean;
  seconds?: number;
  startInvisible?: boolean;
  display?: string;
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
      width={props?.width}
      height={props.height}
      animate={props.animate}
      seconds={props.seconds}
      show={show}
      display={props.display}
    >
      {props.children}
    </Container>
  );
};

export default AnimatedContent;
