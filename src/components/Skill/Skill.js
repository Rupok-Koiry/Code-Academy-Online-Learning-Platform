import React from "react";
import rightIcon from "../../images/right-icon.svg";
import editors from "../../images/editors.webp";
import skillIcon from "../../images/skill.svg";
import "./Skill.css";
const Skill = () => {
  return (
    /* Skill Section */
    <section className="skill">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="skill-icon">
              <img src={skillIcon} alt="skill" />
            </div>
            <h2>Learn new skills online with top educators</h2>
            <p>
              Whether you’re a beginner or experienced developer, our
              comprehensive courses will help you gain the practical skills that
              will get you hired and become a top 10% developer. Enroll today to
              receive instant access to 60+ professional (and fun!) lessons.
            </p>
            <ul>
              <li>
                <img src={rightIcon} alt="icon" />
                Techniques to engage effectively with vulnerable children and
                young people.
              </li>
              <li>
                <img src={rightIcon} alt="icon" />
                Join millions of people from around the world learning together.
              </li>
              <li>
                <img src={rightIcon} alt="icon" />
                Expand your career opportunities with online learning which is
                easy and natural.
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img src={editors} alt="editors" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
