import { styled } from '../../styles'
import { Container } from '../../styles/global'

export const StylePageNotFound = styled("section", {
  marginTop: "9.6rem",
  paddingTop: "9.5rem",
  paddingBottom: "15rem",
  [`${Container}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  h1: {
    fontWeight: 600,
    fontSize: "4.9rem",
    lineHeight: "5.9rem",    
    marginBottom: "2.4rem"    
  },
  p: {
    fontWeight: 400,
    fontSize: "1.6rem",
    lineHeight: "2.4rem",
    textAlign: "center",
    maxWidth: "64.1rem",
    marginBottom: "4rem"
  },
  a: {
    display: "inline-block",
    lineHeight: "54px",
    backgroundColor: "$red900",
    borderRadius: "5px",
    padding: "0 75px", 
    fontWeight: 600,
    fontSize: "1.6rem",    
    color: "$white",
    transition: "filter .3s ease",
    marginBottom: "7.2rem",
    "&:hover": {
      filter: "brightness(0.8)"
    },
  }
})