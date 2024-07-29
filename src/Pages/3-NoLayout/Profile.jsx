import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import MainButton from "../../components/MainButton";
import { Place, School, Shop } from "@mui/icons-material";
import ContactSection from "../../Sections/ContactSection";

function Profile() {
  return (
    <Stack sx={{ position: "relative", bgcolor: "#E2E8F0" }}>
      <Stack
        sx={{
          width: "100%",
          height: 500,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <img
          src={require("../../assets/img/profilBG.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt=""
        />
      </Stack>
      {/* Header */}
      <Header bgcolor={"transparent"} />

      {/* profil Section */}
      <Stack
        sx={{
          width: {
            xs: "95%",
            sm: "85%",
            md: "75%",
          },
          bgcolor: "#FFF",
          boxShadow: "0 5px 30px rgba(0,0,0, 20%)",
          p: { sm: 5 },
          mx: "auto",
          position: "relative",
          zIndex: 800,
          borderRadius: 2,
          mt: 40,
          mb: 10,
        }}
      >
        {/* Avatar */}
        <Stack
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: -100,
            borderRadius: "50%",
            overflow: "hidden",
            width: 200,
            height: 200,
          }}
        >
          <img
            src={require("../../assets/img/team-2-800x800.jpg")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        </Stack>

        {/* top content */}
        <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            pt: { xs: 15, sm: 0 },
            gap: {xs: 3, sm: 0}
          }}
        >
          {/* rates  */}
          <Stack direction={"row"} alignContent={"center"} gap={5}>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "var(--text-color)",
                }}
              >
                22
              </Typography>
              <Typography color={"var(--secondery-color)"}>Friends</Typography>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "var(--text-color)",
                }}
              >
                10
              </Typography>
              <Typography color={"var(--secondery-color)"}>Photos</Typography>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "var(--text-color)",
                }}
              >
                89
              </Typography>
              <Typography color={"var(--secondery-color)"}>Comments</Typography>
            </Stack>
          </Stack>

          {/* botton  */}
          <MainButton label={"CONNECT"} color={"#0EA5E9"} />
        </Stack>
        <Stack
          alignItems={"center"}
          alignContent={"center"}
          justifyContent={"center"}
          gap={1.5}
          mt={10}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 40,
              color: "var(--text-color)",
              textAlign: "center",
            }}
          >
            Jenna Stones
          </Typography>
          <Stack direction={"row"} alignItems={"center"} gap={1.5}>
            <Place sx={{ color: "var(--secondery-color)" }} />
            <Typography
              sx={{
                mb: 2,
                color: "var(--secondery-color)",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              LOS ANGELES, CALIFORNIA
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={1.5}
            px={1}
            mt={1}
          >
            <Shop sx={{ color: "var(--secondery-color)" }} />
            <Typography color={"var(--text-color)"}>
              Solution Manager - Creative Tim Officer
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={1.5}
            px={1}
            mt={1}
          >
            <School sx={{ color: "var(--secondery-color)" }} />
            <Typography color={"var(--text-color)"}>
              University of Computer Science
            </Typography>
          </Stack>
        </Stack>
        <Divider sx={{ my: { xs: 3, lg: 6 } }} />
        <Stack sx={{ px: { xs: 5, sm: 20, md: 30 }, mb: 3 }}>
          <Typography
            sx={{
              fontSize: 18,
              textAlign: "center",
              color: "var(--text-color)",
            }}
          >
            An artist of considerable range, Jenna the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </Typography>
        </Stack>

        {/* show more botton */}
        <Typography
          sx={{
            color: "var(--blue-color)",
            cursor: "pointer",
            textAlign: "center",
            fontSize: 18,
            fontWeight: 100,
          }}
        >
          Show more
        </Typography>
      </Stack>

      <Stack>
        <ContactSection />
      </Stack>
    </Stack>
  );
}

export default Profile;
