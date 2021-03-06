import React, { useEffect, useState, useRef, useCallback } from "react";
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
  animate?: any;
  href?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = (props) => {
  const ref = useRef(null);
  const [, isInView] = useInView({ ref });
  const [animate] = useAnimate({ isInView: !!isInView });
  const [show, setShow] = useState(false);

  const handleClick = useCallback(() => {
    if (!props.href) {
      return;
    }

    window.open(props.href);
  }, [props]);

  useEffect(() => {
    if (!animate || show) {
      return;
    }

    setShow(true);
  }, [animate]);

  return (
    <Container
      ref={ref}
      animate={props.animate !== null ? props.animate : animate}
      show={show}
      onClick={handleClick}
    >
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
      <AnimatedCover
        height={"100%"}
        animate={props.animate !== null ? props.animate : animate}
      />

      <img src={props.image} alt="Project Item" />
    </Container>
  );
};

export default ProjectItem;
