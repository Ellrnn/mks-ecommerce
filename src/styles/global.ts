"use client";
import { createGlobalStyle, css } from "styled-components";

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem = 14px)
  }
  html,
  body,
  #__next {
    height: 100%;
  }
  body {
    font-family: var(--font-montserrat);
  }
  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${styles}
`;
