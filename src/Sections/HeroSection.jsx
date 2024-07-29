import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import MainButton from "../components/MainButton";

function HeroSection() {
  return (
    <Stack sx={{ width: "100%", height: 550, position: "relative" }}>
      <Container>
        <Stack sx={{ mt: -2, width: {xs: "80%", sm: "80%", md: 580}, position: "absolute", top: "50%" }}>
          <Typography
            variant="h5"
            fontSize={33}
            sx={{fontSize: {xs: 25, sm: 28, md: 31, lg: 35}}}
            fontWeight={"bold"}
            color={"var(--hover-color)"}
          >
            Notus React - A beautiful extension for Tailwind CSS.
          </Typography>
          <Typography mt={2} color={"var(--hover-color)"} sx={{fontSize: "1.1rem"}}>
            Notus React is Free and Open Source. It does not change any of the
            CSS from Tailwind CSS. It features multiple HTML elements and it
            comes with dynamic components for ReactJS, Vue and Angular.
          </Typography>
          <Stack className="row" gap={1} mt={3}>
            <MainButton label={"GET STARTED"} color={"var(--blue-color)"} />
            <MainButton label={"GITHUB STAR"} color={"var(--text-color)"} />
          </Stack>
        </Stack>
      </Container>
        
    </Stack>
  );
}


export default HeroSection;
