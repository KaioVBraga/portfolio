import React, { useEffect, useCallback, useState, useRef } from "react";
import useInView from "../../../hooks/useInView";
import HeroNavbar from "../../Molecules/HeroNavbar";
import { Container, Finger } from "./styles";

interface Props {
  setIsDisplayingHero: (value: any) => void;
}

const Hero: React.FC<Props> = (props) => {
  const [ref, isInView] = useInView();

  useEffect(() => {
    props.setIsDisplayingHero(isInView);
  }, [props, isInView]);

  return (
    <Container ref={ref}>
      <header>
        <HeroNavbar />
      </header>
      <main>
        <section>
          <h1>Unfold</h1>
          <p>
            I’m Glenn Chapman Hoyer A Product Designer Based In San Francisco
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
