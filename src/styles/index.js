import { createStitches } from '@stitches/react'

export const { styled, globalCss, keyframes, getCssText, theme, css } = createStitches({
  theme: {
    colors: {
      red900: "#FF0000",
      red800: "#FF040D",
      white: "#FFFFFF",
      // Neutral colors
      gray900: "#33303E",
      gray800: "#4E4B59",
      gray700: "#5F5C6B",
      gray600: "#7A7786",
      gray500: "#8C8A97",
      gray400: "#ACABB7",
      gray200: "#C6C5CE",
      gray100: "#E1E0E7",      

    }
  },
  utils: {
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    d: (value) => ({
      display: value,
    }),
    ai: (value) => ({
      alignItems: value,
    }),
    jc: (value) => ({
      justifyContent: value,
    }),
    centerTotal: (value) => ({
      alignItems: value,
      justifyContent: value,
    }),
  },
  media: {
    lgScreen: "(max-width: 1200px)",
    tablet: "(max-width: 991px)",
    mobile: "(max-width: 600px)",
  }
});