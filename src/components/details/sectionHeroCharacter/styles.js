import { styled } from "../../../styles";
import { Container } from "../../../styles/global"
 
export const StyleSectionHeroCharacter = styled('section', {
  marginTop: "9.6rem",
  height: 631,
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  [`${Container}`]: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
  },
  ".image": {
    borderRadius: 5,
    overflow: "hidden",
    height: "100%"
  },
  ".info": {
    flex: 1,
    maxWidth: "65rem",
    marginLeft: "3.2rem",
    display: "flex",
    span: {
      display: "block",
      marginTop: "1.8rem",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "27px",
      color: "$gray400"           
    },
    
    "& > div": {
      position: "relative",
      flex: 1,
      maxWidth: "54.6rem",
      paddingLeft: "2.7rem",
      marginLeft: "1.9rem",
      "&:before": {
        content: "",
        position: "absolute",
        top: 12,
        left: 0,
        width: 4,
        height: 46,
        backgroundColor: "$red800"
      },
      h1: {
        fontWeight: 600,
        fontSize: "6.1rem",
        lineHeight: "7.1rem",        
        color: "$white",
        marginBottom: "1.3rem",       
      },
      p: {
        fontSize: "1.6rem",
        lineHeight: "2.4rem",       
        color: "$gray400",      
      }
    }

  },
  "@tablet" : {
    height: "auto",
    mt: "14rem",
    [`${Container}`]: {
      display: "flex",
      flexDirection: "column"
    },
    ".image" : {
      mb: "20px"
    },
    ".info": {
      ml: 0,
      span: {
        display:"none"
      },
      "& > div": {
        maxWidth: "100%",
        pl: 0,
        ml: 0,
        textAlign: "center",
        mb: 30,
        "&:before": {
          display: "none"
        }
      }

    }
  },
  "@mobile": {
    ".image" : {
      display: "none"
    },
  }
})