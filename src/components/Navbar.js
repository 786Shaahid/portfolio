import { GitHub, MenuOpen } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Typography,
  
} from "@mui/material";
import React from "react";
import { darkTheme } from "../utility/Themes";
import { DiCssdeck } from "react-icons/di";
import { FlexComponent, Navlink } from "../utility/styleComponent";
import { red } from "@mui/material/colors";

function Navbar() {

  return (
    <AppBar
      position="sticky"
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        boxShadow:'none',
        borderRight:`1px solid ${red[200]}` 
      })}
    >
      <FlexComponent justify="center" padding={"0.5rem"}>
        <Stack direction={"row"} spacing={12}>
          <Stack flex={2} sx={{justifyContent:'center',alignItems:"center",cursor:"default"}}>
            <FlexComponent sx={{ justifyContent: { sm: "end", xs: "start" } }}>
              <DiCssdeck size={40} />
              <Typography variant="h7" sx={{ ml: "8px" , fontWeight:'550',}}>
                Portfolio
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
            <Navlink>About</Navlink>
            <Navlink>Skills</Navlink>
            <Navlink>Projects</Navlink>
            <Navlink>Education</Navlink>
            <Navlink>Contact</Navlink>
          </Stack>

          <Stack flex={2} justifyContent={"center"} alignItems={"center"}>
            <Button
              variant="outlined"
              startIcon={<GitHub />}
              sx={(theme) => ({
                color: theme.palette.text,
                textTransform: "capitalize",
                display: { xs: "none", sm: "flex" },
                borderRadius: "20px",
                border: `2px solid ${darkTheme.button}`,
                flexWrap: "nowrap",
                width: "11rem",
                fontWeight: "550",
                "&:hover":{
                    border:`3px solid ${darkTheme.button}`,
                    fontWeight:'750'
                }
              })}
            >
              Github Profile
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
          <IconButton>
            <MenuOpen sx={{ fontSize: 40, color: "white" }} />
          </IconButton>
        </Stack>
      </FlexComponent>
    </AppBar>
  );
}

export default Navbar;
