import React from "react";
import { Container, Cover } from "./styles";
import { FaCopy } from "react-icons/fa";

interface ProjectItemProps {
  name?: string;
  description?: string;
  image: string;
}

const ProjectItem: React.FC<ProjectItemProps> = (props) => {
  return (
    <Container>
      <Cover>
        <header>
          <span>
            <FaCopy />
          </span>
        </header>
        <main>
          <h2>{props.name || ""}</h2>
          <span>{props.description || ""}</span>
        </main>
      </Cover>
      <img src={props.image} alt="Project Item" />
    </Container>
  );
};

export default ProjectItem;
