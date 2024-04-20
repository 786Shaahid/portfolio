import React from "react";
import {
  CustomButton,
  FlexComponent,
  GroupButton,
  ItemBox,
} from "../utility/styleComponent";
import { Box, Grid, Icon, Typography } from "@mui/material";
import { Title } from "../utility/reusableComponent";
import { darkTheme } from "../utility/Themes";
import { IconsData } from "../data/iconData";

function SkillSection({skillData}) {
  return (
    <>
      <FlexComponent bgcolor={darkTheme.bg} flexDirection={"column"} id="Skills">
        <FlexComponent
          m={"1rem"}
          flexDirection={"column"}
       >
          <Title
            title={skillData.title}
            titleDes={skillData.description}
          />
        </FlexComponent>
        <Box sx={(theme) => ({ flexGrow: 1 ,
               width:"90%",
               [theme.breakpoints.up('md')]:{
               width:"70%",
             }
        })}>
          <Grid container spacing={3}>
            {
              skillData.skills.map((skills,index)=>(<>
                <Grid item xs={12} sm={6} key={index}>
              <ItemBox>
                <Typography variant="h6" m={"1rem"}>
                  {skills.skill}
                </Typography>
                <GroupButton direction={"row"} spacing={2} >
                {
                  skills.technology.slice(0,3).map((tech,index)=>(<>
                  <CustomButton startIcon={<Icon component={IconsData[tech.name]} key={index}/>}>{tech.name} </CustomButton>
                  </>))
                }
                </GroupButton>
                <GroupButton direction={"row"} spacing={2}>
                {
                  skills.technology.slice(3,6).map((tech,index)=>(<>
                  <CustomButton startIcon={<Icon component={IconsData[tech.name]} key={index}/>}>{tech.name} </CustomButton>
                  </>))
                }
                </GroupButton>
                <GroupButton direction={"row"} spacing={2}>
                {
                  skills.technology.slice(6,9).map((tech,index)=>(<>
                  <CustomButton startIcon={<Icon component={IconsData[tech.name]} key={index}/>}>{tech.name} </CustomButton>
                  </>))
                }
                </GroupButton>
              </ItemBox>
            </Grid>
              </>))
            }
          </Grid>
        </Box>
      </FlexComponent>
    </>
  );
}

export default SkillSection;
