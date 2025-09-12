import React from "react";
import styled from "styled-components";
import { FiChevronUp } from "react-icons/fi";

const Button = styled.button`
  margin-top: 12px;
  background: rgba(124, 92, 255, 0.08);
  border: none;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  color: var(--text);
`;

export default function ScrollToTop() {
  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <Button onClick={goTop} aria-label="Scroll to top">
      <FiChevronUp /> Top
    </Button>
  );
}
