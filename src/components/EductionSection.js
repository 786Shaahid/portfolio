import React from 'react'
import {  FlexComponent } from '../utility/styleComponent';
import {  TimeLineItem, Title } from '../utility/reusableComponent';
import { darkTheme } from '../utility/Themes';
import Timeline from '@mui/lab/Timeline';

function EductionSection({educations}) {
  return (
    <>
      <FlexComponent
      sx={(theme) => ({ backgroundColor: darkTheme.bg
 })}
      flexDirection={"column"}
      id='Education' >
       <FlexComponent
          m={"1rem"}
          flexDirection={"column"}
        >
          <Title
            title={educations.title}
            titleDes={educations.description} />
        </FlexComponent>
    <Timeline >
   {
    educations.education.map((eduItem,index)=>(<TimeLineItem item={eduItem} key={index} />))
   } 
    </Timeline>
      </FlexComponent>
    </>
  )
}

export default EductionSection;