import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProviderWrapper } from "./contexts/ThemeContext";
import { FilterProvider } from "./contexts/FilterContext";
import GlobalStyle from "./globalStyles";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThemeProviderWrapper>
    <FilterProvider>
      <GlobalStyle />
      <App />
    </FilterProvider>
  </ThemeProviderWrapper>
);
