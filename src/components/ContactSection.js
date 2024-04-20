import React from "react";
import {
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
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowUpwardSharp } from "@mui/icons-material";
import { lightBlue } from "@mui/material/colors";
import { Link } from "react-scroll";
import { IconsData } from "../data/iconData";

function ContactSection({contactInfo}) {
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
        })}
        flexDirection={"column"}
        id="Contact"
      >
        <FlexComponent m={"1rem"} flexDirection={"column"}>
          <Title
            title={contactInfo.title}
            titleDes={contactInfo.description}
          />
        </FlexComponent>
        <Stack
          spacing={1}
          justifyContent={"center"}
          alignItems={"center"}
          direction={{ xs: "column", sm: "row" }}
          p={1}
          sx={theme=>({ border: "2px solid white",
             width:"96%",
           [theme.breakpoints.up('md')]:{
             width:'70%'
           } 
        })}
        >
          <Stack flex={3} sx={(theme) => ({})}>
            <Card sx={{ width:"21rem"}} >
              <CardActionArea sx={theme=>({ height: "20rem", 
      })}>
        <List sx={{padding:0}}>
        {
          contactInfo.contactData.map((contact,index)=>(<>
                  <ListItem sx={{padding:0}}>
                    <ListItemButton>
                      <ListItemIcon>
                        <Icon 
                        component={IconsData[contact.icon]}
                          sx={(theme) => ({
                            fontSize: "30px",
                            color: "white",
                          })}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                           <Typography sx={{fontWeight:'550'}}>
                            {contact.info}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
          </>))

}
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
               {contactInfo.subHeading}
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

        {/* BOTTOM NEGIVATATION  */}
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
