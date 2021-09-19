import React, { useState } from "react";
import HeroNavbar from "../../Molecules/HeroNavbar";
import Testimonial from "../../Molecules/Testimonial";
import Cover from "../../Molecules/Cover";
import { Container } from "./styles";
import Carousel from "nuka-carousel";

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

  return (
    <Container>
      <Cover />
      <section>
        <header>
          <h1>My Happy Clients</h1>
          <img src="/underline.png" />
        </header>
        <main>
          <Carousel
            slidesToShow={1}
            slideIndex={0}
            renderCenterLeftControls={null}
            renderCenterRightControls={null}
            wrapAround={true}
            // easing="easeCubic(0.25)"
          >
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                testimony={testimonial.testimony}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </Carousel>
        </main>
      </section>
    </Container>
  );
};

export default TestimonialsCarousel;
