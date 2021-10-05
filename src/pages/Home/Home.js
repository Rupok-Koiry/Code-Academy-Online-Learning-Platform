import React from "react";
import HomeCourses from "../../components/HomeCourses/HomeCourses";
import Skill from "../../components/Skill/Skill";
import Hero from "../../components/Hero/Hero";
import HeroFeature from "../../components/HeroFeature/HeroFeature";

const Home = () => {
  return (
    /* Home Page */
    <>
      <Hero />
      <HeroFeature />
      <HomeCourses />
      <Skill />
    </>
  );
};

export default Home;
