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
        image: "/Screenshot 2021-09-29 at 21-56-51 Habit Tracker(1).png",
        name: "Habit Tracker",
        description: "Web Application [React.js, Node.js]",
        href: "https://github.com/KaioVBraga/habit-tracker-react",
      },
      {
        image: "/Screenshot from 2021-09-29 22-07-47.png",
        name: "Think Lean Six Sigma",
        description: "Website [Next.js]",
        href: "https://www.thinkleansixsigma.com",
      },
      {
        image:
          // "https://preview.colorlib.com/theme/unfold/images/xwork_7_a_md.jpg.pagespeed.ic.H6HhTLAuEx.webp",
          "/Screenshot 2021-09-29 at 22-29-45 https youtube-flax vercel app.png",
        name: "Youtube Clone",
        description: "Web Application [Next.js, Node.js]",
        href: "https://github.com/KaioVBraga/youtube",
      },
    ],
    [
      {
        image:
          // "https://preview.colorlib.com/theme/unfold/images/xwork_2_md.jpg.pagespeed.ic.Zlhi9Gqz7-.webp",
          "/Screenshot 2021-09-29 at 22-25-38 Sudoku.png",
        name: "Sudoku",
        description: "Game [React.js]",
        href: "https://github.com/KaioVBraga/sudoku",
      },
      {
        image: "/estacionamento-capa2019-01-1536x805.jpg",
        name: "Scanner Vagas",
        description: "Desktop App [Python]",
        href: "https://github.com/KaioVBraga/scanner-vagas",
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
        image: "/Screenshot from 2021-09-29 22-32-19.png",
        name: "Chess-C",
        description: "Game [C]",
        href: "https://github.com/KaioVBraga/chess-c",
      },
      {
        image: "/r6YemvF9_400x400.jpg",
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
