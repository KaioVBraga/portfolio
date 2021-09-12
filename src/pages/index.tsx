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
import TemplateHome from "../components/Templates/Home";
import api from "../services/apis";

const Home: NextPage = () => {
  return (
    <TemplateHome>
      {/* <Navbar /> */}

      <Hero />
      <ProjectsGrid />
      <CompaniesCarousel />
      <AboutMe />
      <ServicesGrid />
    </TemplateHome>
  );
};

export default Home;
