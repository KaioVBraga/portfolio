import React, { useEffect, useState, useRef } from "react";
import useAnimate from "../../../hooks/useAnimate";
import useInView from "../../../hooks/useInView";
import AnimatedCover from "../../Molecules/AnimatedCover";
import Cover from "../../Molecules/Cover";
import ServiceItem from "../../Molecules/ServiceItem";
import { Container } from "./styles";

const ServicesGrid: React.FC = (props) => {
  const ref = useRef(null);
  const [, isInView] = useInView({ ref });
  const [animate] = useAnimate({ isInView: !!isInView });
  const [animateItems, setAnimateItems] = useState([false, false, false]);

  const itemsList = [
    [
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/svg/004-percentage.svg",
        title: "Node.js",
        description: "Worked with building and maintaining web api's.",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/svg/006-goal.svg",

        title: "Scrum",
        description: "Soft Skill aqcuired during working in projects.",
      },
    ],
    [
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/svg/002-chat.svg",

        title: "React.js",
        description: "Worked with building and maintaining web pages.",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/svg/001-options.svg",
        title: "PHP",
        description: "Worked with maintaining web pages.",
      },
    ],
    [
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/svg/004-percentage.svg",

        title: "Next.js",
        description: "Worked with building and maintaining web pages.",
      },
      {
        image:
          "https://preview.colorlib.com/theme/unfold/images/svg/005-line-chart.svg",

        title: "Python",
        description: "Worked in personal projects",
      },
    ],
  ];

  useEffect(() => {
    if (!animate) {
      return;
    }

    if (!animateItems[0]) {
      setTimeout(() => {
        setAnimateItems((animateItems) => {
          const newAnimateItems = [...animateItems];
          newAnimateItems[0] = true;
          return newAnimateItems;
        });
      }, 200);
    }

    if (!animateItems[1]) {
      setTimeout(() => {
        setAnimateItems((animateItems) => {
          const newAnimateItems = [...animateItems];
          newAnimateItems[1] = true;
          return newAnimateItems;
        });
      }, 350);
    }

    if (!animateItems[2]) {
      setTimeout(() => {
        setAnimateItems((animateItems) => {
          const newAnimateItems = [...animateItems];
          newAnimateItems[2] = true;
          return newAnimateItems;
        });
      }, 500);
    }
  }, [animate, animateItems]);

  return (
    <Container id="services" ref={ref}>
      <Cover />
      <section>
        <header>
          <h1>My Skills</h1>
          <img src="/underline.png" />
          <AnimatedCover
            animate={animate}
            backgroundColor={"#000"}
            startVisible={true}
          />
        </header>
        <main>
          {itemsList.map((items, itemsIndex) => (
            <ul key={itemsIndex}>
              {items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <ServiceItem
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    animate={animateItems[itemsIndex]}
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

export default ServicesGrid;
