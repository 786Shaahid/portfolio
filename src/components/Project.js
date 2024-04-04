import React from "react";
import {
  AnchorTag,
  CardConatiner,
  CustomButton,
  FlexComponent,
  GroupButton,
} from "../utility/styleComponent";
import { Title } from "../utility/reusableComponent";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Connectify from "../image/Connectify.jpg";
import portfollio from "../image/portfolio.jpg";
import contactList from "../image/contactList.jpg";
import alarm from "../image/alarm.jpg";
import favoriteMeal from "../image/favouriteMeals.jpg";
import placementCell from "../image/placementCell.jpg";
import authenPic from "../image/googleAuthentication.jpg";
import { GitHub, OnlinePrediction } from "@mui/icons-material";
import { darkTheme } from "../utility/Themes";

function Project() {
 

  return (
    <>
      <FlexComponent
        sx={(theme) => ({ backgroundColor: theme.palette.background.default })}
        flexDirection={"column"}
     id="Project" >
        <FlexComponent
          m={"1rem"}
          alignItemBoxs={"center"}
          flexDirection={"column"}
        >
          <Title
            title={"Projects"}
            titleDes={
              "I have worked on various project using these technology. Here are some of my project"
            }
          />
        </FlexComponent>
        <CardConatiner sx={(theme) => ({ flexGrow: 1 })} width={"70%"}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
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
                  image={Connectify}
                  sx={{ borderRadius: "10px" }}
                />
                <CardConatiner flexWrap={"wrap"} mb={"-20px"}>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    React Js
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Redux Toolkit
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Node Js
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Express Js
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Socket IO
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    MongoDB
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Nodemailer
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    JWT{" "}
                  </CustomButton>
                </CardConatiner>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Connectify Website
                  </Typography>
                  <Typography variant="body2" color={darkTheme.text_secondary}>
                    Built Connectify using MERN for AnchorTag user-friendly social
                    platform. Enhanced features for seamless connections and
                    real-time communication. Empowered meaningful interactions.
                  </Typography>
                </CardContent>
                <GroupButton direction={"row"} spacing={3}>
                  <CustomButton
                    variant="outlined"
                    startIcon={<OnlinePrediction />}
                  >
                   <AnchorTag href="https://connectify-website.netlify.app" target="_blank"> Go Live </AnchorTag>  
                  </CustomButton>
                  <CustomButton variant="outlined" startIcon={<GitHub />}>
                    <AnchorTag rel="noopener" href="https://github.com/786Shaahid/authFrontend" target="_blank">
                    GitHub
                    </AnchorTag>
                  </CustomButton>
                </GroupButton>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
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
                  alt="Portfolio-pic"
                  image={portfollio}
                  sx={{ borderRadius: "10px" }}
                />
                <CardConatiner flexWrap={"wrap"} mb={"-20px"}>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    React Js
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Firebase
                  </CustomButton>
                </CardConatiner>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    My Portfolio
                  </Typography>
                  <Typography variant="body2" color={darkTheme.text_secondary}>
                    I developed AnchorTag personal portfolio using React.js and Firebase
                    to showcase my skills and projects.Utilizing Firebase
                    allowed for seamless hosting and real-time database
                    functionalities. Firebase streamlined hosting and
                    demonstrating proficiency in React.js.{" "}
                  </Typography>
                </CardContent>
                <GroupButton direction={"row"} spacing={3}>
                  <CustomButton
                    variant="outlined"
                    startIcon={<OnlinePrediction />}
                  >
                   <AnchorTag href=" "  target="_blank"> Go Live </AnchorTag>  
                  </CustomButton>
                  <CustomButton variant="outlined" startIcon={<GitHub />}>
                    <AnchorTag  rel="noopener"  href="https://github.com/786Shaahid/portfolio" target="_blank">
                    GitHub
                    </AnchorTag>
                  </CustomButton>
                </GroupButton>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
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
                  alt="placement-pic"
                  image={placementCell}
                  sx={{ borderRadius: "10px" }}
                />
                <CardConatiner flexWrap={"wrap"} mb={"-20px"}>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Node Js
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Express Js
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    MongoDB
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Ejs
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Export to csv
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    JWT{" "}
                  </CustomButton>
                </CardConatiner>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Placement Cell
                  </Typography>
                  <Typography variant="body2" color={darkTheme.text_secondary}>
                    Simplifies student placement processes, facilitating job
                    applications, interview scheduling, and feedback. With
                    strong security and data insights, it enhances efficiency
                    for educational institutions.
                  </Typography>
                </CardContent>
                <GroupButton direction={"row"} spacing={3}>
                  <CustomButton
                    variant="outlined"
                    startIcon={<OnlinePrediction />}
                  >
                   <AnchorTag href=" https://placement-cell-u2c4.onrender.com" target="_blank"> Go Live </AnchorTag>  
                  </CustomButton>
                  <CustomButton variant="outlined" startIcon={<GitHub />}>
                    <AnchorTag rel="noopener" href="https://github.com/786Shaahid/placement-cell" target="_blank">
                    GitHub
                    </AnchorTag>
                  </CustomButton>
                </GroupButton>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
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
                  alt="authentication-pic"
                  image={authenPic}
                  sx={{ borderRadius: "10px" }}
                />
                <CardConatiner flexWrap={"wrap"} mb={"-20px"}>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Node Js
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Express Js
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Socket IO
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    MongoDB
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Nodemailer
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Social Authentication
                  </CustomButton>
                </CardConatiner>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Authentication & Forget Password
                  </Typography>
                  <Typography variant="body2" color={darkTheme.text_secondary}>
                    Developing AnchorTag Node.js app with Google authentication and
                    Nodemailer for password recovery. It ensures secure login
                    and simplifies password reset, prioritizing user security{" "}
                  </Typography>
                </CardContent>
                <GroupButton direction={"row"} spacing={3}>
                  <CustomButton
                    variant="outlined"
                    startIcon={<OnlinePrediction />}
                  >
                   <AnchorTag rel="noopener" href="https://forget-password-zbxo.onrender.com " target="_blank"> Go Live </AnchorTag>  
                  </CustomButton>
                  <CustomButton variant="outlined" startIcon={<GitHub />}>
                    <AnchorTag rel="noopener" href="https://github.com/786Shaahid/authenticationForgetpassword" target="_blank">
                    GitHub
                    </AnchorTag>
                  </CustomButton>
                </GroupButton>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
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
                  alt="favourite-pic"
                  image={favoriteMeal}
                  sx={{ borderRadius: "10px" }}
                />
                <CardConatiner flexWrap={"wrap"} mb={"-20px"}>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Javascript
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Css
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    HTML
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Meal APIs
                  </CustomButton>
                </CardConatiner>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Favourite Meal
                  </Typography>
                  <Typography variant="body2" color={darkTheme.text_secondary}>
                    Discover and explore meals effortlessly with the
                    'Find/Search Meal' project.  It empowers users to dynamically
                    search, filter, and access detailed recipe information.
                  </Typography>
                </CardContent>
                <GroupButton direction={"row"} spacing={3}>
                  <CustomButton
                    variant="outlined"
                    startIcon={<OnlinePrediction />}
                  >
                   <AnchorTag rel="noopener" href=" https://786shaahid.github.io/favouritemealsapp/index.html" target="_blank"> Go Live </AnchorTag>  
                  </CustomButton>
                  <CustomButton variant="outlined" startIcon={<GitHub />}>
                    <AnchorTag rel="noopener" href="https://github.com/786Shaahid/favouritemealsapp" target="_blank">
                    GitHub
                    </AnchorTag>
                  </CustomButton>
                </GroupButton>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
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
                  alt="alarm-pic"
                  image={alarm}
                  sx={{ borderRadius: "10px" }}
                />
                <CardConatiner flexWrap={"wrap"} mb={"-20px"}>
                <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Javascript
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Css
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    HTML
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    Local Storage
                  </CustomButton>
                 
                </CardConatiner>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    My Alarm
                  </Typography>
                  <Typography variant="body2" color={darkTheme.text_secondary}>
                  Allowing users to set and manage alarms seamlessly. It demonstrates my JavaScript skills and commitment to practical applications.
                  </Typography>
                </CardContent>
                <GroupButton direction={"row"} spacing={3}>
                  <CustomButton
                    variant="outlined"
                    startIcon={<OnlinePrediction />}
                  >
                   <AnchorTag rel="noopener" href=" https://786shaahid.github.io/digitalalarm/" target="_blank"> Go Live </AnchorTag>  
                  </CustomButton>
                  <CustomButton variant="outlined" startIcon={<GitHub />}>
                    <AnchorTag rel="noopener" href="https://github.com/786Shaahid/digitalalarm" target="_blank">GitHub</AnchorTag>
                  </CustomButton>
                </GroupButton>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
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
                  alt="contactList-pic"
                  image={contactList}
                  sx={{ borderRadius: "10px" }}
                />
                <CardConatiner flexWrap={"wrap"} mb={"-20px"}>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    React Js
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    CSS
                  </CustomButton>
                  <CustomButton sx={{ m: "5px  5px 2px", p: "3px" }}>
                    {" "}
                    
                    Rest APIs
                  </CustomButton>
                </CardConatiner>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Contact-List
                  </Typography>
                  <Typography variant="body2" color={darkTheme.text_secondary}>
                  Users can seamlessly add, update, or delete contacts within the list. Utilizing props for efficient data transfer between components.
                  </Typography>
                </CardContent>
                <GroupButton direction={"row"} spacing={3}>
                  <CustomButton
                    variant="outlined"
                    startIcon={<OnlinePrediction />}
                  >
                   <AnchorTag rel="noopener" href="https://786contactlist.netlify.app/" target="_blank"> Go Live </AnchorTag>  
                  </CustomButton>
                  <CustomButton variant="outlined" startIcon={<GitHub />}>
                    <AnchorTag rel="noopener" href="https://github.com/786Shaahid/contact-lists" target="_blank">GitHub</AnchorTag>
                  </CustomButton>
                </GroupButton>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <Card  sx={{padding:'8px' ,bgcolor:'black', minHeight:'31rem',outline:`2px solid ${darkTheme.button}`,borderRadius:'20px'}} >
      <CardMedia
        component="img"
        alt="chat-pic"
        image={Connectify}
        sx={{borderRadius:"10px"}}
      />
      <CardConatiner flexWrap={'wrap'} mb={'-20px'}>
            <CustomButton sx={{m:'5px  5px 2px',p:'3px'}}> React Js</CustomButton>
            <CustomButton sx={{m:'5px  5px 2px',p:'3px'}}> Redux Toolkit</CustomButton>
            <CustomButton sx={{m:'5px  5px 2px',p:'3px'}}> Node Js</CustomButton>
            <CustomButton sx={{m:'5px  5px 2px',p:'3px'}}> Express Js</CustomButton>
            <CustomButton sx={{m:'5px  5px 2px',p:'3px'}}> Socket IO</CustomButton>
            <CustomButton sx={{m:'5px  5px 2px',p:'3px'}}> MongoDB</CustomButton>
            <CustomButton sx={{m:'5px  5px 2px',p:'3px'}}> Nodemailer</CustomButton>
      </CardConatiner>

      <CardContent >
        <Typography gutterBottom variant="h5" component="div" >
          Connectify Website
        </Typography>
        <Typography variant="body2"  color={darkTheme.text_secondary}>
         Built Connectify using MERN for AnchorTag user-friendly social platform. Enhanced features for
seamless connections and real-time communication. Empowered meaningful interactions.
        </Typography>
      </CardContent>
      <GroupButton direction={'row'} spacing={3}>
        <CustomButton  variant='outlined'  startIcon={<OnlinePrediction/>}  >Go Live</CustomButton>
        <CustomButton   variant='outlined'  startIcon={<GitHub/>} > Git</CustomButton>
      </GroupButton>
                 </Card> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <Card  sx={{padding:'8px' ,bgcolor:'black', minHeight:'31rem',outline:`2px solid ${darkTheme.button}`,borderRadius:'20px'}} >
      <CardMedia
        component="img"
        alt="chat-pic"
        image={Connectify}
        sx={{borderRadius:"10px"}}
      />
      <CardConatiner flexWrap={'wrap'} mb={'-20px'}>
            <CustomButton sx={{m:'5px  5px 2px',p:'3px'}}> React Js</CustomButton>
            <CustomButton sx={{m:'5px  5px 2px',p:'3px'}}> Redux Toolkit</CustomButton>
            <CustomButton sx={{m:'5px  5px 2px',p:'3px'}}> Node Js</CustomButton>
            <CustomButton sx={{m:'5px  5px 2px',p:'3px'}}> Express Js</CustomButton>
            <CustomButton sx={{m:'5px  5px 2px',p:'3px'}}> Socket IO</CustomButton>
            <CustomButton sx={{m:'5px  5px 2px',p:'3px'}}> MongoDB</CustomButton>
            <CustomButton sx={{m:'5px  5px 2px',p:'3px'}}> Nodemailer</CustomButton>
      </CardConatiner>

      <CardContent >
        <Typography gutterBottom variant="h5" component="div" >
          Connectify Website
        </Typography>
        <Typography variant="body2"  color={darkTheme.text_secondary}>
         Built Connectify using MERN for AnchorTag user-friendly social platform. Enhanced features for
seamless connections and real-time communication. Empowered meaningful interactions.
        </Typography>
      </CardContent>
      <GroupButton direction={'row'} spacing={3}>
        <CustomButton  variant='outlined'  startIcon={<OnlinePrediction/>}  >Go Live</CustomButton>
        <CustomButton   variant='outlined'  startIcon={<GitHub/>} > Git</CustomButton>
      </GroupButton>
                 </Card> */}
            </Grid>
          </Grid>
        </CardConatiner>
      </FlexComponent>
    </>
  );
}

export default Project;
