import { Box,  Stack, Typography } from "@mui/material"
import { darkTheme} from "./Themes"
import EductionCard from '../components/EducationCard';
// import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
export const Title=({title,titleDes})=>{
    return(
        <>
        <Typography variant="h4" fontWeight={'600'} color={darkTheme.text_primary} sx={{
        mt: { xs: '3.6rem', sm: '2.3rem' }
      }}>{title}</Typography>
        <Stack  width={'80%'} textAlign={'center'} m={'0.8rem'}  >
        <Box  sx={theme=>({
                        fontSize:'1rem',
                        fontFamily:theme.typography.main,
                        color:`${darkTheme.text_secondary}`,
                        wordSpacing:'1px',
                        opacity:'0.8',

        })} >{titleDes}</Box>
        </Stack>
        </>
    )
}

export const TimeLineItem=({item})=>{
//  console.log(item.id);
return (
    <>
      {/* <Timeline > */}
      <TimelineItem sx={{marginBottom:'15px'}} key={item.id}>
      <TimelineSeparator >
          <TimelineDot sx={{bgcolor:darkTheme.button,outline:`3px solid ${darkTheme.button}`,outlineOffset:'3px'}}/>
          <TimelineConnector sx={{bgcolor:darkTheme.button,width:'4px'}}/>
        </TimelineSeparator>
        <TimelineContent><EductionCard education={item}/></TimelineContent>
      </TimelineItem>
      {/* <TimelineItem>
        <TimelineSeparator >
          <TimelineDot sx={{bgcolor:darkTheme.button,outline:`3px solid ${darkTheme.button}`,outlineOffset:'3px'}}/>
          <TimelineConnector sx={{bgcolor:darkTheme.button,width:'4px'}}/>
        </TimelineSeparator>
        <TimelineContent><EductionCard/></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem> */}
    {/* </Timeline> */}
    </>
)

}
