import React, {  useState } from "react";
import {
  AnchorTag,
  CardConatiner,
  CustomButton,
  FlexComponent,
  GroupButton,
} from "../utility/styleComponent";
import { Title } from "../utility/reusableComponent";
import { Card, CardContent, CardMedia, Grid, Icon, TextField, Typography } from "@mui/material";
import { darkTheme } from "../utility/Themes";
import { IconsData } from "../data/iconData";

function Project({projects}) {
  const [filterValue, setFilterValue] = useState("");

  const filterProjects = (value) => {
    if (!value) {
      return projects.MyProjects;
    }
    return projects.MyProjects.filter(project => project.techUse.some(tech => tech.toLowerCase().includes(value.toLowerCase())));
  };

  return (
    <>
      <FlexComponent
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
        })}
        flexDirection={"column"}
        id="Projects"
      >
        <FlexComponent m={"1rem"} flexDirection={"column"}>
          <Title
            title={projects.title}
            titleDes={projects.description}
          />
           <TextField
            label="Search by Technology"
            variant="outlined"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white'
                },
                '&:hover fieldset': {
                  borderColor: 'blue',
                },
              },
            }}
          />
        </FlexComponent>
        <CardConatiner
          sx={(theme) => ({
            [theme.breakpoints.up('md')]:{
              borderBottom:'2px solid white',
              width:'62vw',
              height:'75vh',
              overflow:"auto",
              "&::-webkit-scrollbar":{
                   display:'none'
              }
            }
          })}
          width={"98%"}
        >
          <Grid container spacing={3} sx={{}}>
            {
              filterProjects(filterValue).map((project,index)=>(<>
                <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  padding: "8px",
                  bgcolor: "black",
                  minHeight: "31rem",
                  outline: `2px solid ${darkTheme.button}`,
                  borderRadius: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  alt="chat-pic"
                  image={project.img}
                  sx={{ borderRadius: "10px" }}
                />

                <CardConatiner flexWrap={"wrap"} mb={"-20px"}>
                  {
                    project.techUse.map((tech,index)=>(<>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }} key={index}>
                    {tech}
                  </CustomButton>
                    </>))
                  }
                </CardConatiner>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color={darkTheme.text_secondary}>
                    {project.description}
                  </Typography>
                </CardContent>
                <GroupButton direction={"row"} spacing={3}>
                  {
                     project.action.map((act,index)=>(<>
                           <CustomButton
                           key={index}
                    variant="outlined"
                    startIcon={<Icon component={IconsData[act.iconUrl]} />}
                  >
                    <AnchorTag
                    rel="noopener"
                      href={act.url}
                      target="_blank"
                    >
                      {act.text}
                      
                    </AnchorTag>
                  </CustomButton>
                     </>))
                  }
                </GroupButton>
              </Card>
            </Grid>
              </>))
            }
          </Grid>
        </CardConatiner>
      </FlexComponent>
    </>
  );
}

export default Project;
