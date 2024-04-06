import React from "react";
import {
  AnchorTag,
  CustomButton,
  CustomTextField,
  FlexComponent,
} from "../utility/styleComponent";
import { darkTheme, lightTheme } from "../utility/Themes";
import { Title } from "../utility/reusableComponent";
import {
  Backdrop,
  Card,
  CardActionArea,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowUpwardSharp, Email, LinkedIn, Phone } from "@mui/icons-material";
import { lightBlue } from "@mui/material/colors";
import { Link } from "react-scroll";

function ContactSection() {


  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <FlexComponent
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
          [theme.breakpoints.down('sm')]:{
            width:"25.8rem",
            // height:'85rem',
     }
        })}
        flexDirection={"column"}
        id="Contact"
      >
        <FlexComponent m={"1rem"} flexDirection={"column"}>
          <Title
            title={"Contact Me"}
            titleDes={
              "After reviewing my portfolio, please don't hesitate to contact me regarding your future projects. I look forward to hearing from you."
            }
          />
        </FlexComponent>
        <Stack
          spacing={1}
          justifyContent={"center"}
          alignItems={"center"}
          direction={{ xs: "column", sm: "row" }}
          width={"70%"}
          p={1}
          sx={theme=>({ border: "2px solid white",
          [theme.breakpoints.down('sm')]:{
            width:"90%",
            // p:'20px'
     }
        })}
        >
          <Stack flex={3} sx={(theme) => ({})}>
            <Card sx={theme=>({ maxWidth: 345 ,
            // flexDirection:'column',
             [theme.breakpoints.down('sm')]:{
              width:"100%",
       }
            })}>
              <CardActionArea sx={theme=>({ height: "20rem", 
              [theme.breakpoints.down('sm')]:{
            width:"70%",
     } })}>
                <List>
                  <ListItem>
                    <ListItemButton>
                      <ListItemIcon>
                        <LinkedIn
                          sx={(theme) => ({
                            fontSize: "30px",
                            color: "white",
                          })}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <AnchorTag
                            href="https://www.linkedin.com/in/developers-shahid/"
                            target="_blank"
                          >
                            MyLinkedIn Profile
                          </AnchorTag>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <ListItemIcon>
                        <Phone
                          sx={(theme) => ({
                            fontSize: "30px",
                            color: "white",
                          })}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <AnchorTag href="#" target="_blank">
                            +91 6205807255
                          </AnchorTag>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <ListItemIcon>
                        <Email
                          sx={(theme) => ({
                            fontSize: "30px",
                            color: "white",
                          })}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <AnchorTag href="" target="_blank">
                            shahidraza02qwert@gmail.com
                          </AnchorTag>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </CardActionArea>
            </Card>
          </Stack>
          <Stack flex={5} spacing={3} p={4}>
            <Stack justifyContent={"center"} textAlign={"center"}>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ textDecoration: "underline" }}
                gutterBottom
              >
                Reach Out and Connect
              </Typography>
            </Stack>
            <Stack>
              <CustomTextField id="outlined" label="Name" variant="outlined" />
            </Stack>
            <Stack>
              <CustomTextField id="outlined" label="Email" variant="outlined" />
            </Stack>
            <Stack>
              <CustomTextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                placeholder="message..."
              />{" "}
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <CustomButton
              onClick={handleOpen}
                sx={{
                  outline: "none",
                  border: `2px solid ${lightTheme.bgLight}`,
                  width: "50%",
                  "&:hover": {
                    border: `2px solid ${darkTheme.button}`,
                  },
                }}
              >
                Submit
              </CustomButton>
              <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
            </Stack>
          </Stack>
        </Stack>
       
       <Stack sx={{
           width:'80px',
           height:'80px',
          bgcolor:` ${lightTheme.primary}`,
           position:'relative',
           zIndex:4,
           right:'0',
           bottom:'-5px',
           borderRadius:'50%',
           '&:hover':{
            bgcolor:lightBlue[100],
            color:darkTheme.bg
           }
       }} justifyContent={'center'} alignItems={'center'}><Link to="About" smooth={'true'} duration={500}><ArrowUpwardSharp  sx={{'&:hover':{
        fontSize:'3rem',
        transition:`all 0.5s ease-in-out `
       }}}/></Link></Stack>
      </FlexComponent>

    </>
  );
}

export default ContactSection;
