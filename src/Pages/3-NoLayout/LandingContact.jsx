import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { LanguageSection } from "../../Sections/ContentSection";
import {
  DeleteOutline,
  Facebook,
  Fingerprint,
  Flight,
  Google,
  Instagram,
  Mouse,
  Twitter,
} from "@mui/icons-material";

import team_1 from "../../assets/img/team-1-800x800.jpg";
import team_2 from "../../assets/img/team-2-800x800.jpg";
import team_3 from "../../assets/img/team-3-800x800.jpg";
import team_4 from "../../assets/img/team-4-470x470.png";

function LandingContact() {
  return (
    <Stack
      sx={{
        clipPath: {
          xs: "polygon(0 2%, 100% 0%, 100% 95%, 0% 100%)",
          sm: "polygon(0 3%, 100% 0%, 100% 93%, 0% 100%)",
          md: "polygon(0 5%, 100% 0%, 100% 90%, 0% 100%)",
        },
        bgcolor: "#FFF",
        mt: -10,
        mb: 10,
        py: 20,
      }}
    >
      <Container>
        <Stack>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: { xs: "center", md: "space-between" },
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            <Stack
              sx={{
                width: { xs: "80%", md: 370 },
                height: 500,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <img
                src={require("../../assets/img/landingBG.jpg")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt=""
              />
            </Stack>
            <Stack sx={{ width: { xs: "80%", md: "50%" } }}>
              <LanguageSection
                icon={<Flight sx={{ color: "var(--title-color)" }} />}
                iconColor={"#BAE6FD"}
                title={"A growing company"}
                desc={
                  "The extension comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go."
                }
                list={true}
                list1={[
                  <Fingerprint
                    sx={{
                      color: "var(--text-color)",
                      fontSize: 18,
                      p: 0.5,
                      borderRadius: "50%",
                      bgcolor: "#BAE6FD",
                    }}
                  />,
                  "Carefully crafted components",
                ]}
                list2={[
                  <DeleteOutline
                    sx={{
                      color: "var(--text-color)",
                      fontSize: 18,
                      p: 0.5,
                      borderRadius: "50%",
                      bgcolor: "#BAE6FD",
                    }}
                  />,
                  "Amazing page examples",
                ]}
                list3={[
                  <Mouse
                    sx={{
                      color: "var(--text-color)",
                      fontSize: 18,
                      p: 0.5,
                      borderRadius: "50%",
                      bgcolor: "#BAE6FD",
                    }}
                  />,
                  "Dynamic components",
                ]}
              />
            </Stack>
          </Stack>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              my: {xs: 10, md: 20},
              width: { xs: "90%", sm: "70%", md: "60%", lg: "50%" },
              mx: "auto",
              gap: 1.5,
            }}
          >
            <Typography
              sx={{textAlign: "center", fontSize: {xs: 30, sm:35}, fontWeight: 700, color: "var(--text-color)" }}
            >
              Here are our heroes
            </Typography>
            <Typography
              sx={{
                color: "var(--secondery-color)",
                fontSize: 18,
                textAlign: "center",
              }}
            >
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record
              maximum.
            </Typography>
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: {xs: "center", sm: "space-between"},
              flexWrap: "wrap",
              gap: 3,
              mb: 5
            }}
          >
            <ProfilBox
              imgSrc={team_1}
              name={"Ryan Tompson"}
              title={"WEB DEVELOPER"}
              twitter={true}
              facebook={true}
              instagram={true}
            />
            <ProfilBox
              imgSrc={team_2}
              name={"Romina Hadid"}
              title={"MARKETING SPECIALIST"}
              google={true}
              facebook={true}
            />
            <ProfilBox
              imgSrc={team_3}
              name={"Alexa Smith"}
              title={"UI/UX DESIGNER"}
              google={true}
              twitter={true}
              instagram={true}
            />
            <ProfilBox
              imgSrc={team_4}
              name={"Jenna Kardi"}
              title={"FOUNDER AND CEO"}
              google={true}
              twitter={true}
              instagram={true}
              facebook={true}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

const ProfilBox = ({
  imgSrc,
  name,
  title,
  facebook,
  google,
  twitter,
  instagram,
}) => {
  return (
    <Stack
      sx={{ p: 3, gap: 2}}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        sx={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src={imgSrc}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt=""
        />
      </Stack>
      <Stack>
        <Typography
          sx={{ fontWeight: "bold",textAlign: "center", fontSize: 20, color: "var(--hover-color)" }}
        >
          {name}
        </Typography>
        <Typography sx={{textAlign: "center", color: "var(--secondery-color)" }}>
          {title}
        </Typography>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        {google && (
          <SocialIcon
            icon={<Google sx={{ color: "#FFF" }} />}
            iconColor={"#DC2626"}
          />
        )}
        {twitter && (
          <SocialIcon
            icon={<Twitter sx={{ color: "#FFF" }} />}
            iconColor={"#69CDFA"}
          />
        )}
        {facebook && (
          <SocialIcon
            icon={<Facebook sx={{ color: "#FFF" }} />}
            iconColor={"#0284C7"}
          />
        )}
        {instagram && (
          <SocialIcon
            icon={<Instagram sx={{ color: "#FFF" }} />}
            iconColor={"#334155"}
          />
        )}
      </Stack>
    </Stack>
  );
};

const SocialIcon = ({icon, iconColor}) => {
  return (
    <Stack
      sx={{ justifyContent: "center", alignItems: "center", width: 40, bgcolor: iconColor, height: 40, borderRadius: "50%" }}
    >
      {icon}
    </Stack>
  );
}

export default LandingContact;
