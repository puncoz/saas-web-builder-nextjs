"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import type { FunctionComponent } from "react"

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children, ...props }) => {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider
