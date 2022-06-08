import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import TitlebarImageList from "../components/ImageCollage";
import SimpleAccordion from "../components/Accordion";
import BasicModal from "../components/Modal";

function TourPage() {
  return (
    <Container sx={{ width: 800 }}>
      <Typography variant="h3" component="h1" marginTop={5}>
        Explore Nepal
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://digitalnomads.world/wp-content/uploads/2021/07/kathmandu-digital-nomads.jpg"
          alt="Nepal"
          height={300}
          width={350}
        />
        <TitlebarImageList />
      </Box>
      <Box marginTop={3} marginBottom={3}>
        <Typography variant="h6" component="h3">
          About this OFFER !
        </Typography>
        <Typography variant="paragraph" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius neque
          sunt aliquam doloremque vel. Quidem exercitationem, tempore
          consequatur harum nam voluptatibus. Quasi maiores cupiditate sunt
          atque necessitatibus laudantium asperiores quibusdam!
        </Typography>
      </Box>
      <Box marginTop={3} marginBottom={3}>
        <Typography variant="h6" component="h1">
          Frequently Asked Questions
        </Typography>
        <SimpleAccordion />
      </Box>
      <BasicModal />
    </Container>
  );
}

export default TourPage;
