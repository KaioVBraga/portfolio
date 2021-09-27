import React, { useEffect, useState } from "react";
import useAnimate from "../../../hooks/useAnimate";
import useInView from "../../../hooks/useInView";
import AnimatedCover from "../../Molecules/AnimatedCover";
import Cover from "../../Molecules/Cover";
import SkillCounter from "../../Molecules/SkillCounter";
import { Container } from "./styles";

const SkillsGrid: React.FC = (props) => {
  const [ref, isInView] = useInView();

  const [animateItems, setAnimateItems] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [animate] = useAnimate({ isInView: !!isInView });

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isInView || show) {
      return;
    }

    setShow(true);
  }, [isInView, show]);

  useEffect(() => {
    if (!animate) {
      return;
    }

    if (!animateItems[0]) {
      setTimeout(() => {
        setAnimateItems((animateItems) => {
          const newAnimateItems = [...animateItems];
          newAnimateItems[0] = true;
          return newAnimateItems;
        });
      }, 200);
    }

    if (!animateItems[1]) {
      setTimeout(() => {
        setAnimateItems((animateItems) => {
          const newAnimateItems = [...animateItems];
          newAnimateItems[1] = true;
          return newAnimateItems;
        });
      }, 350);
    }

    if (!animateItems[2]) {
      setTimeout(() => {
        setAnimateItems((animateItems) => {
          const newAnimateItems = [...animateItems];
          newAnimateItems[2] = true;
          return newAnimateItems;
        });
      }, 500);
    }

    if (!animateItems[3]) {
      setTimeout(() => {
        setAnimateItems((animateItems) => {
          const newAnimateItems = [...animateItems];
          newAnimateItems[3] = true;
          return newAnimateItems;
        });
      }, 650);
    }
  }, [animate, animateItems]);

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
              <SkillCounter
                value={90}
                name="WORDPRESS"
                animate={animateItems[0]}
              />
              <SkillCounter
                value={99}
                name="HTML/CSS"
                animate={animateItems[1]}
              />
              <SkillCounter
                value={95}
                name="JQUERY"
                animate={animateItems[2]}
              />
              <SkillCounter
                value={100}
                name="DESIGN"
                animate={animateItems[3]}
              />
            </>
          )}
        </main>
      </section>
    </Container>
  );
};

export default SkillsGrid;
