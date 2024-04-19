import { Avatar, Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { AnchorTag, FlexComponent } from "../utility/styleComponent";
import Typewriter from "typewriter-effect";
import { darkTheme} from "../utility/Themes";
import myPic from "../image/myPic.jpg";
import { Download } from "@mui/icons-material";

function AboutSection({aboutData}) {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
//  const myPic=aboutData.myPic;
//  console.log(myPic);
  
 return (
    <>
      <Stack
        direction={'column'}
        sx={(theme) => ({
          justifyContent: "flex-start",
          alignItems: "flex-start",
          bgcolor: theme.palette.background.default,
          p: "4em 0em",
          [theme.breakpoints.up('md')]:{
            p:'6em 0em'
           }

        })}
     id="About" >
        <FlexComponent>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          flex={3}
          color={darkTheme.text_primary}
        >
          <Box
            width={"100%"}
            pl={"1%"}
            sx={(theme) => ({
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              [theme.breakpoints.up('md')]:{
               pl:'22%',
               display:'block'
              }
            })}
          >
            <Typography
             variant={isXs ? "h5" : isSm ? "h5" : "h4"}
              fontWeight={600}
              style={{ lineHeight: "1.5"}}
            >
              {aboutData.title1}
            </Typography>
            <Typography
               variant={isXs ? "h5" : isSm ? "h5" : "h4"}
              fontWeight={600}

            >
             {aboutData.name}
            </Typography>
            <Typography
              variant={isXs ? "h6" : isSm ? "h6" : "h4"}
              sx={{ display: "flex" }}
              style={{ lineHeight: "1.5" }}
            >
              <span style={{  fontWeight: "600" }}>{aboutData.title2} &nbsp; </span>
              <span style={{ color: darkTheme.primary, fontWeight: "600" }}>
                <Typewriter
                  options={{
                    strings: aboutData.role,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </Typography>
            <Box sx={theme=>({m:'1rem 0.1rem', fontSize:'20px',lineHeight:'32px',width:'80%',fontFamily:theme.typography.main,color:`${darkTheme.text_secondary}`,opacity:'0.8' ,
          })} >
             {aboutData.summary}
             </Box>
          </Box>
        </Stack>
        <FlexComponent
          flex={1.4}
          sx={{ display: { xs: "none", sm: "none", md: " block" } }}
        >
          <Avatar
            src={myPic}
            alt="Profile-pic"
            sx={{
              width: "15rem",
              height: "15rem",
            }}
          />
        </FlexComponent>
        
      </FlexComponent>
      <Stack sx={theme=>({
        [theme.breakpoints.up('md')]:{
          justifyContent:'space-evenly',
          width:"20%",
          margin:'1px 11rem',
        }
        })}>
        <AnchorTag href="https://ninjasfiles.s3.amazonaws.com/full-stack%20(2).pdf_2ce6db872ab91637c289fc7cb55e5353/full-stack%20(2).pdf" target="_blank"> 
        <Button variant="contained" endIcon={<Download/>} disableElevation sx={theme=>({
              mt:'0.5rem',
              width:"15rem",
              ml:'3.5rem',
              height:'3.5rem',
              borderRadius:'15px',
              fontSize:"17px",
                fontWeight:'600',
                fontFamily:theme.typography.button,
              [theme.breakpoints.up('md')]:{
                ml:'2rem',
                mt:'20px',
                width:'18rem',
                height:'3.5rem',
                borderRadius:'15px',
                fontWeight:'600',
                fontFamily:theme.typography.button,
                fontSize:'20px',
                textTransform:'capitalize',
                "&:active":{
                  fontSize:'21px',
                  transitionBehavior:'smooth'
                }
              },
              "&:active":{
                fontSize:'18px',
                transitionBehavior:'smooth'
              }
      })}>
 Download Resume </Button>
</AnchorTag>  
         </Stack>
      </Stack>
    </>
  );
}

export default AboutSection;
