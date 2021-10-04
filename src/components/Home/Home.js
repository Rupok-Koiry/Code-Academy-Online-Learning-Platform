import React from "react";
import HomeCourses from "./HomeCourses/HomeCourses";
import Skill from "../Skill/Skill";
import Hero from "./Hero/Hero";
import HeroFeature from "./HeroFeature/HeroFeature";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroFeature />
      <HomeCourses />
      <Skill />
    </>
  );
};

export default Home;
