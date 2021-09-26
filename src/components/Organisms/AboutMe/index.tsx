import React, { useEffect, useState } from "react";
import Button from "../../Atoms/Button";
import HeroNavbar from "../../Molecules/HeroNavbar";
import Cover from "../../Molecules/Cover";
import { Container, ImageContainer, TextContainer } from "./styles";
import useInView from "../../../hooks/useInView";
import useAnimate from "../../../hooks/useAnimate";
import AnimatedContent from "../../Molecules/AnimatedContent";
import AnimatedCover from "../../Molecules/AnimatedCover";

const AboutMe: React.FC = (props) => {
  const [ref, isInView] = useInView();
  const [animate] = useAnimate({ isInView: !!isInView });
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (showImage && !animate) {
      return;
    }

    setTimeout(() => setShowImage(true), 1500);
  }, [animate, showImage]);

  return (
    <Container id="about" ref={ref}>
      <Cover />
      <section>
        <header>
          <h1>About Me</h1>
          <img src="/underline.png" />
          <AnimatedCover
            animate={animate}
            backgroundColor={"#000"}
            startVisible={true}
          />
        </header>
        <main>
          <ImageContainer animate={animate} show={showImage}>
            <img src="https://preview.colorlib.com/theme/unfold/images/xabout_me_pic2.jpg.pagespeed.ic.MWRYgrv9or.webp" />
            <AnimatedCover
              animate={animate}
              height={"100%"}
              backgroundColor={"#d63447"}
            />
          </ImageContainer>
          <TextContainer>
            <h3>We can make it together</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there <a href="#">live the blind</a>{" "}
              texts.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p>
              <Button>DOWNLOAD MY CV</Button>
            </p>
          </TextContainer>
        </main>
      </section>
    </Container>
  );
};

export default AboutMe;
