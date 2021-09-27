import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import AnimatedNumber from "animated-number-react";
import useInView from "../../../hooks/useInView";

interface SkillCounterProps {
  value: number;
  name: string;
  animate?: boolean;
}

const SkillCounter: React.FC<SkillCounterProps> = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!props.animate || show) {
      return;
    }

    setTimeout(() => setShow(true), 800);
  }, [props.animate, show]);

  return (
    <Container animate={props.animate} show={show}>
      <div>
        <AnimatedNumber
          value={props.value}
          formatValue={(value) => value.toFixed(0)}
          duration={2000}
        />
        <span>%</span>
      </div>
      <p>{props.name}</p>
    </Container>
  );
};

export default SkillCounter;
