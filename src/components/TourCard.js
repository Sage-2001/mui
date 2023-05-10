import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/niagara-falls-state-park/photos-and-videos/photo-gallery-1.jpg?mw=1224&hash=3A307D9E2F78E2EF21115FCB879E76DE7B9D48AC"
          alt=""
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Immerse into the Falls
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={3}
          >
            <Rating
              name="read-only"
              value={4}
              readOnly
              precision={0.5}
              size="small"
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant="body2" component="p" marginLeft={0.5}>
              (655 reviews)
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h3" marginLeft={0}>
              From INR Rs25,000
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
