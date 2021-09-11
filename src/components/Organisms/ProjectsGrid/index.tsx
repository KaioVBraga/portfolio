import React, { useState } from "react";
import HeroNavbar from "../../Molecules/HeroNavbar";
import ProjectItem from "../../Molecules/ProjectItem";
import { Container } from "./styles";

const ProjectsGrid: React.FC = (props) => {
  return (
    <Container>
      <header>
        <h1>Portfolio</h1>
      </header>
      <main>
        <ul>
          <li>
            <ProjectItem image="https://preview.colorlib.com/theme/unfold/images/xwork_1_md.jpg.pagespeed.ic.CxxBJ-kyca.webp" />
          </li>
          <li>
            <ProjectItem image="https://preview.colorlib.com/theme/unfold/images/xwork_4_full.jpg.pagespeed.ic.6J2n2MWjzq.webp" />
          </li>
          <li>
            <ProjectItem image="https://preview.colorlib.com/theme/unfold/images/xwork_7_a_md.jpg.pagespeed.ic.H6HhTLAuEx.webp" />
          </li>
        </ul>
        <ul>
          <li>
            <ProjectItem image="https://preview.colorlib.com/theme/unfold/images/xwork_2_md.jpg.pagespeed.ic.Zlhi9Gqz7-.webp" />
          </li>
          <li>
            <ProjectItem image="https://preview.colorlib.com/theme/unfold/images/xwork_6_md.jpg.pagespeed.ic.3E8X_prL9m.webp" />
          </li>
          <li>
            <ProjectItem image="https://preview.colorlib.com/theme/unfold/images/xwork_9_a_md.jpg.pagespeed.ic.MznZMOSjsA.webp" />
          </li>
        </ul>
        <ul>
          <li>
            <ProjectItem image="https://preview.colorlib.com/theme/unfold/images/xwork_3_md.jpg.pagespeed.ic.hRGZMakQ92.webp" />
          </li>
          <li>
            <ProjectItem image="https://preview.colorlib.com/theme/unfold/images/xwork_5_md.jpg.pagespeed.ic.oZhc3Yr_Sm.webp" />
          </li>

          <li>
            <ProjectItem image="https://preview.colorlib.com/theme/unfold/images/xwork_8_md.jpg.pagespeed.ic.Jj6-_ip5V1.webp" />
          </li>
        </ul>
      </main>
    </Container>
  );
};

export default ProjectsGrid;
