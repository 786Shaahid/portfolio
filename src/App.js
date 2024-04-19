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
import storeData from './data/store.json';
function App() {
  const [open, setOpen]=useState(false);
  const toggledrawer=(value)=>()=>{
    setOpen(value);
  }

  return (
    <>
    <ThemeProvider theme={theme} >
    <CssBaseline/>
    <Box display="flex" sx={theme=>({bgcolor:'black',
     [theme.breakpoints.up('md')]:{
       width:"full",
      }
    })} >
    <DrawerComponent open={open} toggledrawer={toggledrawer}  />
<Stack  flex={7} >
  <Navbar toggledrawer={toggledrawer} navData={storeData.navItem}/>
  <AboutSection  aboutData={storeData.myInfo} />
  <SkillSection  skillData={storeData.mySkill} />
  <Project    projects={storeData.projects} />
  <EductionSection  education={storeData.eductions} />
  <ContactSection   />
  

   </Stack>
   <Stack  flex={1} sx={{display:{xs:"none",sm:'block'}}}></Stack>
   </Box>

    </ThemeProvider>
    </>
    
  );
}

export default App;
