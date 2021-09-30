import React, { useEffect, useState, useRef } from "react";
import Button from "../../Atoms/Button";
import HeroNavbar from "../../Molecules/HeroNavbar";
import Cover from "../../Molecules/Cover";
import { Container, ImageContainer, TextContainer } from "./styles";
import useInView from "../../../hooks/useInView";
import useAnimate from "../../../hooks/useAnimate";
import AnimatedContent from "../../Molecules/AnimatedContent";
import AnimatedCover from "../../Molecules/AnimatedCover";

const AboutMe: React.FC = (props) => {
  const ref = useRef(null);
  const [, isInView] = useInView({ ref });
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
            <h3>
              We can make it together
              <AnimatedCover
                animate={animate}
                height={"100%"}
                backgroundColor="#000"
                seconds={2}
                startVisible={true}
              />
            </h3>
            <p>
              Worked for one year and half at Voitto.
              <AnimatedCover
                animate={animate}
                height={"100%"}
                backgroundColor="#000"
                seconds={2}
                startVisible={true}
              />
            </p>
            {/* <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
              <AnimatedCover
                animate={animate}
                height={"100%"}
                backgroundColor="#000"
                seconds={2}
                startVisible={true}
              />
            </p> */}
            <p>
              <Button>DOWNLOAD MY CV</Button>
              <AnimatedCover
                animate={animate}
                height={"100%"}
                backgroundColor="#000"
                seconds={2}
                startVisible={true}
              />
            </p>
          </TextContainer>
        </main>
      </section>
    </Container>
  );
};

export default AboutMe;
