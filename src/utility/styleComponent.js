import { Box, Button, Card, Stack, styled } from "@mui/material";
import { darkTheme, lightTheme } from "./Themes"
export const FlexComponent = styled(Box)(({ theme, padding,width,height }) => ({
    width: width? width:"",
    height:height?height:'',
    display: "flex",
    alignItems: "center",
    padding: padding ? padding : "5px",
  }));

 export const Navlink = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
    fontSize: "16px",
    transition: "all 0.5s ease-in-out",
    cursor: "pointer",
    "&:active": {
      borderBottom: `2px solid ${lightTheme.button}`,
    },
    "&:hover": {
      color: `${lightTheme.primary}`,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  }));

  export const ItemBox = styled(Card)(({ theme }) => ({
    backgroundColor: darkTheme.black,
    textAlign: "center",
    color: theme.palette.text.primary,
    fontFamily: theme.typography.subHeading,
    border: `2px solid ${darkTheme.button}`,
    borderRadius: "20px",
    padding: "10px 5px",
    minHeight: "18rem",
  }));

  export const GroupButton = styled(Stack)(({ theme }) => ({
    color: darkTheme.text_primary,
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
  }));

  export const CustomButton = styled(Button)(({ theme }) => ({
    border: `2px solid ${darkTheme.button}`,
    padding: "0.5rem 1rem",
    color: theme.palette.text.primary,
    fontFamily: theme.typography.title,
    fontWeight: "400",
    borderRadius: "10px",
    outline: "2px solid blue",
    wordWrap: "normal",
  }));

export  const CardConatiner = styled(Box)(({ theme }) => ({
    backgroundColor: "",
    padding: "20px",
  }));
export const AnchorTag=styled('a')(({theme})=>({
  color:theme.palette.text.secondary,
         textDecoration:'none'
 }))