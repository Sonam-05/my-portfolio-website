import React from "react";
import Header from "./components/Header";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styled from "styled-components";

const Main = styled.main`
  position: relative;
  z-index: 2;
  padding-bottom: 60px;
`;

export default function App() {
  return (
    <>
      <ParticleBackground />
      <Header />
      <Main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Main>
    </>
  );
}
