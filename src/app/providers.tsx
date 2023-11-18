"use client";

import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./lib/registry";

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};
