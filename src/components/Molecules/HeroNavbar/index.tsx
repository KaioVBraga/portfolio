import React, { useState } from "react";
import { Container, ItemsList } from "./styles";

const HeroNavbar: React.FC<HeroNavbarProps> = (props) => {
  return (
    <Container>
      <ItemsList align="right">
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
      </ItemsList>

      <h2>Unfold</h2>

      <ItemsList align="left">
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
      </ItemsList>
    </Container>
  );
};

export default HeroNavbar;
