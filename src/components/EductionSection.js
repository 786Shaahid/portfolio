import React from 'react'
import {  FlexComponent } from '../utility/styleComponent';
import {  TimeLineItem, Title } from '../utility/reusableComponent';
import { darkTheme } from '../utility/Themes';
import Timeline from '@mui/lab/Timeline';
import { education } from '../data/data';

function EductionSection() {
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
            title={"Education"}
            titleDes={"My education has been a journey of self-discovery and growth.My educational details are as follows."} />
        </FlexComponent>
    <Timeline >
   {
    education.map((eduItem,index)=>(<TimeLineItem item={eduItem} key={index} />))
   } 
    </Timeline>
      </FlexComponent>
    </>
  )
}

export default EductionSection;