import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { FlexComponent } from "../utility/styleComponent";
import { darkTheme } from "../utility/Themes";

export default function EductionCard({education}) {
  
const  {img,school,date, grade, desc,degree}=education
  return (
    <>
      <Card
        sx={(theme) => ({
          width: "33rem",
          // height: "1rem",
          border: ` 2px solid ${darkTheme.button} `,
          borderRadius: "10px",
          bgcolor: 'black',
          [theme.breakpoints.down("sm")]: {
            width: "25rem",
          },
        })}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500], width: "4rem", height: "4rem" }}
              aria-label="recipe"
              src={img}
            ></Avatar>
          }
          title={
            <>
              <Typography variant="subtitle1" component="div">
                {school}
              </Typography>
            </>
          }
          subheader={
            <>
              <Typography variant="caption" component="div">
                {degree}
              </Typography>
              <FlexComponent justifyContent='space-between' p={2}>
                <Typography variant="caption">
                  {date}
                </Typography>
                <Typography variant="caption" >
                 {grade}
                </Typography>
              </FlexComponent>
            </>
          }
        />
        <CardContent sx={{mt:'-2rem'}}>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
