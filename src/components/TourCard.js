import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/niagara-falls-state-park/photos-and-videos/photo-gallery-1.jpg?mw=1224&hash=3A307D9E2F78E2EF21115FCB879E76DE7B9D48AC"
          alt=""
          className="img"
        />
        <Typography variant="subtitle1" component="h2">
          Immerse into the Falls
        </Typography>
      </Paper>
    </Grid>
  );
};

export default TourCard;
