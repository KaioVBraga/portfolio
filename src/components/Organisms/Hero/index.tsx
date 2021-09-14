import React from "react";
import HeroNavbar from "../../Molecules/HeroNavbar";
import { Container, Finger } from "./styles";

const Hero: React.FC = () => {
  return (
    <Container>
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
