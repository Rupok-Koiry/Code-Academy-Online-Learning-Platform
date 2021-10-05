import React from "react";
import courses from "../../images/courses.svg";
import teacher from "../../images/teacher.svg";
import access from "../../images/access.svg";
import "./HeroFeature.css";
const HeroFeature = () => {
  return (
    /*Hero Feature Section */
    <section className="hero-feature">
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-4">
            <div className="feature-div">
              <div className="row">
                <div className="col-lg-3">
                  <div className="feature-image">
                    <img src={courses} alt="courses" />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="feature-content">
                    <h3>60+ prominent courses</h3>
                    <p>
                      All courses videos are high quality with high resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-div">
              <div className="row">
                <div className="col-lg-3">
                  <div className="feature-image">
                    <img src={teacher} alt="teacher" />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="feature-content">
                    <h3>Expert instructors</h3>
                    <p>World's most renown instructors made the courses. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-div">
              <div className="row">
                <div className="col-lg-3">
                  <div className="feature-image">
                    <img src={access} alt="access" />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="feature-content">
                    <h3>Life time access</h3>
                    <p>
                      You will get life time access of any courses you enrolled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFeature;
