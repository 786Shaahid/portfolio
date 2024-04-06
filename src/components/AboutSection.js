import { Avatar, Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { AnchorTag, FlexComponent } from "../utility/styleComponent";
import Typewriter from "typewriter-effect";
import { darkTheme} from "../utility/Themes";
import myPic from "../image/myPic.jpg";
import { Download } from "@mui/icons-material";

function AboutSection() {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Stack
        direction={'column'}
        sx={(theme) => ({
          justifyContent: "flex-start",
          alignItems: "flex-start",
          bgcolor: theme.palette.background.default,
          p: "5em 0em",
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
            pl={"20%"}
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                width:'25rem',
                pl: "2%",
                m:'-10%',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
              },
            })}
          >
            <Typography
              variant={isXs ? "h5" : isSm ? "h5" : "h4"}
              fontWeight={600}
              style={{ lineHeight: "1.5" }}
            >
              Hii, I am
            </Typography>
            <Typography
              variant={isXs ? "h5" : isSm ? "h5" : "h4"}
              fontWeight={600}
            >
              Shahid Raza
            </Typography>
            <Typography
              variant={isXs ? "h6" : isSm ? "h5" : "h4"}
              sx={{ display: "flex" }}
              style={{ lineHeight: "1.5" }}
            >
              <span style={{  fontWeight: "600" }}>I am a &nbsp; </span>
              <span style={{ color: darkTheme.primary, fontWeight: "600" }}>
                <Typewriter
                  options={{
                    strings: "Full Stack Developer.",
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </Typography>
            <Box sx={theme=>({m:'1rem 0.1rem', fontSize:'20px',lineHeight:'32px',width:'80%',fontFamily:theme.typography.main,color:`${darkTheme.text_secondary}`,opacity:'0.8' ,
                   [theme.breakpoints.down('xs')]:{
                    m:"10px 10px"
             }
          })} >
              I am a motivated and adaptable individual, always seeking new
              challenges. With a strong passion for learning, I am committed to
              delivering high-quality results with a positive attitude and a
              growth mindset. I am prepared to make a meaningful contribution
              and strive for excellence in all endeavors.
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
        width:"20%",
        justifyContent:'space-evenly',
        margin:'1px 11rem',
        [theme.breakpoints.down('sm')]:{
          width:"100%",
          justifyContent:'center',
          alignItems:'center',
            ml:'10px',
          },
        })}>
        <AnchorTag href="https://ninjasfiles.s3.amazonaws.com/full-stack%20(2).pdf_2ce6db872ab91637c289fc7cb55e5353/full-stack%20(2).pdf" target="_blank"> 
      <Button variant="contained" endIcon={<Download/>} disableElevation sx={theme=>({
              width:'18rem',
              height:'3.5rem',
              borderRadius:'15px',
              fontWeight:'600',
              fontFamily:theme.typography.button,
              fontSize:'20px',
              textTransform:'capitalize',
              ml:'5px',
              mt:'20px',
              [theme.breakpoints.down('sm')]:{
                mt:'2rem',
                width:"15rem",
              },
              "&:active":{
                fontSize:'21px',
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
