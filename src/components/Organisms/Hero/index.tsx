import React, { useEffect, useCallback, useState, useRef } from "react";
import useInView from "../../../hooks/useInView";
import HeroNavbar from "../../Molecules/HeroNavbar";
import AnimatedCover from "../../Molecules/AnimatedCover";
import AnimatedContent from "../../Molecules/AnimatedContent";
import { Container, Finger } from "./styles";
import useAnimate from "../../../hooks/useAnimate";

interface Props {
  setIsDisplayingHero: (value: any) => void;
  scrollTo: (value: any) => any;
}

const Hero: React.FC<Props> = (props) => {
  const [ref, isInView] = useInView();
  const [animate] = useAnimate({ isInView: !!isInView });

  useEffect(() => {
    props.setIsDisplayingHero(isInView);
  }, [props, isInView]);

  return (
    <Container ref={ref} id="home-hero" animate={animate}>
      <header>
        <HeroNavbar scrollTo={props.scrollTo} />
      </header>
      <main>
        <section>
          <h1>
            <AnimatedContent animate={animate} seconds={1}>
              Unfold
            </AnimatedContent>
            <AnimatedCover animate={animate} />
          </h1>
          <p>
            <AnimatedContent animate={animate} seconds={1}>
              I’m Glenn Chapman Hoyer A Product
              <br /> Designer Based In San Francisco
            </AnimatedContent>
            <AnimatedCover animate={animate} />
          </p>
        </section>
        <section>
          <Finger>
            <span></span>
          </Finger>
        </section>
      </main>
    </Container>
  );
};

export default Hero;
