import React from "react";
import { Container, Content } from "./styles";

interface JournalItemProps {
  image: string;
  title: string;
  author: string;
  readTime: number;
}

const JournalItem: React.FC<JournalItemProps> = (props) => {
  return (
    <Container>
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
