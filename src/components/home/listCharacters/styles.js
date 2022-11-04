import { styled } from "../../../styles"

export const StyleSectionCharacters = styled('section', {  
  paddingTop: 56,
  paddingBottom: 72,
  ".title": {
    display: "flex",
    alignItems: "center",
    marginBottom: 56,
    
    span: {
      fontWeight: 400,
      fontSize: "1.8rem",
      lineHeight: "2.7rem",     
      color: "$white",   
      opacity: "0.4",
      marginRight: "11.3rem",
         
    },
    h2: {
      position: "relative",
      fontWeight: 600,
      fontSize: "25px",
      lineHeight: "35px",    
      color: "$white",
      maxWidth: 216,
      paddingLeft: "1.6rem", 
      "&:before": {
        content: "",
        position: "absolute",
        top: 5.5,
        left: 0,
        width: "2px",
        height: "59px",        
        backgroundColor: "$red800",        
      }
    },
  },
  "@lgScreen" :{
    ml: 50,
    mr: 50,        
  },
  "@mobile": {   
    ".title": {
      textAlign: "center",
      justifyContent: "center",
      width: "100%",
      mb: 18,
      span: {
        fontSize: "1.4rem",
        mr: "4.3rem",
      },
      h2: {
        fontSize: "2rem"
      }
    }
  }
})

export const StyleListCharacters = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "4rem 3.3rem",
  ".marvel": {
    width: "28rem",
    height: "36.8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  "@tablet": {
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "3rem 2rem",
  ".marvel": {
    width: "31rem"
  }  
},
  "@mobile": {
    gridTemplateColumns: "1fr",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})