import React, { useState } from "react";
import Button from "../../Atoms/Button";
import ProjectItem from "../../Molecules/ProjectItem";
import { Container, FormContainer, InfoContainer } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <section>
        <header>
          <h1>
            Kaio Braga<span>.</span>
          </h1>
        </header>
        <nav>
          <ul>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </nav>
        <main>
          <p>© 2021 | Made with {"<"}3 by Kaio Braga</p>
        </main>
      </section>
    </Container>
  );
};

export default Footer;
