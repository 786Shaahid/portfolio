import { Box, CssBaseline, Stack, ThemeProvider, } from '@mui/material';
import Navbar from './components/Navbar';
import { theme } from './Theme';
import AboutSection from './components/AboutSection';
import SkillSection from './components/SkillSection';
import Project from './components/Project';
import EductionSection from './components/EductionSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <>
    <ThemeProvider theme={theme} >
    <CssBaseline/>
    <Box display="flex" sx={{bgcolor:'black'}}>
<Stack  flex={7}>
  <Navbar/>
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
