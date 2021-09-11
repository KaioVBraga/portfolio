import React, { useState } from "react";
import HeroNavbar from "../../Molecules/HeroNavbar";
import ProjectItem from "../../Molecules/ProjectItem";
import { Container } from "./styles";

const CompaniesCarousel: React.FC = (props) => {
  return (
    <Container>
      <section>
        <img src="/adobe.png" />
        <img src="/google.png" />
        <img src="/puma.png" />
        <img src="/paypal.png" />
      </section>
    </Container>
  );
};

export default CompaniesCarousel;
