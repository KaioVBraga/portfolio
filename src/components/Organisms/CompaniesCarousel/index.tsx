import React, { useState } from "react";
import { Container } from "./styles";
import Carousel from "nuka-carousel";
import Cover from "../../Molecules/Cover";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const CompaniesCarousel: React.FC = (props) => {
  const [images, setImage] = useState([
    "/adobe.png",
    "/google.png",
    "/puma.png",
    "/paypal.png",
  ]);

  return (
    <Container id="companies">
      <Cover />
      <section>
        <Swiper slidesPerView={5} loop={true}>
          {images.map((image) => (
            <SwiperSlide>
              <img src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Container>
  );
};

export default CompaniesCarousel;
