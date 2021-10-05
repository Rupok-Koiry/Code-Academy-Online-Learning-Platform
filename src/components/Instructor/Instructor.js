import React from "react";
import "./Instructor.css";
import jonas from "../../images/jonas.jpg";
import angela from "../../images/angela.jpg";
import max from "../../images/max.jpeg";
import andrei from "../../images/andrei.jpg";
const Instructor = () => {
  return (
    /* Instructor Section */
    <section className="instructor-area">
      <div className="container">
        <h2>Community experts</h2>
        <div className="row gy-3">
          <div className="col-xl-3 col-md-6 col-xs-12">
            <div className="single-instructor">
              <div className="img-area">
                <img src={angela} className="img-responsive" alt="angela" />
                <div className="social">
                  <ul className="list-inline">
                    <li>
                      <a href="/">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="img-text">
                <h4>Angela Yu</h4>
                <h5>Machine Learning </h5>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-xs-12">
            <div className="single-instructor">
              <div className="img-area">
                <img src={jonas} className="img-responsive" alt="jonas" />
                <div className="social">
                  <ul className="list-inline">
                    <li>
                      <a href="/">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="img-text">
                <h4>Jonas</h4>
                <h5>Full Stack Web Developer</h5>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-xs-12">
            <div className="single-instructor">
              <div className="img-area">
                <img src={andrei} className="img-responsive" alt="yahoo" />
                <div className="social">
                  <ul className="list-inline">
                    <li>
                      <a href="/">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="img-text">
                <h4>Anderi </h4>
                <h5>Digital Marketing & SEO</h5>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-xs-12">
            <div className="single-instructor">
              <div className="img-area">
                <img src={max} className="img-responsive" alt="max" />
                <div className="social">
                  <ul className="list-inline">
                    <li>
                      <a href="/">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="img-text">
                <h4>Maximilian </h4>
                <h5>Native App Developer</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
