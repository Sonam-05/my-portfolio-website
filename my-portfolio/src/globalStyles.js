import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #0f1724;
    --card: #0b1220;
    --muted: #9aa4b2;
    --accent: #7c5cff;
    --text: #e6eef8;
  }

  [data-theme="light"] {
    --bg: #f7fafc;
    --card: #ffffff;
    --muted: #6b7280;
    --accent: #6b46ff;
    --text: #0b1220;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: var(--bg);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a { color: inherit; text-decoration: none; }
  button { font: inherit; }
  :focus { outline: 3px solid rgba(124,92,255,0.25); outline-offset: 2px; }

  /* Simple responsive container */
  .container {
    width: min(1100px, 92%);
    margin: 0 auto;
  }

  /* Utility for visually-hidden text (accessibility) */
  .sr-only {
    position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden; clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
`;

export default GlobalStyle;
