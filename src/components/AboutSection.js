import { Avatar, Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { FlexComponent } from "../utility/styleComponent";
import Typewriter from "typewriter-effect";
import { darkTheme} from "../utility/Themes";
import myPic from "../image/myPic.jpg";

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
          p: "5em 0",
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
              [theme.breakpoints.down("md")]: {
                pl: "10%",
                mt: "-10%",
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
              style={{ lineHeight: "" }}
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
            <Box sx={theme=>({m:'1rem 0.1rem', fontSize:'20px',lineHeight:'32px',width:'80%',fontFamily:theme.typography.main,color:`${darkTheme.text_secondary}`,opacity:'0.8' })} >
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
          justifyContent:'center',
          alignItems:'center',
          width:"50%",
      })}>
      <Button variant="contained" disableElevation sx={theme=>({
              width:'18rem',
              height:'3.5rem',
              borderRadius:'15px',
              fontWeight:'600',
              fontFamily:theme.typography.button,
              fontSize:'20px',
              textTransform:'capitalize',
              mt:'20px',
              ml:'5px',
              [theme.breakpoints.down('md')]:{
                ml:'10rem',
              },
              "&:active":{
                fontSize:'21px',
                transitionBehavior:'smooth'
              }
      })}>
 Check Resume
</Button>
         </Stack>
      </Stack>
    </>
  );
}

export default AboutSection;
