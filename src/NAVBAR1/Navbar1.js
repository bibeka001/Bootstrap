import React from "react";
import "../NAVBAR/Nav.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
          <h1>
            <span>T</span>
            <span>T</span>
          </h1>
        </div>
        {/* 2nd menu part */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">HOME</a>
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
        {/* 3rd social media link */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_dude"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_dude"
              >
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_dude"
              >
                <FaYoutubeSquare />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* hero section  */}
      <section className="hero-section">
        <p>Welcome to my Paradise</p>
        <h1>Dashing Dude</h1>
      </section>
    </>
  );
};

export default Navbar;
