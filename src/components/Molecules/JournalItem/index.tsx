import React, { useEffect, useState } from "react";
import { Container, Content } from "./styles";

interface JournalItemProps {
  image: string;
  title: string;
  author: string;
  readTime: number;
  animate?: boolean;
}

const JournalItem: React.FC<JournalItemProps> = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!props.animate || show) {
      return;
    }

    setTimeout(() => setShow(true), 800);
  }, [props.animate, show]);

  return (
    <Container animate={props.animate} show={show}>
      <img src={props.image} alt={props.title || ""} />
      <Content>
        <section>
          <h3>{props.title}</h3>
          <span>
            By {props.author} • {props.readTime} min read
          </span>
        </section>
      </Content>
    </Container>
  );
};

export default JournalItem;
