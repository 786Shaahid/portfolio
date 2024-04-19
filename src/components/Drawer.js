
import React from 'react'
import {
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
import {  AccountCircle,Book,Dashboard,Email,Psychology } from '@mui/icons-material';
import { Link } from 'react-scroll';

const iconStyle={
  fontSize: "30px",
  color: "white",
}


const DrawerItem =[
  {icon:<AccountCircle sx={iconStyle} />, text:'About'},
  {icon:<Psychology    sx={iconStyle}      />, text:'Skills'},
  {icon:<Dashboard     sx={iconStyle}    />, text:'Projects'},
  {icon:<Book          sx={iconStyle}  />, text:'Education'},
  {icon:<Email         sx={iconStyle}  />, text:'Contact'}
]

function DrawerComponent({open,toggledrawer}) {
    const DrawerList = (
        <Box sx={{ width: 250 ,zIndex:2}} role="presentation" onClick={toggledrawer(false)}>
          <List>
            {
            
            DrawerItem.map((item, index) => (
              <ListItem key={index} disablePadding>
              <Link to={item.text} smooth={true} duration={500}>
                <ListItemButton onClick={toggledrawer(false)}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
                </Link>  
              </ListItem>
            ))}
          </List>
        </Box>
      );
  return (
    <div>
    <Drawer open={open} onClose={toggledrawer(false)}>
      {DrawerList}
    </Drawer>
  </div>
  )
}

export default DrawerComponent;