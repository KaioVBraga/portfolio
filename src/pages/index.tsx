import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useState, useCallback, useEffect } from "react";
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

  return (
    <TemplateHome setGoingUp={setGoingUp}>
      <Navbar displayNavbar={goingUp && !isDisplayingHero} />

      <Hero setIsDisplayingHero={setIsDisplayingHero} />
      <ProjectsGrid />
      <CompaniesCarousel />
      <AboutMe />
      <ServicesGrid />
      <SkillsGrid />
      <TestimonialsCarousel />
      <JournalGrid />
      <GetInTouch />
      <FakeFooter />
      <Footer />
    </TemplateHome>
  );
};

export default Home;
