import React from "react";
import { Container } from "./styles";

interface SkillCounterProps {
  value: number;
  name: string;
}

const SkillCounter: React.FC<SkillCounterProps> = (props) => {
  return (
    <Container>
      <div>
        <span>{props.value}</span>
        <span>%</span>
      </div>
      <p>{props.name}</p>
    </Container>
  );
};

export default SkillCounter;
