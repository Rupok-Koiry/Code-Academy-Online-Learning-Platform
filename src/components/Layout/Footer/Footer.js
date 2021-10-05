import React from "react";
import "./Footer.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-col">
              <img src={logo} alt="logo" width="200" />
              <p className="mt-3">
                Code Academy is a online learning platform which will help you
                to become a highly professional on specific fields.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-col">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="/">Privacy policy</a>
                </li>
                <li>
                  <a href="/">Terms & condition</a>
                </li>
                <li>
                  <a href="/">Latest blog</a>
                </li>
                <li>
                  <a href="/">App service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-col">
              <h3>Social pages</h3>
              <ul>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Instragram</a>
                </li>
                <li>
                  <a href="/">Linkedin</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="copyright-text">
              Copyright <span style={{ color: "#ff9f67" }}>©2021 </span> All
              rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
