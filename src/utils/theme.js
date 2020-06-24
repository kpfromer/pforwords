import React from "react"
import { ThemeProvider } from "theme-ui"
// import presetTheme from "@rebass/preset"

// const theme = {
//   ...presetTheme,
//   colors: {
//     ...presetTheme.colors,
//     primary: "#28635a",
//     secondary: "#041230",
//     background: "#fff",
//     backgroundAlt: "#f6f7fd",
//   },
//   fonts: {
//     ...presetTheme.fonts,
//     heading: "'Work Sans', sans-serif",
//     body: "'Quattrocento Sans', sans-serif",
//   },
//   shadows: {
//     ...presetTheme.shadows,
//     list: "0px 0px 20px rgba(0, 0, 0, 0.1)",
//   },
//   variants: {
//     ...presetTheme.variants,
//     container: {
//       maxWidth: 1000,
//       mx: "auto",
//     },
//   },
// }

const heading = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
}

export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Overpass, sans-serif",
    // monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#28635a",
    secondary: "#e38251",
    muted: "#f6f6f6",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "secondary",
      fontWeight: "bold",
      textDecoration: "none",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
  // custom user variants
  container: {
    maxWidth: 1250,
    mx: "auto",
  },
  nav: {
    color: "primary",
    textDecoration: "none",
    textAlign: "center",
    px: 2,
    textTransform: "uppercase",
    ":hover": {
      textDecoration: "underline",
    },
  },
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
