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
            Unfold<span>.</span>
          </h1>
        </header>
        <nav>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Dribble</a>
            </li>
            <li>
              <a href="#">Behance</a>
            </li>
          </ul>
        </nav>
        <main>
          <p>
            Copyright © 2021 All rights reserved | This template is made with{" "}
            {"<"}3 by Colorlib
          </p>
        </main>
      </section>
    </Container>
  );
};

export default Footer;
