import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { People, Reviews, ViewAgenda } from "@mui/icons-material";
import { LanguageSection } from "../../Sections/ContentSection";
import LandingContact from "./LandingContact";
import Services from "./Services";
import ContactSection from "../../Sections/ContactSection";

function Landing() {
  return (
    <Stack>
      {/* hero section */}
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          position: "relative",
          clipPath: {
            xs: "polygon(0 0, 100% 0%, 100% 95%, 0% 100%)",
            sm: "polygon(0 0, 100% 0%, 100% 93%, 0% 100%)",
            md: "polygon(0 0, 100% 0%, 100% 90%, 0% 100%)",
          },
          width: "100%",
          height: 500,
          overflow: "hidden",
          zIndex: 100,
        }}
      >
        <img
          src={require("../../assets/img/landingBG.jpg")}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "calc(100% + 100px)",
            objectFit: "cover",
            zIndex: -100,
          }}
        />
        {/* wrraper */}
        <Stack
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0, 65%)",
          }}
        />

        {/* content */}
        <Stack sx={{ zIndex: 100 }}>
            <Header bgcolor={"transparent"} />
          <Container>
            <Stack
              sx={{
                textAlign: "center",
                width: { xs: "95%", sm: "80%", md: "65%", lg: "50%" },
                mx: "auto",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 25, lg: 50 },
                  fontWeight: { xs: "bold", sm: 500 },
                  color: "#FFF",
                }}
              >
                Your story starts with us.
              </Typography>
              <Typography sx={{ fontSize: 17, fontWeight: 500, color: "#EEE" }}>
                This is a simple example of a Landing Page you can build using
                Notus React. It features multiple CSS components based on the
                Tailwind CSS design system.
              </Typography>
            </Stack>
          </Container>
        </Stack>
      </Stack>

      {/* boxs section */}
      <Stack
        sx={{
          mt: -8,
          bgcolor: "#E2E8F0",
        }}
      >
        <Stack
          sx={{ position: "relative", zIndex: 2000, mt: -3 }}
          gap={4}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          <Stack mt={7}>
            <Boxs
              icon={<ViewAgenda sx={{ color: "#FFF" }} />}
              iconColor={"#F87171"}
              title={"Awarded Agency"}
              label={
                "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough."
              }
            />
          </Stack>
          <Stack sx={{ mt: { xs: 0, md: -7 } }}>
            <Boxs
              icon={<Reviews sx={{ color: "#FFF" }} />}
              iconColor={"#38BDF8"}
              title={"Free Revisions"}
              label={
                "Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious."
              }
            />
          </Stack>
          <Boxs
            icon={<Reviews sx={{ color: "#FFF" }} />}
            iconColor={"#34D399"}
            title={"Verified Company"}
            label={
              "Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!"
            }
          />
        </Stack>
        <Container>
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: 7, md: 3 },
              mt: { xs: 10, md: 20 },
              mb: 20,
            }}
          >
            <Stack sx={{ width: { xs: "90%", sm: "80%", md: "50%" } }}>
              <LanguageSection
                icon={<People sx={{ color: "var(--title-color)" }} />}
                title={"Working with us is a pleasure"}
                desc={
                  "Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript."
                }
                desc2={
                  "The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript."
                }
                linkTo={"Check Notus React!"}
              />
            </Stack>
            <Stack sx={{ width: { xs: "90%", sm: "80%", md: "40%" } }}>
              <Stack
                sx={{
                  zIndex: 1000,
                  mt: { xs: -4 },
                  width: { xs: "100%" },
                  overflowX: "hidden",
                  borderRadius: 2,
                }}
              >
                <img src={require("../../assets/img/landingBG.jpg")} alt="" />
                <Stack
                  sx={{
                    transform: "rotate(-4deg)",
                    width: "calc(100% + 20px)",
                    height: 40,
                    ml: -2,
                    mt: -10,
                    bgcolor: "var(--blue-color)",
                  }}
                />
                <Stack
                  sx={{
                    mt: { xs: -2.2, sm: -3 },
                    pb: 3,
                    py: { xs: 4, sm: 6 },
                    px: 2,
                    bgcolor: "var(--blue-color)",
                  }}
                >
                  <Typography fontWeight={"bold"} fontSize={20} color={"#FFF"}>
                    Great for your awesome project
                  </Typography>
                  <Typography
                    fontSize={18}
                    lineHeight={1.6}
                    mt={1.2}
                    color={"#FFF"}
                  >
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>

      {/* Contact Section */}
      <Stack>
        <LandingContact />
      </Stack>

      {/* Service Section */}
      <Stack>
        <Services />
      </Stack>

      {/* Contact 2 Section  */}
      <Stack sx={{ bgcolor: "#E2E8F0", mt: -10, pt: 15 }}>
        <ContactSection />
      </Stack>
    </Stack>
  );
}

const Boxs = ({ icon, iconColor, title, label }) => {
  return (
    <Stack
      gap={2}
      sx={{
        boxShadow: "0 5px 10px rgba(0,0,0, 20%)",
        bgcolor: "#FFF",
        width: 300,
        p: 2,
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Stack
        sx={{
          width: 55,
          height: 55,
          mx: "auto",
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: iconColor,
        }}
      >
        {icon}
      </Stack>
      <Typography color={"var(--text-color)"} fontWeight={700} fontSize={18}>
        {" "}
        {title}
      </Typography>
      <Typography color={"var(--hover-color)"}>{label}</Typography>
    </Stack>
  );
};
export default Landing;
