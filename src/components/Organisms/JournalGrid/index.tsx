import React, { useState } from "react";
import JournalItem from "../../Molecules/JournalItem";
import Cover from "../../Molecules/Cover";
import { Container } from "./styles";
import AnimatedCover from "../../Molecules/AnimatedCover";
import useAnimate from "../../../hooks/useAnimate";
import useInView from "../../../hooks/useInView";

const JournalGrid: React.FC = (props) => {
  const [ref, isInView] = useInView();
  const [animate] = useAnimate({ isInView: !!isInView });

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
          />
          <JournalItem
            image="https://preview.colorlib.com/theme/unfold/images/xpost_2.jpg.pagespeed.ic.JNO3Hif6vh.webp"
            title="A Mounteering Guid For Beginners"
            author="Joefrey"
            readTime={5}
          />
          <JournalItem
            image="https://preview.colorlib.com/theme/unfold/images/xpost_3.jpg.pagespeed.ic.MaHMRK8MA0.webp"
            title="A Mounteering Guid For Beginners"
            author="Joefrey"
            readTime={5}
          />
          <JournalItem
            image="https://preview.colorlib.com/theme/unfold/images/xpost_4.jpg.pagespeed.ic.n1xLNi5Ryb.webp"
            title="A Mounteering Guid For Beginners"
            author="Joefrey"
            readTime={5}
          />
          <JournalItem
            image="https://preview.colorlib.com/theme/unfold/images/xpost_5.jpg.pagespeed.ic.04dC3nvwW-.webp"
            title="A Mounteering Guid For Beginners"
            author="Joefrey"
            readTime={5}
          />
        </main>
      </section>
    </Container>
  );
};

export default JournalGrid;
