import React from "react";
import { Container } from "./styles";

interface Props {
  testimony: string;
  image: string;
  name: string;
  role: string;
}

const Testimonial: React.FC<Props> = (props) => {
  return (
    <Container>
      <main>
        <span>“</span>
        <blockquote>{props.testimony}</blockquote>
      </main>
      <footer>
        <img src={props.image} width="90px" height="90px" />
        <h3>{props.name}</h3>
        <span>{props.role}</span>
      </footer>
    </Container>
  );
};

export default Testimonial;
