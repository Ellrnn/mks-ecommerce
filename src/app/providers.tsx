"use client";

import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./lib/registry";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
};
