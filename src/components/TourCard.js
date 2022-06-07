import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import React from "react";
import { Box } from "@mui/system";
import Rating from "@mui/material/Rating";

function TourCard() {
  return (
    <Grid item xs={3}>
      <Paper>
        <img
          className="img"
          src="https://i0.wp.com/onedayitinerary.com/wp-content/uploads/2021/07/One-day-in-Kathmandu-itinerary.jpg?fit=800%2C600&ssl=1"
          alt="Kathmandu"
        />
        <Box paddingX={2}>
          <Typography component="h7">Kathmandu</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTime sx={{ width: 15 }} />

            <Typography variant="body2" component="p" marginLeft={1}>
              5 Hours
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography marginRight={0.5}>Rating</Typography>
            <Rating name="read-only" value={3} readOnly precision={0.5} size="small"/>
            <Typography variant="subtitle2" component="p" marginLeft={1}>(3000 Reviews) </Typography>
          </Box>
          <Box>
              <Typography>Starts from $99</Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export default TourCard;
