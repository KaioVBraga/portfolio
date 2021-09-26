import React, { useState, useRef, useEffect } from "react";
import { Container } from "./styles";
import Carousel from "nuka-carousel";
import Cover from "../../Molecules/Cover";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import useInView from "../../../hooks/useInView";
import { Navigation } from "swiper";

const CompaniesCarousel: React.FC = (props) => {
  const [images, setImage] = useState([
    "/adobe.png",
    "/google.png",
    "/puma.png",
    "/paypal.png",
  ]);

  const navigationNextRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  const [ref, isInView] = useInView();

  const nextPage = () => {
    navigationNextRef.current.click();
  };

  useEffect(() => {
    if (animated || !isInView) {
      return;
    }

    setAnimated(true);
    nextPage();
  }, [isInView, animated, nextPage]);

  return (
    <Container id="companies" ref={ref}>
      <Cover />
      <section>
        <Swiper
          slidesPerView={5}
          loop={true}
          speed={1500}
          modules={[Navigation]}
          navigation={{
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          {[...images, ...images].map((image) => (
            <SwiperSlide>
              <img src={image} />
            </SwiperSlide>
          ))}
          <div ref={navigationNextRef}></div>
        </Swiper>
      </section>
    </Container>
  );
};

export default CompaniesCarousel;
