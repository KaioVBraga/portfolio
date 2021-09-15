import React, { useState, useCallback } from "react";
import HeroNavbar from "../../Molecules/HeroNavbar";
import ProjectItem from "../../Molecules/ProjectItem";
import { Container } from "./styles";
import Carousel from "nuka-carousel";

const CompaniesCarousel: React.FC = (props) => {
  const [images, setImage] = useState([
    "/adobe.png",
    "/google.png",
    "/puma.png",
    "/paypal.png",
  ]);

  return (
    <Container>
      <section>
        <Carousel
          slidesToShow={5}
          slideIndex={0}
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          wrapAround={true}
        >
          {[...images, ...images].map((image) => (
            <img src={image} />
          ))}
        </Carousel>
      </section>
    </Container>
  );
};

export default CompaniesCarousel;
