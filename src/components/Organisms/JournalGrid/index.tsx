import React, { useState } from "react";
import JournalItem from "../../Molecules/JournalItem";
import { Container } from "./styles";

const JournalGrid: React.FC = (props) => {
  return (
    <Container>
      <section>
        <header>
          <h1>My Journal</h1>
          <img src="/underline.png" />
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
