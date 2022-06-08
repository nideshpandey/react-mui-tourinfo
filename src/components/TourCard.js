import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import React from "react";
import { Box } from "@mui/system";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "subtitle2",
          },
          style: {
            fontSize: 12,
          },
        },
      ],
    },
  },
});

function TourCard({ tour }) {
  return (
    <Grid item xs={4}>
      <ThemeProvider theme={theme}>
        <Paper>
          <img
            className="img"
            src={tour.image}
            alt={tour.name}
          />
          <Box paddingX={2}>
            <Typography component="h7">{tour.name}</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 15 }} />

              <Typography variant="body2" component="p" marginLeft={1}>
                {tour.duration} Hours
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
              <Rating
                name="read-only"
                value={tour.rating}
                readOnly
                precision={0.5}
                size="small"
              />
              <Typography variant="subtitle2" component="p" marginLeft={1}>
                ({tour.numberOfReviews})
              </Typography>
            </Box>
            <Box>
              <Typography>Starts from ${tour.price}</Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

export default TourCard;
