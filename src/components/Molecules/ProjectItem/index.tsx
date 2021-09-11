import React from "react";
import { Container, Cover } from "./styles";

interface ProjectItemProps {
  image: string;
}

const ProjectItem: React.FC<ProjectItemProps> = (props) => {
  return (
    <Container>
      <Cover />
      <img src={props.image} alt="Project Item" />
    </Container>
  );
};

export default ProjectItem;
