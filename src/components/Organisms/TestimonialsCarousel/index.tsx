import React, { useState, useRef, useEffect } from "react";
import HeroNavbar from "../../Molecules/HeroNavbar";
import Testimonial from "../../Molecules/Testimonial";
import Cover from "../../Molecules/Cover";
import { Container, AngleLeftContainer, AngleRightContainer } from "./styles";
// import Carousel from "nuka-carousel";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import useInView from "../../../hooks/useInView";
import useAnimate from "../../../hooks/useAnimate";

const TestimonialsCarousel: React.FC = (props) => {
  const [testimonials, setTestimonials] = useState([
    {
      testimony:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      image:
        "https://preview.colorlib.com/theme/unfold/images/xperson_woman_1.jpg.pagespeed.ic.dQ8hZxDAqi.webp",
      name: "Erica Miller",
      role: "Product Designer @Twitter",
    },
    {
      testimony:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      image:
        "https://preview.colorlib.com/theme/unfold/images/xperson_man_1.jpg.pagespeed.ic.qr707gcHxT.webp",
      name: "Eric Ingram",
      role: "Product Designer @Facebook",
    },
    {
      testimony:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      image:
        "https://preview.colorlib.com/theme/unfold/images/xperson_man_2.jpg.pagespeed.ic.BmRu8HS8xE.webp",
      name: "Ryan Mullins",
      role: "Product Designer @Shopify",
    },
  ]);

  const [animated, setAnimated] = useState(false);

  const navigationPrevRef = useRef(null);
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

    nextPage();
  }, [animate]);

  return (
    <Container id="testimonial" ref={ref}>
      <Cover />
      <section>
        <header>
          <h1>My Happy Clients</h1>
          <img src="/underline.png" />
        </header>
        <main>
          <Swiper
            slidesPerView={3}
            // slidesPerView={1}
            autoplay={true}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            // navigation
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              // el: ".swiper-pagination",
              clickable: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            speed={2000}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide>
                <Testimonial
                  key={index}
                  testimony={testimonial.testimony}
                  image={testimonial.image}
                  name={testimonial.name}
                  role={testimonial.role}
                />
              </SwiperSlide>
            ))}
            <AngleLeftContainer ref={navigationPrevRef}>
              <FaAngleLeft />
            </AngleLeftContainer>
            <AngleRightContainer ref={navigationNextRef}>
              <FaAngleRight />
            </AngleRightContainer>
          </Swiper>
        </main>
      </section>
    </Container>
  );
};

export default TestimonialsCarousel;
