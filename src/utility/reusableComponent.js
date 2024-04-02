import { Box, Grid, Stack, Typography } from "@mui/material"
import { darkTheme, lightTheme } from "./Themes"
import { theme } from "../Theme"

export const Title=({title,titleDes})=>{
    return(
        <>
        <Typography variant="h4" fontWeight={'600'} color={darkTheme.text_primary} mt={'0.5rem'}>{title}</Typography>
        <Stack  width={'60%'} textAlign={'center'} m={'0.8rem'}  >
        <Box fontSize={'1rem'} sx={theme=>({
                        fontSize:'20px',
                        fontFamily:theme.typography.main,
                        color:`${darkTheme.text_secondary}`,
                        wordSpacing:'1px',
                        opacity:'0.8',

        })} >{titleDes}</Box>
        </Stack>
        </>
    )
}

