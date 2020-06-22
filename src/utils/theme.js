import React from "react"
import { ThemeProvider } from "theme-ui"
import presetTheme from "@rebass/preset"

const theme = {
  ...presetTheme,
  colors: {
    ...presetTheme.colors,
    primary: "#28635a",
    secondary: "#041230",
    background: "#fff",
    backgroundAlt: "#f6f7fd",
  },
  fonts: {
    ...presetTheme.fonts,
    heading: "'Work Sans', sans-serif",
    body: "'Quattrocento Sans', sans-serif",
  },
  shadows: {
    ...presetTheme.shadows,
    list: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  },
  variants: {
    ...presetTheme.variants,
    container: {
      maxWidth: 1000,
      mx: "auto",
    },
  },
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
