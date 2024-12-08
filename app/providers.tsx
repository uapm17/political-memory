"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProviderProps } from "next-themes/dist/types";
import StoreProvider from "./StoreProvider";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider locale={(new Intl.NumberFormat()).resolvedOptions().locale} navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <StoreProvider>{children}</StoreProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
