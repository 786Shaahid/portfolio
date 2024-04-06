import { Box, CssBaseline, Stack, ThemeProvider, } from '@mui/material';
import Navbar from './components/Navbar';
import { theme } from './Theme';
import AboutSection from './components/AboutSection';
import SkillSection from './components/SkillSection';
import Project from './components/Project';
import EductionSection from './components/EductionSection';
import ContactSection from './components/ContactSection';
import {useState} from 'react';
import DrawerComponent from './components/Drawer';
function App() {
  const [open, setOpen]=useState(false);
  console.log(open);
  const toggledrawer=(value)=>()=>{
    setOpen(value);
    console.log("sfkljfkl");
  }

  return (
    <>
    <ThemeProvider theme={theme} >
    <CssBaseline/>
    <DrawerComponent open={open} toggledrawer={toggledrawer}  />
    <Box display="flex" sx={theme=>({bgcolor:'black',
     [theme.breakpoints.down('sm')]:{
      width:"20rem",
      // siz

  }
  })} >
<Stack  flex={7} sx={theme=>({
   [theme.breakpoints.down('sm')]:{
    width:"20rem"
}
})}>
  <Navbar toggledrawer={toggledrawer}/>
  <AboutSection/>
  <SkillSection/>
  <Project/>
  <EductionSection/>
  <ContactSection/>
  

   </Stack>
<Stack  flex={1} sx={{display:{xs:"none",sm:'block'}}}></Stack>
</Box>

    </ThemeProvider>
    </>
    
  );
}

export default App;
