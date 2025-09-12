import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroWrap = styled.section`
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: center;
  z-index: 2;
  .content {
    padding: 100px 0;
    display: flex;
    gap: 32px;
    align-items: center;
  }
  h1 {
    font-size: clamp(28px, 6vw, 48px);
    margin: 0;
  }
  p {
    color: var(--muted);
    max-width: 70ch;
  }
  .cta {
    margin-top: 18px;
    display: flex;
    gap: 12px;
  }
  .bgBlock {
    position: absolute;
    inset: 0;
    z-index: 1;
  }
`;

export default function Hero() {
  const roles = ["Frontend Engineer", "React Developer", "MERN Developer"];
  const typingSpeed = 100;
  const pauseDuration = 1200;

  const [text, setText] = useState("");
  const [blink, setBlink] = useState(true);
  const indexRef = useRef(0);
  const charIndexRef = useRef(0);
  const deletingRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function tick() {
      const current = roles[indexRef.current];
      if (!deletingRef.current) {
        charIndexRef.current += 1;
        setText(current.slice(0, charIndexRef.current));
        if (charIndexRef.current === current.length) {
          timeoutRef.current = setTimeout(() => {
            deletingRef.current = true;
            tick();
          }, pauseDuration);
          return;
        }
      } else {
        charIndexRef.current -= 1;
        setText(current.slice(0, charIndexRef.current));
        if (charIndexRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % roles.length;
        }
      }
      const delay = deletingRef.current
        ? Math.max(30, typingSpeed / 2)
        : typingSpeed;
      timeoutRef.current = setTimeout(tick, delay);
    }
    timeoutRef.current = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    const b = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(b);
  }, []);

  return (
    <HeroWrap
      id="hero"
      aria-labelledby="hero-heading"
      role="banner"
      className="container"
    >
      <div className="content" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 id="hero-heading">Hi — I’m Sonam Dangi</h1>
          <p aria-live="polite">
            <strong style={{ color: "var(--accent)" }}>{text}</strong>
            <span aria-hidden style={{ display: "inline-block", width: 10 }}>
              {blink ? "|" : "\u00A0"}
            </span>
          </p>
          <div className="cta">
            <span
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              role="button"
              aria-label="View projects"
              style={{
                padding: "10px 14px",
                background: "var(--accent)",
                color: "#fff",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              See projects
            </span>
            <span
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              role="button"
              aria-label="Contact me"
              style={{
                padding: "10px 14px",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Contact
            </span>
          </div>
        </motion.div>
      </div>
    </HeroWrap>
  );
}
