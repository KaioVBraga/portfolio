import React, { useState } from "react";
import HeroNavbar from "../../Molecules/HeroNavbar";
import { Container, Input, Button } from "./styles";

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <Container>
      <header>
        <HeroNavbar />
      </header>
      <main>
        <section>
          <h1>Unfold</h1>
          <p>
            I'm Glenn Chapman Hoyer A Product Designer Based In San Francisco
          </p>
        </section>
      </main>
    </Container>
  );
};

export default Navbar;
