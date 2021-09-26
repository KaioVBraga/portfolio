import React, { useState } from "react";
import HeroNavbar from "../../Molecules/HeroNavbar";
import ProjectItem from "../../Molecules/ProjectItem";
import Cover from "../../Molecules/Cover";
import { Container, Line } from "./styles";
import useInView from "../../../hooks/useInView";
import useAnimate from "../../../hooks/useAnimate";
import AnimatedContent from "../../Molecules/AnimatedContent";
import AnimatedCover from "../../Molecules/AnimatedCover";

const ProjectsGrid: React.FC = (props) => {
  const itemsList = [
    [
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_1_md.jpg.pagespeed.ic.CxxBJ-kyca.webp",
        name: "Shoe Rebranding",
        description: "web, branding",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_4_full.jpg.pagespeed.ic.6J2n2MWjzq.webp",
        name: "Watch",
        description: "web, packaging",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_7_a_md.jpg.pagespeed.ic.H6HhTLAuEx.webp",
        name: "Modern Building",
        description: "branding, packaging",
      },
    ],
    [
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_2_md.jpg.pagespeed.ic.Zlhi9Gqz7-.webp",
        name: "Reworking",
        description: "branding, packaging, illustration",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_6_md.jpg.pagespeed.ic.3E8X_prL9m.webp",
        name: "Reshape",
        description: "web, branding",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_9_a_md.jpg.pagespeed.ic.MznZMOSjsA.webp",
        name: "Render Packaging",
        description: "web, branding",
      },
    ],
    [
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_3_md.jpg.pagespeed.ic.hRGZMakQ92.webp",
        name: "Modern Building",
        description: "branding, packaging",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_5_md.jpg.pagespeed.ic.oZhc3Yr_Sm.webp",
        name: "Shoe Rebranding",
        description: "illustration, packaging",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_8_md.jpg.pagespeed.ic.Jj6-_ip5V1.webp",
        name: "Showreel 2019",
        description: "web, branding",
      },
    ],
  ];

  const [ref, isInView] = useInView();
  const [animate] = useAnimate({ isInView: !!isInView });

  return (
    <Container id="projects" ref={ref}>
      <Cover />
      <section>
        <header>
          <h1>Portfolio</h1>
          <AnimatedCover
            animate={animate}
            backgroundColor={"#000"}
            startVisible={true}
            seconds={4}
          />
        </header>
        <main>
          {itemsList.map((items, itemsIndex) => (
            <ul key={itemsIndex}>
              {items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <ProjectItem
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    animate={itemIndex === 0 ? animate : null}
                  />
                </li>
              ))}
            </ul>
          ))}
        </main>
      </section>
    </Container>
  );
};

export default ProjectsGrid;
