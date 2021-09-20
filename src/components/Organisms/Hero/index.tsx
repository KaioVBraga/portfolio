import React, { useEffect, useCallback, useState, useRef } from "react";
import useInView from "../../../hooks/useInView";
import HeroNavbar from "../../Molecules/HeroNavbar";
import AnimatedCover from "../../Molecules/AnimatedCover";
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
    <Container ref={ref} id="home-hero">
      <header>
        <HeroNavbar scrollTo={props.scrollTo} />
      </header>
      <main>
        <section>
          <h1>
            Unfold
            <AnimatedCover animate={animate} />
          </h1>
          <p>
            I’m Glenn Chapman Hoyer A Product Designer Based In San Francisco
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
