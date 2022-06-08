import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TourCard from "../components/TourCard";
import cities from "../data.json";

import React from "react";

function Home() {
  return (
    <div className="App">
      <Container>
        {cities.map((city) => (
          <>
            <Typography
              variant="h5"
              component="h2"
              marginTop={5}
              marginBottom={5}
            >
              {city.name}
            </Typography>
            <Grid container spacing={4}>
              {city.tours.map((tour, index) => (
                <TourCard key={index} tour={tour} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
}

export default Home;
