import React from "react";
import { Container, Cover } from "./styles";
import { FaCopy } from "react-icons/fa";
import AnimatedCover from "../AnimatedCover";
import useInView from "../../../hooks/useInView";
import useAnimate from "../../../hooks/useAnimate";
import AnimatedContent from "../AnimatedContent";

interface ProjectItemProps {
  name?: string;
  description?: string;
  image: string;
}

const ProjectItem: React.FC<ProjectItemProps> = (props) => {
  const [ref, isInView] = useInView();
  const [animate] = useAnimate({ isInView: !!isInView });

  return (
    <Container ref={ref} animate={animate}>
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
      <AnimatedCover height={"100%"} animate={animate} />

      <img src={props.image} alt="Project Item" />
    </Container>
  );
};

export default ProjectItem;
