import React, { useState } from "react";
import HeroNavbar from "../../Molecules/HeroNavbar";
import ProjectItem from "../../Molecules/ProjectItem";
import { Container, ImageContainer, TextContainer } from "./styles";

const AboutMe: React.FC = (props) => {
  return (
    <Container>
      <section>
        <header>
          <h1>About Me</h1>
          <img src="/underline.png" />
        </header>
        <main>
          <ImageContainer>
            <img src="https://preview.colorlib.com/theme/unfold/images/xabout_me_pic2.jpg.pagespeed.ic.MWRYgrv9or.webp" />
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
            {/* <p>
              <a href="#" class="btn btn-outline-pill btn-custom-light">
                Download my CV
              </a>
            </p> */}
          </TextContainer>
        </main>
      </section>
    </Container>
  );
};

export default AboutMe;
