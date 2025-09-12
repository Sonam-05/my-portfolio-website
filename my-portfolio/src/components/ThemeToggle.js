import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const Button = styled.button`
  background: transparent;
  border: none;
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px;
  border-radius: 8px;
  cursor: pointer;
`;

export default function ThemeToggle(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Button onClick={toggleTheme} {...props}>
      {theme === "dark" ? <FiSun aria-hidden /> : <FiMoon aria-hidden />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
