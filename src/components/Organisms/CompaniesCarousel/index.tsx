import React, { useState } from "react";
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
          // easing="easeCubic(0.25)"
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
