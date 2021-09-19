import React, { useState, useCallback } from "react";
import { Container } from "./styles";

interface Props {
  setGoingUp: (value: any) => void;
}

const TemplateHome: React.FC<Props> = (props) => {
  const [previousScrollTop, setPreviousScrollTop] = useState(0);

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
      {props.children[0]}

      <section onScroll={handleScroll}>
        {props?.children?.slice(1, (props?.children?.length || 0) - 1)}
      </section>

      {props.children[props.children.length - 1]}
    </Container>
  );
};

export default TemplateHome;
