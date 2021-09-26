import React, { useState, useRef, useEffect } from "react";
import { Container } from "./styles";
import Carousel from "nuka-carousel";
import Cover from "../../Molecules/Cover";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import useInView from "../../../hooks/useInView";
import { Navigation } from "swiper";
import useAnimate from "../../../hooks/useAnimate";
import AnimatedCover from "../../Molecules/AnimatedCover";
import CompanyItem from "../../Molecules/CompanyItem";

const CompaniesCarousel: React.FC = (props) => {
  const [images, setImage] = useState([
    "/adobe.png",
    "/google.png",
    "/puma.png",
    "/paypal.png",
  ]);

  const navigationNextRef = useRef(null);

  const [ref, isInView] = useInView();

  const [animate] = useAnimate({ isInView: !!isInView });

  const nextPage = () => {
    navigationNextRef.current.click();
  };

  useEffect(() => {
    if (!animate) {
      return;
    }

    setTimeout(() => nextPage(), 1200);
  }, [animate]);

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
              <CompanyItem image={image} animate={animate} />
            </SwiperSlide>
          ))}
          <div ref={navigationNextRef}></div>
        </Swiper>
      </section>
    </Container>
  );
};

export default CompaniesCarousel;
