import React from 'react'
import { CardConatiner, FlexComponent } from '../utility/styleComponent';
import { darkTheme } from '../utility/Themes';
import { Title } from '../utility/reusableComponent';
import { Stack } from '@mui/material';

function ContactSection() {
  return (
    <>
     <FlexComponent
      sx={(theme) => ({ backgroundColor: theme.palette.background.default})}
      flexDirection={"column"}
     id='Contact' >
       <FlexComponent
          m={"1rem"}
          alignItemBoxs={"center"}
          flexDirection={"column"}
        >
          <Title
            title={"Contact Me"}
            titleDes={
                ''
            }
          />


        </FlexComponent>
      <Stack spacing={3} direction={'row'}> 
        <Stack xs={12} sm={6}>
             
        </Stack>
        <Stack xs={12} sm={6}>
            klsdfjdshf
        </Stack>

      </Stack>
  
      </FlexComponent>
    </>
  )
}

export default ContactSection;