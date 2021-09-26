import React, { useState } from "react";
import useAnimate from "../../../hooks/useAnimate";
import useInView from "../../../hooks/useInView";
import Button from "../../Atoms/Button";
import AnimatedCover from "../../Molecules/AnimatedCover";
import Cover from "../../Molecules/Cover";
import ProjectItem from "../../Molecules/ProjectItem";
import { Container, FormContainer, InfoContainer } from "./styles";

const GetInTouch: React.FC = () => {
  const [ref, isInView] = useInView();
  const [animate] = useAnimate({ isInView: !!isInView });

  return (
    <Container id="get-in-touch" ref={ref}>
      <Cover />
      <section>
        <header>
          <h1>Get In Touch</h1>
          <img src="/underline.png" />
          <AnimatedCover
            animate={animate}
            backgroundColor={"#000"}
            startVisible={true}
          />
        </header>
        <main>
          <FormContainer>
            <fieldset>
              <input placeholder="NAME" />
              <input placeholder="EMAIL" />
            </fieldset>
            <fieldset>
              <textarea placeholder="WRITE YOUR MESSAGE..." />
            </fieldset>
            <fieldset>
              <Button>SEND MESSAGE</Button>
            </fieldset>
          </FormContainer>
          <InfoContainer>
            <div>
              <span>EMAIL</span>
              <a>info@yourdomain.com</a>
            </div>
            <div>
              <span>PHONE</span>
              <a>+12 345 6789 012</a>
            </div>
            <div>
              <span>ADDRESS</span>
              <a>
                273 South Riverview Rd.
                <br /> New York, NY 10011
              </a>
            </div>
          </InfoContainer>
        </main>
      </section>
    </Container>
  );
};

export default GetInTouch;
