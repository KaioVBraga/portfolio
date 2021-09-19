import React, { useState } from "react";
import HeroNavbar from "../../Molecules/HeroNavbar";
import Testimonial from "../../Molecules/Testimonial";
import Cover from "../../Molecules/Cover";
import { Container } from "./styles";

const TestimonialsCarousel: React.FC = (props) => {
  return (
    <Container>
      <Cover />
      <section>
        <Testimonial
          testimony="
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          "
          image="https://preview.colorlib.com/theme/unfold/images/xperson_woman_1.jpg.pagespeed.ic.dQ8hZxDAqi.webp"
          name="Erica Miller"
          role="Product Designer @Twitter"
        />
        {/* <Testimonial
          testimony="
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          "
          image="https://preview.colorlib.com/theme/unfold/images/xperson_woman_1.jpg.pagespeed.ic.dQ8hZxDAqi.webp"
          name="Erica Miller"
          role="Product Designer @Twitter"
        />
        <Testimonial
          testimony="
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          "
          image="https://preview.colorlib.com/theme/unfold/images/xperson_woman_1.jpg.pagespeed.ic.dQ8hZxDAqi.webp"
          name="Erica Miller"
          role="Product Designer @Twitter"
        />
        <Testimonial
          testimony="
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          "
          image="https://preview.colorlib.com/theme/unfold/images/xperson_woman_1.jpg.pagespeed.ic.dQ8hZxDAqi.webp"
          name="Erica Miller"
          role="Product Designer @Twitter"
        /> */}
      </section>
    </Container>
  );
};

export default TestimonialsCarousel;
