import React, { useRef } from "react";
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
        name: "Habit Tracker",
        description: "Web Application [React.js, Node.js]",
        href: "https://github.com/KaioVBraga/habit-tracker-react",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_4_full.jpg.pagespeed.ic.6J2n2MWjzq.webp",
        name: "Think Lean Six Sigma",
        description: "Website [Next.js]",
        href: "https://www.thinkleansixsigma.com",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_7_a_md.jpg.pagespeed.ic.H6HhTLAuEx.webp",
        name: "Youtube Clone",
        description: "Web Application [Next.js, Node.js]",
        href: "https://github.com/KaioVBraga/youtube",
      },
    ],
    [
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_2_md.jpg.pagespeed.ic.Zlhi9Gqz7-.webp",
        name: "Sudoku",
        description: "Game [React.js]",
        href: "https://github.com/KaioVBraga/sudoku",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_6_md.jpg.pagespeed.ic.3E8X_prL9m.webp",
        name: "Chess-C",
        description: "Game [C]",
        href: "https://github.com/KaioVBraga/chess-c",
      },
      // {
      //   image:
      //     "https://preview.colorlib.com/theme/unfold/images/xwork_9_a_md.jpg.pagespeed.ic.MznZMOSjsA.webp",
      //   name: "Sistema de Reconhecimento de Vagas",
      //   description: "web, branding [Python]",
      // },
    ],
    [
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_3_md.jpg.pagespeed.ic.hRGZMakQ92.webp",
        name: "Scanner Vagas",
        description: "Desktop App [Python]",
        href: "https://github.com/KaioVBraga/scanner-vagas",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/xwork_5_md.jpg.pagespeed.ic.oZhc3Yr_Sm.webp",
        name: "More Projects",
        description: "Github",
        href: "https://github.com/KaioVBraga",
      },
      // {
      //   image:
      //     "https://preview.colorlib.com/theme/unfold/images/xwork_8_md.jpg.pagespeed.ic.Jj6-_ip5V1.webp",
      //   name: "Showreel 2019",
      //   description: "web, branding",
      // },
    ],
  ];

  const ref = useRef(null);

  const [, isInView] = useInView({ ref });
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
                    href={item.href}
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
