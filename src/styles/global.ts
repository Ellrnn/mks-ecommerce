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
`;

export const GlobalStyles = createGlobalStyle`
  ${styles}
`;
