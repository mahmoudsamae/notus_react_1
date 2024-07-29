import { Css, DocumentScanner, Javascript, Pages } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import JavaScriptSection from "../Sections/JavaScriptSection";
import DocumentSection from "./DocumentSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import Footer from "../components/Footer";

function ContentSection() {
  return (
    <Stack sx={{ zIndex: 100 }}>
      <Stack
        mt={11}
        sx={{
          pt: 12,
          bgcolor: "#FFF",
          transform: "rotate(-1.5deg)",
          width: "calc(100% + 20px)",
          ml: -1,
          mb: -2,
        }}
      />
      <Stack
        sx={{
          mt: -4,
          pt: 8,
          bgcolor: "#f1f5f9",
        }}
      >
        <Container>
          <Stack sx={{ px: { xs: 0, sm: 2, md: 5, lg: 10 } }}>
            {/* first section  */}
            <Stack
              sx={{
                flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "center", md: "start" },
                alignItems: { xs: "center", md: "start" },
                gap: { xs: 1, sm: 4, md: 8, lg: 15 },
              }}
            >
              <Stack
                sx={{
                  zIndex: 1000,
                  mt: -4,
                  width: { xs: "100%", sm: 300, md: 420 },
                  overflowX: "hidden",
                  borderRadius: 2,
                }}
              >
                <img src={require("../assets/img/team-3-800x800.jpg")} alt="" />
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
                    mt: -2.2,
                    pb: 3,
                    py: { xs: 4, sm: 3 },
                    px: 2,
                    bgcolor: "var(--blue-color)",
                  }}
                >
                  <Typography fontWeight={"bold"} fontSize={12} color={"#FFF"}>
                    Great for your awesome project
                  </Typography>
                  <Typography fontSize={11} color={"#FFF"}>
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                mt={4}
                className="row"
                gap={5}
                sx={{
                  alignItems: { xs: "center", md: "start" },
                  justifyContent: { xs: "center", md: "start" },
                  gap: { xs: 2, md: 5 },
                }}
                flexWrap={"wrap"}
              >
                <ContentItem
                  icon={<Css sx={{ color: "var(--title-color)" }} />}
                  title={"CSS Components"}
                  desc={
                    "Notus React comes with a huge number of Fully Coded CSS components."
                  }
                />
                <ContentItem
                  icon={<Pages sx={{ color: "var(--title-color)" }} />}
                  title={"Pages"}
                  desc={
                    "This extension also comes with 3 sample pages. They are fully coded so you can start working instantly."
                  }
                />
                <ContentItem
                  icon={<Javascript sx={{ color: "var(--title-color)" }} />}
                  title={"JavaScript Components"}
                  desc={
                    "We also feature many dynamic components for React, NextJS, Vue and Angular."
                  }
                />
                <ContentItem
                  icon={
                    <DocumentScanner sx={{ color: "var(--title-color)" }} />
                  }
                  title={"Documentation"}
                  desc={
                    "Built by developers for developers. You will love how easy is to to work with Notus React."
                  }
                />
              </Stack>
            </Stack>


            {/* second section  ( Css Section )*/}
            <Stack
              mt={10}
              sx={{
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
              }}
              justifyContent={"space-between"}
            >
              <Stack
                sx={{ width: { xs: "100", sm: "80%", md: "62%", lg: "42%" } }}
              >
                <LanguageSection
                  icon={<Css sx={{ color: "var(--title-color)" }} />}
                  title={"CSS Components"}
                  desc={
                    "Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can have different colours."
                  }
                  btns={[
                    "BUTTONS",
                    "INPUTS",
                    "LABELS",
                    "MENUS",
                    "NAVBARS",
                    "PAGINATION",
                    "PROGRESSBARS",
                    "TYPOGRAPHY",
                  ]}
                />
              </Stack>
              <Stack
                sx={{
                  width: { xs: "100", sm: "80%", md: "62%", lg: "50%" },
                  height: 440,
                  position: "relative",
                  gap: 2,
                  mt: {xs: 3, md: 0},
                  px: { xs: 7, sm: 0 },
                }}
                >
                <Stack
                  sx={{
                    width: { xs: "100%", sm: 160 },
                    height: {xs: 220, sm: 180},
                    borderRadius: 2,
                    left: 90,
                    position: { xs: "flex", sm: "absolute" },
                  }}
                >
                  <Stack
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 2,
                      boxShadow: "15px 10px 20px rgba(0,0,0, 10%)",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={require("../assets/img/component-info-card.png")}
                      alt=""
                      style={{ borderRadius: 2, width: "100%", height: "100%" }}
                    />
                  </Stack>
                  <Stack
                    sx={{
                      display: "none",
                      position: { xs: "flex", sm: "absolute" },
                      width: 100,
                      bottom: -15,
                      right: -20,
                      borderRadius: 1.5,
                      boxShadow: "0 0 15px rgba(0,0,0, 20%)",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={require("../assets/img/component-btn.png")}
                      alt=""
                    />
                  </Stack>
                </Stack>
                <Stack
                  sx={{
                    width: { xs: "100%", sm: 200 },
                    height: 170,
                    borderRadius: 2,
                    left: 0,
                    bottom: 75,
                    position: { xs: "flex", sm: "absolute" },
                  }}
                >
                  <Stack
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 2,
                      boxShadow: "15px 10px 20px rgba(0,0,0, 10%)",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={require("../assets/img/component-info-2.png")}
                      alt=""
                      style={{ borderRadius: 2, width: "100%", height: "100%" }}
                    />
                  </Stack>
                </Stack>
                <Stack
                  sx={{
                    width: { xs: "100%", sm: 180 },
                    height: 250,
                    borderRadius: 2,
                    right: 0,
                    top: 50,
                    position: { xs: "flex", sm: "absolute" },
                  }}
                >
                  <Stack
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 2,
                      boxShadow: "15px 10px 20px rgba(0,0,0, 10%)",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={require("../assets/img/component-profile-card.png")}
                      alt=""
                      style={{ borderRadius: 2, width: "100%", height: "100%" }}
                    />
                  </Stack>
                  <Stack
                    sx={{
                      position: { xs: "flex", sm: "absolute" },
                      width: 100,
                      bottom: -15,
                      mt: { xs: -2, sm: 0 },
                      left: -40,
                      borderRadius: 1.5,
                      boxShadow: "0 0 15px rgba(0,0,0, 20%)",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={require("../assets/img/component-btn-pink.png")}
                      alt=""
                    />
                  </Stack>
                </Stack>
                <Stack
                  sx={{
                    width: { xs: "100%", sm: 350 },
                    left: { xs: -30, sm: 0, md: 30 },
                    bottom: 15,
                    position: { xs: "flex", sm: "absolute" },
                  }}
                >
                  <Stack
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 1,
                      boxShadow: "15px 10px 20px rgba(0,0,0, 10%)",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={require("../assets/img/component-menu.png")}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>


            {/* third section ( Javascript Section )*/}
            <Stack sx={{ mt: { xs: 40, sm: 15 } }}>
              <JavaScriptSection />
            </Stack>

            {/* Forth Section ( Documentation Section ) */}
            <Stack sx={{ mt: 15 }}>
              <DocumentSection />
            </Stack>

            {/* Example Section */}
            <Stack justifyContent={"center"} alignItems={"center"} sx={{px: {xs: 2, sm: 5, md: 14}, my: 15}}> 
              <Typography sx={{fontSize: {sx: 15, sm: 20, md: 25, lg: 30}, fontWeight: 500}}>Beautiful Example Pages</Typography>
              <Typography textAlign={"center"} color={"var(--hover-color)"}>
                Notus React is a completly new product built using our past
                experience in web templates. Take the examples we made for you
                and start playing with them.
              </Typography>
            </Stack>
            
          </Stack>
        </Container>
        <ProjectSection />

            {/* fifth section (Contact Section) */}
            <Stack mt={8}>
              <ContactSection />
            </Stack>

            {/* Footer */}
            <Footer />
      </Stack>
    </Stack>
  );
}

const ContentItem = ({ icon, title, desc }) => {
  return (
    <Stack width={180} height={150} gap={2}>
      <Stack
        sx={{
          p: 1,
          bgcolor: "#FFF",
          borderRadius: "50%",
          width: "fit-content",
        }}
      >
        {icon}
      </Stack>
      <Stack gap={1}>
        <Typography fontWeight={700} fontSize={14} color={"var(--text-color)"}>
          {title}
        </Typography>
        <Typography fontSize={12} color={"var(--hover-color)"}>
          {desc}
        </Typography>
      </Stack>
    </Stack>
  );
};

export const LanguageSection = ({
  icon,
  title,
  desc,
  desc2,
  btns,
  list,
  list1,
  list2,
  list3,
  linkTo,
  iconColor
}) => {
  return (
    <Stack gap={3}>
      <Stack
        sx={{
          p: 1,
          bgcolor: iconColor ? iconColor : "#FFF",
          borderRadius: "50%",
          width: "fit-content",
        }}
      >
        {icon}
      </Stack>
      <Stack gap={2}>
        <Typography fontWeight={700} fontSize={30} color={"var(--text-color)"}>
          {title}
        </Typography>
        <Typography fontSize={18} fontWeight={100} color={"var(--hover-color)"}>
          {desc}
        </Typography>
        {desc2 && (
          <Typography color={"var(--hover-color)"} mt={1}>
            {desc2}
          </Typography>
        )}
      </Stack>
      {btns && (
        <Stack className="row" gap={1.2} flexWrap={"wrap"}>
          {btns?.map((ele) => (
            <Typography
              key={ele}
              sx={{
                p: 1,
                bgcolor: "#FFF",
                fontSize: 11,
                borderRadius: 3,
                color: "var(--hover-color)",
              }}
            >
              {ele}
            </Typography>
          ))}
        </Stack>
      )}

      {list && (
        <Stack gap={3}>
          <Stack className="row" gap={2.5}>
            {list1[0]}
            <Typography color={"var(--hover-color)"}>{list1[1]}</Typography>
          </Stack>
          <Stack className="row" gap={2}>
            {list2[0]}
            <Typography color={"var(--hover-color)"}>{list2[1]}</Typography>
          </Stack>
          <Stack className="row" gap={2}>
            {list3[0]}
            <Typography color={"var(--hover-color)"}>{list3[1]}</Typography>
          </Stack>
        </Stack>
      )}

      {!list && (
        <Stack>
          <Typography
            fontWeight={"bold"}
            sx={{
              transition: ".3s",
              ":hover": { color: "var(--hover-color)" },
              cursor: "pointer",
            }}
          >
            {linkTo ? linkTo : `View All ${`>>`}`}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default ContentSection;
