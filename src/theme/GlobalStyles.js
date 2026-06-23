import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --apple-blue: #0071e3;
  --apple-blue-hover: #0077ed;

  --background: #f5f5f7;
  --surface: #ffffff;

  --text: #1d1d1f;
  --muted: #6e6e73;

  --border: #d2d2d7;

  --shadow: 0 4px 16px rgba(0,0,0,0.08);
}

/* DARK MODE CONTROLADO POR CLASE (no depende del sistema) */
body.dark {
  --background: #000000;
  --surface: #1d1d1f;

  --text: #f5f5f7;
  --muted: #a1a1a6;

  --border: #424245;

  --shadow: 0 4px 20px rgba(0,0,0,0.4);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "SF Pro Display",
    "Segoe UI",
    sans-serif;

  background: var(--background);
  color: var(--text);

  min-height: 100vh;
  line-height: 1.6;

  transition: background .25s ease, color .25s ease;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  letter-spacing: -0.02em;
}

p {
  color: var(--text);
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
  transition: transform .2s ease, background .2s ease;
}

button:hover {
  transform: translateY(-2px);
}

input {
  border: 1px solid var(--border);
  outline: none;
  background: var(--surface);
  color: var(--text);
  transition: border-color .2s ease, box-shadow .2s ease;
}

input:focus {
  border-color: var(--apple-blue);
  box-shadow: 0 0 0 4px rgba(0,113,227,.15);
}

img {
  max-width: 100%;
  display: block;
}

ul {
  list-style: none;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  main {
    padding: 1rem;
  }
}

`;

export default GlobalStyles;