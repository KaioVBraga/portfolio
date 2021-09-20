import React, { useState } from "react";
import Cover from "../../Molecules/Cover";
import SkillCounter from "../../Molecules/SkillCounter";
import { Container } from "./styles";

const SkillsGrid: React.FC = (props) => {
  return (
    <Container id="skills">
      <Cover />
      <section>
        <header>
          <h1>My Skills</h1>
          <img src="/underline.png" />
        </header>
        <main>
          <SkillCounter value={90} name="WORDPRESS" />
          <SkillCounter value={99} name="HTML/CSS" />
          <SkillCounter value={95} name="JQUERY" />
          <SkillCounter value={100} name="DESIGN" />
        </main>
      </section>
    </Container>
  );
};

export default SkillsGrid;
