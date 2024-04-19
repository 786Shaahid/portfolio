import {  MenuOpen } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Icon ,
  Stack,
  Typography,
  
} from "@mui/material";
import React from "react";
import { darkTheme } from "../utility/Themes";
import { AnchorTag, FlexComponent, Navlink } from "../utility/styleComponent";
import { red } from "@mui/material/colors";
import { Link } from "react-scroll";
import { IconsData } from "../data/iconData";

function Navbar({toggledrawer,navData}) {
      
  return (
    <AppBar
      position="sticky"
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        boxShadow:'none',
        borderRight:`1px solid ${red[200]}` ,
        
      })}
    >
      <FlexComponent justifyContent={'center'} padding={"0.5rem"}>
        <Stack direction={"row"} spacing={11}>
          <Stack flex={2} sx={{justifyContent:'center',alignItems:"center",cursor:"default"}}>
            <FlexComponent sx={{ justifyContent: { sm: "end", xs: "start" } }}>
              <Icon component={IconsData[navData.itemIcon]} style={{ fontSize: 40 }}/>
              <Typography variant="h7" sx={{ ml: "1px" , fontWeight:'550',}}>
                {navData.itemName}
              </Typography>
            </FlexComponent>
          </Stack>
          <Stack
            direction="row"
            spacing={5}
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
            flex={6}
          >
            {
              navData.navLink.map((item,index)=>(
                <>
                <Navlink key={index}><Link duration={500} smooth={true} to={item}>{item}</Link></Navlink>
                </>
              ))
            }
          </Stack>

          <Stack flex={2} justifyContent={"center"} alignItems={"center"}>
            <Button
              variant="outlined"
              startIcon={<Icon  component={IconsData[navData.gitIcon]} />}
              sx={(theme) => ({
                textTransform: "capitalize",
                display: { xs: "none", sm: "flex" },
                borderRadius: "20px",
                border: `2px solid ${darkTheme.button}`,
                width: "11rem",
                fontWeight: "550",
                "&:hover":{
                    border:`3px solid ${darkTheme.button}`,
                    fontWeight:'750'
                }
              })}
            >
             <AnchorTag href={navData.github} target="_blank" sx={theme=>({color:darkTheme.button})}>
              {navData.text}
             </AnchorTag>
            </Button>
          </Stack>
        </Stack>

        <Stack
          flex={1}
          sx={{
            display: {
              sm: "flex",
              md: "none",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            },
          }}
        >
          <IconButton onClick={toggledrawer(true)} >
            <MenuOpen sx={{ fontSize: 40, color: "white" }} />
          </IconButton>
        </Stack>
      </FlexComponent>
    </AppBar>
  );
}

export default Navbar;
