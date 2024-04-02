import React from 'react'
import { FlexComponent } from '../utility/styleComponent'
// import { darkTheme } from '../utility/Themes'
import { Title } from '../utility/reusableComponent'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, styled } from '@mui/material'
import Connectify from '../image/Connectify.jpg';
import portfollio from '../image/portfolio.jpg';
import contactList from '../image/contactList.jpg';
import alarm from '../image/alarm.jpg';
import favoriteMeal from '../image/favouriteMeals.jpg';
import placementCell from '../image/placementCell.jpg';
import authenPic from '../image/googleAuthentication.jpg';
 

function Project() {

 const CardConatiner=styled(Box)(({theme})=>({
          width:'70%',
          backgroundColor: ""     ,
          padding:'20px' ,
                    
 }));

  // const CardItem=styled(Card)(({theme})=>({

  // }))

  return (
    <>
         <FlexComponent sx={theme=>({backgroundColor:theme.palette.background.default})} flexDirection={"column"}>
         <FlexComponent
          m={"1rem"}
          alignItemBoxs={"center"}
          flexDirection={"column"}
        >
          <Title
            title={"Projects"}
            titleDes={
              "this is very nice project s.khkfds lklshjfhsdhf sddhfkjasdhfjhadsf sadfsadfhjsdfhsf o;asdjfosdhjfodf odshjfhsdifusdf"
            }
          />
        </FlexComponent>
        <CardConatiner sx={(theme) => ({ flexGrow: 1 })} >
          <Grid container spacing={3} >
            <Grid item xs={12} sm={6}>
             <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        image={Connectify}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Connectify Website
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Built Connectify using MERN for a user-friendly social platform. Enhanced features for
seamless connections and real-time communication. Empowered meaningful interactions.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                 </Card>
            </Grid>

            <Grid item xs={12} sm={6}  >
          <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        image={portfollio}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
                 </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
          <Card >
      <CardMedia
        component="img"
        alt="Placement-Cell Pic"
        // height="140"
        image={placementCell}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
            <Card >
      <CardMedia
        component="img"
        alt="authentication-pic"
        image={authenPic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
           </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card >
      <CardMedia
        component="img"
        alt="Favourite-pic"
        image={favoriteMeal}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
           </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card >
      <CardMedia
        component="img"
        alt="alarm"
        image={alarm}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
           </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card >
      <CardMedia
        component="img"
        alt="contactList-pic"
        image={contactList}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
           </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card >
      <CardMedia
        component="img"
        alt="authentication-pic"
        image={authenPic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
           </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card >
      <CardMedia
        component="img"
        alt="authentication-pic"
        image={authenPic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
           </Card>
            </Grid>

          </Grid>



        </CardConatiner>

         </FlexComponent>
        
        </>
  )
}

export default Project