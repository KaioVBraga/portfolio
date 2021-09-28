import React, { useEffect, useRef, useState } from "react";
import JournalItem from "../../Molecules/JournalItem";
import Cover from "../../Molecules/Cover";
import { Container } from "./styles";
import AnimatedCover from "../../Molecules/AnimatedCover";
import useAnimate from "../../../hooks/useAnimate";
import useInView from "../../../hooks/useInView";

const JournalGrid: React.FC = (props) => {
  const ref = useRef(null);
  const [, isInView] = useInView({ ref });
  const [animate] = useAnimate({ isInView: !!isInView });

  const [animateItems, setAnimateItems] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

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

    if (!animateItems[3]) {
      setTimeout(() => {
        setAnimateItems((animateItems) => {
          const newAnimateItems = [...animateItems];
          newAnimateItems[3] = true;
          return newAnimateItems;
        });
      }, 650);
    }

    if (!animateItems[4]) {
      setTimeout(() => {
        setAnimateItems((animateItems) => {
          const newAnimateItems = [...animateItems];
          newAnimateItems[3] = true;
          return newAnimateItems;
        });
      }, 800);
    }
  }, [animate, animateItems]);

  return (
    <Container id="journal" ref={ref}>
      <Cover />
      <section>
        <header>
          <h1>My Journal</h1>
          <img src="/underline.png" />

          <AnimatedCover
            animate={animate}
            backgroundColor={"#000"}
            startVisible={true}
          />
        </header>
        <main>
          <JournalItem
            image="https://preview.colorlib.com/theme/unfold/images/xpost_1.jpg.pagespeed.ic.nHW6smwKot.webp"
            title="A Mounteering Guid For Beginners"
            author="Joefrey"
            readTime={5}
            animate={animateItems[0]}
          />
          <JournalItem
            image="https://preview.colorlib.com/theme/unfold/images/xpost_2.jpg.pagespeed.ic.JNO3Hif6vh.webp"
            title="A Mounteering Guid For Beginners"
            author="Joefrey"
            readTime={5}
            animate={animateItems[1]}
          />
          <JournalItem
            image="https://preview.colorlib.com/theme/unfold/images/xpost_3.jpg.pagespeed.ic.MaHMRK8MA0.webp"
            title="A Mounteering Guid For Beginners"
            author="Joefrey"
            readTime={5}
            animate={animateItems[2]}
          />
          <JournalItem
            image="https://preview.colorlib.com/theme/unfold/images/xpost_4.jpg.pagespeed.ic.n1xLNi5Ryb.webp"
            title="A Mounteering Guid For Beginners"
            author="Joefrey"
            readTime={5}
            animate={animateItems[3]}
          />
          <JournalItem
            image="https://preview.colorlib.com/theme/unfold/images/xpost_5.jpg.pagespeed.ic.04dC3nvwW-.webp"
            title="A Mounteering Guid For Beginners"
            author="Joefrey"
            readTime={5}
            animate={animateItems[4]}
          />
        </main>
      </section>
    </Container>
  );
};

export default JournalGrid;
