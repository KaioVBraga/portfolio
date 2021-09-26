import React, { useEffect, useState } from "react";
import useAnimate from "../../../hooks/useAnimate";
import useInView from "../../../hooks/useInView";
import AnimatedCover from "../../Molecules/AnimatedCover";
import Cover from "../../Molecules/Cover";
import SkillCounter from "../../Molecules/SkillCounter";
import { Container } from "./styles";

const SkillsGrid: React.FC = (props) => {
  const [ref, isInView] = useInView();
  const [animate] = useAnimate({ isInView: !!isInView });

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isInView || show) {
      return;
    }

    setShow(true);
  }, [isInView, show]);

  return (
    <Container id="skills" ref={ref}>
      <Cover />
      <section>
        <header>
          <h1>My Skills</h1>
          <img src="/underline.png" />
          <AnimatedCover
            animate={animate}
            backgroundColor={"#000"}
            startVisible={true}
          />
        </header>
        <main>
          {show && (
            <>
              <SkillCounter value={90} name="WORDPRESS" />
              <SkillCounter value={99} name="HTML/CSS" />
              <SkillCounter value={95} name="JQUERY" />
              <SkillCounter value={100} name="DESIGN" />
            </>
          )}
        </main>
      </section>
    </Container>
  );
};

export default SkillsGrid;
