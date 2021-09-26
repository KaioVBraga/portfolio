import React from "react";
import { Container } from "./styles";

import AnimatedNumber from "animated-number-react";
import useInView from "../../../hooks/useInView";

interface SkillCounterProps {
  value: number;
  name: string;
}

const SkillCounter: React.FC<SkillCounterProps> = (props) => {
  return (
    <Container>
      <div>
        {/* <span>{props.value}</span> */}
        <AnimatedNumber
          value={props.value}
          formatValue={(value) => value.toFixed(0)}
          duration={2000}
          delay={500}
        />
        <span>%</span>
      </div>
      <p>{props.name}</p>
    </Container>
  );
};

export default SkillCounter;
