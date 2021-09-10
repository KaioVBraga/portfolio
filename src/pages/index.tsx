import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useState, useCallback, useEffect } from "react";
import { ICardYoutube } from "../@types/Components/Molecules/CardYoutube/types";
import { YoutubeVideoResponse } from "../@types/Pages/Home/types";
import Navbar from "../components/Organisms/Navbar";
import Hero from "../components/Organisms/Hero";
import TemplateHome from "../components/Templates/Home";
import api from "../services/apis";

const Home: NextPage = () => {
  return (
    <TemplateHome>
      {/* <Navbar /> */}
      <Hero />
    </TemplateHome>
  );
};

export default Home;
