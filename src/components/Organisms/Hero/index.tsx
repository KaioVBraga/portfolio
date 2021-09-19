import React, { useEffect, useCallback, useState, useRef } from "react";
import HeroNavbar from "../../Molecules/HeroNavbar";
import { Container, Finger } from "./styles";

interface Props {
  setIsDisplayingHero: (value: any) => void;
}

const Hero: React.FC<Props> = (props) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (!ref || !ref?.current || display) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        props.setIsDisplayingHero(entries[0].isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-10px 0px 0px 0px",
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [display]);

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
