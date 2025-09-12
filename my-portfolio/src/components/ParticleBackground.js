import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
    },
    particles: {
      color: { value: "#7c5cff" },
      links: { enable: true, distance: 120, color: "#7c5cff", opacity: 0.12 },
      move: { enable: true, speed: 1 },
      size: { value: { min: 1, max: 4 } },
      number: { density: { enable: true, area: 800 }, value: 40 },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: "fixed",
        zIndex: 0,
        inset: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
