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
  Card,
  CardActionArea,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Email, LinkedIn, Phone } from "@mui/icons-material";

function ContactSection() {
  return (
    <>
      <FlexComponent
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
          pb: "20px",
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
          sx={{ border: "2px solid white" }}
        >
          <Stack flex={3} sx={(theme) => ({})}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea sx={{ height: "20rem" }}>
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
                          <AnchorTag href="" target="_blank">
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
            </Stack>
          </Stack>
        </Stack>
        {/* <FlexComponent></FlexComponent> */}
        {/* <Grid container >
        <Grid item xs={12} sm={6} sx={theme=>({
          backgroundImage:`url(${contactMe})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100%',
          height: '100vh'
        })}>

        </Grid>
        <Grid item xs={12} sm={6}></Grid>

      </Grid> */}
      </FlexComponent>
    </>
  );
}

export default ContactSection;
