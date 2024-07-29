import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import img1 from "../assets/img/login.jpg";
import img2 from "../assets/img/profile.jpg";
import img3 from "../assets/img/landing.jpg";
import { GitHub, Share } from "@mui/icons-material";
import MainButton from "../components/MainButton";

function ProjectSection() {
  return (
    <Stack>
      <Stack
        sx={{
          height: { xs: "auto", md: 250 },
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "var(--bg-color)",
        }}
      >
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={4}
            mt={-10}
            flexWrap={"wrap"}
          >
            <ProjectCard label={"Login Page"} imgSrc={img1} />
            <ProjectCard label={"Profile Page"} imgSrc={img2} />
            <ProjectCard label={"Landing Page"} imgSrc={img3} />
          </Stack>
        </Container>
      </Stack>
      <Stack sx={{ bgcolor: "var(--bg-color)", position: "relative" }}>
        <Container>
          <Stack direction={"row"} alignItems={"center"} gap={5}>
            <Stack
              gap={3}
              sx={{
                position: "relative",
                zIndex: 1000,
                py: { xs: 10, sm: 20, md: 25 },
                alignItems: { xs: "center", sm: "start" },
              }}
            >
              <Stack
                sx={{
                  p: 1,
                  bgcolor: "#FFF",
                  borderRadius: "50%",
                  width: "fit-content",
                }}
              >
                <Share />
              </Stack>
              <Stack
                gap={2}
                sx={{ width: { sx: "100%", sm: 400, md: 500, lg: 600 }, alignItems: {xs: "center", sm: "start"} }}
              >
                <Typography
                  fontWeight={700}
                  fontSize={30}
                  color={"#FFF"}
                  sx={{ textAlign: { xs: "center", sm: "start" } }}
                >
                  Open Source
                </Typography>
                <Typography
                  fontSize={20}
                  fontWeight={100}
                  color={"var(--secondery-color)"}
                  lineHeight={1.8}
                  sx={{
                    fontSize: { xs: 13, sm: 17, md: 20 },
                    textAlign: { xs: "center", sm: "start" },
                  }}
                >
                  Since Tailwind CSS is an open source project we wanted to
                  continue this movement too. You can give this version a try to
                  feel the design and also test the quality of the code!
                </Typography>
                <Typography
                  fontWeight={100}
                  color={"var(--secondery-color)"}
                  sx={{
                    mt: { xs: 0, sm: 1 },
                    fontSize: { xs: 13, sm: 17, md: 20 },
                    textAlign: { xs: "center", sm: "start" },
                  }}
                >
                  Get it free on Github and please help us spread the news with
                  a Star!
                </Typography>
                <Stack
                  sx={{
                    width: { xs: 120, sm: 150 },
                    mt: 2,
                    textAlign: { xs: "center", sm: "start" },
                  }}
                >
                  <MainButton
                    label={"GITHUB STAR"}
                    color={"var(--text-color)"}
                  />
                </Stack>{" "}
              </Stack>
            </Stack>
          </Stack>
        </Container>
        <Stack
          position={"absolute"}
          sx={{ right: { xs: 0, md: -300 } }}
          ml={10}
        >
          <GitHub sx={{ fontSize: { xs: 400, md: 800 }, color: "#374559" }} />
        </Stack>
      </Stack>
      <Stack>
        <Container>
          <Stack
            sx={{
              bgcolor: "#FFF",
              p: {xs: 2, sm: 5, md: 8, lg: 10},
              borderRadius: 2,
              mt: -7,
              position: "relative",
              zIndex: 2000,
              boxShadow: "0 0 15px rgba(0,0,0, 20%)"
            }}
            textAlign={"center"}
          >
            <Typography fontSize={30}>😍</Typography>
            <Typography fontSize={25} color={"var(--text-color)"} mb={1}>
              Do you love this Starter Kit?
            </Typography>
            <Typography
              color={"var(--hover-color)"}
              fontSize={16}
              sx={{ mx: {xs: 2, sm: 5, md: 10, lg: 23}, fontSize: {xs: 12, sm: 14, md: 16, lg: 18} }}
            >
              Cause if you do, it can be yours now. Hit the buttons below to
              navigate to get the Free version for your next project. Build a
              new web app or give an old project a new look!
            </Typography>
            <Stack className="row" justifyContent={"center"} gap={1} mt={3}>
              <MainButton label={"GET STARTED"} color={"var(--blue-color)"} />
              <MainButton label={"GITHUB STAR"} color={"var(--text-color)"} />
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}

const ProjectCard = ({ label, imgSrc }) => {
  return (
    <Stack
      sx={{
        textAlign: "center",
        gap: 2,
        cursor: "pointer",
        width: { xs: "80%", sm: "40%", md: "calc((100% / 3) - 30px)" },
        overflow: "hidden",
      }}
    >
      <Typography width={"100%"}>{label}</Typography>
      <Stack
        sx={{
          width: "100%",
          overflow: "hidden",
          borderRadius: 2,
          transition: ".3s",
          ":hover": { transform: "translateY(-15px)" },
        }}
      >
        <img
          src={imgSrc}
          alt="imgHere"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Stack>
    </Stack>
  );
};

export default ProjectSection;
