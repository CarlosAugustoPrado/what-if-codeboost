import { styled } from "../../styles"
import { Container } from "../../styles/global"

export const FooterStyle = styled('footer', {  
  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
  padding: "40px 0",
  [`${Container}`]: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    "& > div": {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      strong: {
        fontWeight: 700,
        fontSize: "1.4rem",
        lineHeight: "2.1rem",
        color: "$white"        
      },
      p: {
        flex: 1,
        fontWeight: 400,
        fontSize: "1.4rem",
        lineHeight: "2.1rem",       
        color: "$gray500",
        maxWidth: "59.3rem",
        marginLeft: "18.6rem",    
      }
    }    
  },
  "@lgScreen": {
    padding: "40px 40px",
    [`${Container}`]: {
      "& > div": {
        p: {
          ml: "10rem",
        }
      }
    }    
  },
  "@tablet": {
    [`${Container}`]: {
      "& > div": {
        p: {
          display: "none",
        }
      }
    }
  },
  "@mobile": {
    padding: "40px 20px"
  }

})