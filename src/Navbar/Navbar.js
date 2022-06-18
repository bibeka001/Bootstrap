import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
          <h2>
            <span>B</span>ibek
            <span>A</span>nand
          </h2>
        </div>
        {/* 2nd logo part */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        {/* 3rd social media list */}
        <div className="social-media ">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channle/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa"
              >
                <FaFacebookSquare className="Facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channle/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa"
              >
                <FaInstagramSquare className="Instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channle/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="hero-section">
        <p> Welcome To </p>
        <h1>drEam Land</h1>
      </section>
    </>
  );
};

export default Nav;
