import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
import profile from "../assets/profile.jpg";

const AboutWrap = styled.section`
  padding: 48px 0;
  display: flex;
  gap: 24px;
  align-items: flex-start;

  .left {
    width: 260px;
    flex-shrink: 0;
  }

  .right {
    flex: 1;
  }

  img {
    width: 100%;
    border-radius: 12px;
    display: block;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 18px;

    .left {
      width: 100%;
      display: flex;
      justify-content: center; /* center the avatar on mobile */
    }

    /* make image a small circular avatar on mobile */
    img {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      object-fit: cover;
    }

    .right {
      padding: 0 12px;
    }
  }
`;

export default function About() {
  return (
    <AboutWrap id="about" className="container" aria-labelledby="about-heading">
      <div className="left">
        <motion.img
          src={profile}
          alt="Sonam Dangi profile picture"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="right">
        <h2 id="about-heading">About me</h2>
        <p>
          Dynamic Software Engineer with 4.5+ years of experience in front-end and
          back-end development. Designed responsive UIs resulting in a 40%
          reduction in page load times and designed robust backend systems
          enhancing server response time. Seeking to leverage expertise in
          React, JavaScript, and Redux to drive innovation and efficiency within
          a forward-thinking tech environment.
        </p>
        <p>Key interests: React, JavaScript, Html, Css.</p>
        <Timeline />
      </div>
    </AboutWrap>
  );
}
