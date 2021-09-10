import React, { useState } from "react";
import { Container, Input, Button } from "./styles";

const HeroNavbar: React.FC<HeroNavbarProps> = (props) => {
  return (
    <Container>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Portfolio</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Services</a>
        </li>
      </ul>

      <h2>Unfold</h2>

      <ul>
        <li>
          <a>Skills</a>
        </li>
        <li>
          <a>Testimonial</a>
        </li>
        <li>
          <a>Journal</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </Container>
  );
};

export default HeroNavbar;
