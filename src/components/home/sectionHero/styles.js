import { styled, css } from "../../../styles";
import Image from "next/image"

import BgHero from "../../../assets/bg-hero.jpg"

import { Container } from "../../../styles/global"

export const SectionHeroStyle = styled("section", {
  position: "relative",  
  zIndex: 1,
  width: "100%",
  height: 731,
  background: `url(${BgHero.src})no-repeat top center`,
  paddingTop: 96,
  display: "flex",
  backgroundAttachment: "fixed",
  
  [`${Container}`]: {
    display: "flex",
    alignItems: "flex-start",    
  },
  "&:after": {
    content: "",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 300,
    backgroundImage: "linear-gradient(transparent, #000000)",
    zIndex: -1
  },
  
})

export const AreaSocial = styled("div", {
  width: 72,
  height: "100%",
  borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
  borderRight: "1px solid rgba(255, 255, 255, 0.2)",
  ul: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    listStyle: "none",
    padding: "30px 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    
    li: {
      "&:not(:last-child)": {
        marginBottom: 32,
      },
      a: {
        display: "block",
      }
    }
  },
  "@mobile": {
    display: "none"
  },
 
})

export const ContextArea = styled("div", {
  height: "100%",
  paddingLeft: 96,
  paddingRight: 71,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  flex: 1,
  paddingBottom: 31,
  borderRight: "1px solid rgba(255, 255, 255, 0.2)",
  ".left": {
    flex: 1,
    maxWidth: 574,
    paddingBottom: "10.1rem",
    h3: {
      fontWeight: 700,
      fontSize: "1.4rem",
      lineHeight: "2.1rem"  ,
      letterSpacing: "0.095em",      
      color: "#FFA800",
      marginBottom: 8,            
    },
    h1: {
      fontWeight: 600,
      fontSize: "6.1rem",
      lineHeight: "7.1rem",   
      color: "$White",
      marginBottom: 24,
      maxWidth: 400
    },
    p: {
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: "2.4rem",     
      color: "$gray100",
      maxWidth: 490,
      marginBottom: 32      
    },
    a: {
      display: "inline-block",
      padding: "15px 52px",
      backgroundColor: "$red900",
      borderRadius: 5,
      fontWeight: 600,
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
      color: "$white",
      textDecoration: "none",
      transition: "filter .3s ease",
      "&:hover": {
        filter: "brightness(0.7)",
      }   
    },
  },
  "@tablet": {
    flexDirection: "column",
    ai: "center",
    jc: "center",
    textAlign: "center",
    pt: "5rem",
    ".left": {
      pb: 0,
      p: {
        display: "none"
      }
    }
  },
  "@mobile": {
    flexDirection: "column",
    pl: 0,
    pr: 0,

  },
  
}) 

