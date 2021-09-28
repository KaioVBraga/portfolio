import React, { useRef } from "react";
import useAnimate from "../../../hooks/useAnimate";
import useInView from "../../../hooks/useInView";
import Button from "../../Atoms/Button";
import AnimatedCover from "../../Molecules/AnimatedCover";
import Cover from "../../Molecules/Cover";
import ProjectItem from "../../Molecules/ProjectItem";
import {
  Container,
  FormContainer,
  InfoContainer,
  InputContainer,
  TextAreaContainer,
} from "./styles";

const GetInTouch: React.FC = () => {
  const ref = useRef(null);
  const [, isInView] = useInView({ ref });
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
              <InputContainer>
                <input placeholder="NAME" />
                <AnimatedCover
                  animate={animate}
                  height={"100%"}
                  backgroundColor="#000"
                  seconds={2}
                  startVisible={true}
                />
              </InputContainer>

              <InputContainer>
                <input placeholder="EMAIL" />
                <AnimatedCover
                  animate={animate}
                  height={"100%"}
                  backgroundColor="#000"
                  seconds={2}
                  startVisible={true}
                />
              </InputContainer>
            </fieldset>
            <fieldset>
              <TextAreaContainer>
                <textarea placeholder="WRITE YOUR MESSAGE..." />
                <AnimatedCover
                  animate={animate}
                  height={"100%"}
                  backgroundColor="#000"
                  seconds={2}
                  startVisible={true}
                />
              </TextAreaContainer>
            </fieldset>
            <fieldset>
              <Button>SEND MESSAGE</Button>
              <AnimatedCover
                animate={animate}
                height={"100%"}
                backgroundColor="#000"
                seconds={2}
                startVisible={true}
              />
            </fieldset>
          </FormContainer>
          <InfoContainer>
            <div>
              <span>EMAIL</span>
              <a>info@yourdomain.com</a>
              <AnimatedCover
                animate={animate}
                height={"100%"}
                backgroundColor="#000"
                seconds={2}
                startVisible={true}
              />
            </div>
            <div>
              <span>PHONE</span>
              <a>+12 345 6789 012</a>
              <AnimatedCover
                animate={animate}
                height={"100%"}
                backgroundColor="#000"
                seconds={2}
                startVisible={true}
              />
            </div>
            <div>
              <span>ADDRESS</span>
              <a>
                273 South Riverview Rd.
                <br /> New York, NY 10011
              </a>
              <AnimatedCover
                animate={animate}
                height={"100%"}
                backgroundColor="#000"
                seconds={2}
                startVisible={true}
              />
            </div>
          </InfoContainer>
        </main>
      </section>
    </Container>
  );
};

export default GetInTouch;
