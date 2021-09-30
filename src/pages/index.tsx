//@ts-nocheck

import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { ICardYoutube } from "../@types/Components/Molecules/CardYoutube/types";
import { YoutubeVideoResponse } from "../@types/Pages/Home/types";
import Navbar from "../components/Organisms/Navbar";
import Hero from "../components/Organisms/Hero";
import ProjectsGrid from "../components/Organisms/ProjectsGrid";
import CompaniesCarousel from "../components/Organisms/CompaniesCarousel";
import AboutMe from "../components/Organisms/AboutMe";
import ServicesGrid from "../components/Organisms/ServicesGrid";
import SkillsGrid from "../components/Organisms/SkillsGrid";
import TestimonialsCarousel from "../components/Organisms/TestimonialsCarousel";
import JournalGrid from "../components/Organisms/JournalGrid";
import GetInTouch from "../components/Organisms/GetInTouch";
import Footer from "../components/Organisms/Footer";
import FakeFooter from "../components/Organisms/FakeFooter";
import TemplateHome from "../components/Templates/Home";
import api from "../services/apis";

const Home: NextPage = () => {
  const [goingUp, setGoingUp] = useState(false);
  const [isDisplayingHero, setIsDisplayingHero] = useState(false);
  const ref = useRef(null);

  const scrollTo = (destiny: any) => {
    if (!ref?.current) {
      return;
    }

    const el = document.getElementById(destiny).getBoundingClientRect();

    console.log("REF BOUNDING", ref.current.getBoundingClientRect());
    console.log("REF SCROLL", ref.current.scrollTop);
    console.log("EL Y", el.y);

    const positionDestiny = el.y + ref.current.scrollTop;

    ref.current.scroll(0, positionDestiny);
  };

  return (
    <TemplateHome setGoingUp={setGoingUp} ref={ref}>
      <Navbar
        displayNavbar={goingUp && !isDisplayingHero}
        scrollTo={scrollTo}
      />

      <Hero setIsDisplayingHero={setIsDisplayingHero} scrollTo={scrollTo} />
      <ProjectsGrid />
      {/* <CompaniesCarousel /> */}
      {/* <AboutMe /> */}
      <ServicesGrid />
      {/* <SkillsGrid /> */}
      {/* <TestimonialsCarousel /> */}
      {/* <JournalGrid /> */}
      <GetInTouch />
      {/* <FakeFooter /> */}
      <Footer />
    </TemplateHome>
  );
};

export default Home;
