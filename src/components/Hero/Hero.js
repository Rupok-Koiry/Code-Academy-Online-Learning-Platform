import React from "react";
import Button from "../Button/Button";
import "./Hero.css";
const Hero = () => {
  return (
    /* Hero Section */
    <section className="hero">
      <div className="container ">
        <div className="row">
          <div className="col-lg-6">
            <h1>Online learning platform</h1>
            <p>
              Always something new to learn. Build skills with courses,
              certificates, and degrees online from world-class instructors
            </p>
            <Button className="text-white">Join for free</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
