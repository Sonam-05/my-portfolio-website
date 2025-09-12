import React from "react";
import styled from "styled-components";
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "./ScrollToTop";

const Wrap = styled.footer`
  padding: 28px 0;
  text-align: center;
  color: var(--muted);
`;

export default function Footer() {
  return (
    <Wrap>
      <div className="container">
        <div style={{ marginBottom: 10 }}>
          © {new Date().getFullYear()} Sonam Dangi. All rights reserved.
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
          <a
            aria-label="GitHub"
            href="https://github.com/Sonam-05"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/sonam-dangi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <ScrollToTop />
      </div>
    </Wrap>
  );
}
