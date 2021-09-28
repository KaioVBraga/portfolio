//@ts-nocheck

import React, { useState, useCallback, useRef, forwardRef } from "react";
import { Container } from "./styles";

interface Props {
  setGoingUp: (value: any) => void;
  handleClick: (value: any) => void;
}

const TemplateHome: React.FC<Props> = forwardRef((props, ref) => {
  const [previousScrollTop, setPreviousScrollTop] = useState(0);
  // const ref = useRef(null);

  const handleScroll = useCallback(
    (e) => {
      const newScrollTop = e.target.scrollTop;

      const isGoingUp = previousScrollTop > newScrollTop;

      setPreviousScrollTop(newScrollTop);
      props.setGoingUp(isGoingUp);
    },
    [previousScrollTop, props]
  );

  return (
    <Container>
      {props?.children[0]}

      <section ref={ref} onScroll={handleScroll}>
        {props?.children?.slice(1, (props?.children?.length || 0) - 1)}
      </section>

      {props?.children[props.children.length - 1]}
    </Container>
  );
});

export default TemplateHome;
