import React from "react";
import {
  CustomButton,
  FlexComponent,
  GroupButton,
  ItemBox,
} from "../utility/styleComponent";
import { Box, Grid, Typography } from "@mui/material";
import { Title } from "../utility/reusableComponent";
import { darkTheme } from "../utility/Themes";
import { FaReact } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoCss3 } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

function SkillSection() {
  return (
    <>
      <FlexComponent bgcolor={darkTheme.bg} flexDirection={"column"} id="Skill" sx={theme=>({
         [theme.breakpoints.down('sm')]:{
          width:"25.8rem",
   }
      })}>
        <FlexComponent
          m={"1rem"}
          flexDirection={"column"}
       >
          <Title
            title={"Skills"}
            titleDes={
              "Technical Proficiencies and Abilities"
            }
          />
        </FlexComponent>
        <Box sx={(theme) => ({ flexGrow: 1 ,
             [theme.breakpoints.down('sm')]:{
                      width:'90%'
             }
        })} width={"70%"}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <ItemBox>
                <Typography variant="h6" m={"1rem"}>
                  Frontend
                </Typography>
                <GroupButton direction={"row"} spacing={2}>
                  <CustomButton startIcon={<FaReact />}>React Js </CustomButton>
                  <CustomButton startIcon={<SiRedux />}>Redux</CustomButton>
                  <CustomButton startIcon={<SiRedux />}>
                    Redux Toolkit
                  </CustomButton>
                </GroupButton>
                <GroupButton direction={"row"} spacing={2}>
                  <CustomButton startIcon={<FaHtml5 />}>HTML</CustomButton>
                  <CustomButton startIcon={<BiLogoCss3 />}>CSS</CustomButton>
                  <CustomButton startIcon={<SiJavascript />}>
                    Javascript{" "}
                  </CustomButton>
                </GroupButton>
                <GroupButton direction={"row"} spacing={2}>
                  <CustomButton startIcon={<FaBootstrap />}>
                    Bootstrap
                  </CustomButton>
                  <CustomButton startIcon={<SiMui />}>Material UI</CustomButton>
                </GroupButton>
              </ItemBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <ItemBox>
                <Typography variant="h6" m={"1rem"}>
                  Backend
                </Typography>
                <GroupButton direction={"row"} spacing={2}>
                  <CustomButton startIcon={<DiNodejs />}>Node Js</CustomButton>
                  <CustomButton startIcon={<SiExpress />}>
                    Express Js
                  </CustomButton>
                  <CustomButton startIcon={<SiMongodb />}>MongoDB</CustomButton>
                </GroupButton>
                <GroupButton direction={"row"} spacing={2}>
                  <CustomButton>Jsonweb Token</CustomButton>
                  <CustomButton>Social Authentication</CustomButton>
                </GroupButton>
              </ItemBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <ItemBox>
                <Typography variant="h6" m={"1rem"}>
                  Controls
                </Typography>
                <GroupButton direction={"row"} spacing={2}>
                  <CustomButton startIcon={<TbBrandVscode />}>
                    VS code{" "}
                  </CustomButton>
                  <CustomButton startIcon={<SiNetlify />}>Netlify</CustomButton>
                </GroupButton>
                <GroupButton direction={"row"} spacing={2}>
                  <CustomButton startIcon={<SiRender />}>Render</CustomButton>
                </GroupButton>
              </ItemBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <ItemBox>
                <Typography variant="h6" m={"1rem"}>
                  Version Controls
                </Typography>
                <GroupButton direction={"row"} spacing={2}>
                  <CustomButton startIcon={<FaGithub />}>Git</CustomButton>
                  <CustomButton startIcon={<FaGitAlt />}>Github</CustomButton>
                  <CustomButton startIcon={<SiPostman />}>Api testing:Postman</CustomButton>
                </GroupButton>
                <GroupButton direction={"row"} spacing={2}>
                  <CustomButton startIcon={<SiSocketdotio />}>
                    Socket.IO
                  </CustomButton>
                </GroupButton>
                <GroupButton direction={"row"} spacing={2}></GroupButton>
              </ItemBox>
            </Grid>
          </Grid>
        </Box>
      </FlexComponent>
    </>
  );
}

export default SkillSection;
