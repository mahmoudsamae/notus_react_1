import { Place, School, Shop } from "@mui/icons-material";
import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

function Setting() {
  return (
    <Stack
      sx={{
        px: { xs: 2, sm: 4, md: 5 },
        mt: -10,
        gap: 5,
        pb: 3,
        mb: 5,
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      {/* right Side  */}
      <Stack
        sx={{
          width: { sm: "100%", lg: "70%" },
          bgcolor: "#FFF",
          borderRadius: 2,
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={3}
          py={3}
        >
          <Typography
            sx={{ fontSize: 20, color: "var(--text-color)", fontWeight: 700 }}
          >
            My account
          </Typography>
          <Stack
            sx={{
              px: 2,
              py: 0.8,
              color: "#FFF",
              fontWeight: 700,
              bgcolor: "var(--blue-color)",
              borderRadius: 1.5,
              fontSize: 12,
            }}
          >
            SETTINGS
          </Stack>
        </Stack>
        <Stack sx={{ bgcolor: "#F1F5F9" }}>
          {/* USER INFORMATION  */}
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
          >
            <Stack sx={{ width: "80%", mt: 2 }}>
              <Typography
                sx={{ color: "var(--secondery-color)", fontWeight: "bold" }}
              >
                USER INFORMATION
              </Typography>
              <Stack
                mt={3}
                direction={"row"}
                flexWrap={"wrap"}
                rowGap={2}
                columnGap={3}
                sx={{
                  px: { xs: 0, lg: 1.5 },
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <InputWrapper>
                  <MainInput
                    label={"USERNAME"}
                    placeholder={"mahmud.alhussen"}
                  />
                </InputWrapper>
                <InputWrapper>
                  <MainInput
                    label={"EMAIL ADDRESS"}
                    placeholder={"mahmud@example.com"}
                  />
                </InputWrapper>
                <InputWrapper>
                  <MainInput label={"FIRST NAME"} placeholder={"Mahmud"} />
                </InputWrapper>
                <InputWrapper>
                  <MainInput label={"LAST NAME"} placeholder={"Al-Hussen"} />
                </InputWrapper>
              </Stack>
            </Stack>
          </Stack>
          <Divider sx={{ my: 3, mx: 2 }} />

          {/* USER INFORMATION */}
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
          >
            <Stack sx={{ width: "80%", mt: 2 }}>
              <Typography
                sx={{ color: "var(--secondery-color)", fontWeight: "bold" }}
              >
                USER INFORMATION
              </Typography>
              <Stack
                mt={3}
                direction={"row"}
                flexWrap={"wrap"}
                rowGap={2}
                columnGap={3}
                sx={{ px: { xs: 0, lg: 1.5 } }}
              >
                <Stack gap={1} sx={{ width: "100%" }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: "bold",
                      color: "var(--text-color)",
                    }}
                  >
                    <Stack gap={1} sx={{ width: "100%" }}></Stack>
                    ADDRESS
                  </Typography>
                  <Typography
                    component={"input"}
                    placeholder={
                      "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                    }
                    sx={{
                      px: 3,
                      py: 1.5,
                      transition: ".3s",
                      border: "3px solid transparent",
                      outline: "none",
                      ":focus": {
                        borderColor: "#344cf0",
                        boxShadow: "0 5px 5px rgba(52,76,240, 70%)",
                      },
                      boxShadow: "0 5px 5px rgba(0,0,0, 30%)",
                      borderRadius: 1,
                    }}
                  />
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                sx={{ flexWrap: "wrap", px: { xs: 0, lg: 1.5 }, pt: 1.5 }}
                alignItems={"center"}
                gap={3}
              >
                <Stack
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "calc((100 / 2) - 20px)",
                      md: "calc((100% / 3) - 20px)",
                    },
                  }}
                >
                  <MainInput label={"CITY"} placeholder={"New York"} />
                </Stack>
                <Stack
                  sx={{
                    width: {
                      xs: "100%",
                      md: "calc((100% / 3) - 15px)",
                    },
                  }}
                >
                  <MainInput label={"COUNTRY"} placeholder={"United States"} />
                </Stack>
                <Stack
                  sx={{
                    width: {
                      xs: "100%",
                      md: "calc((100% / 3) - 15px)",
                    },
                  }}
                >
                  <MainInput
                    label={"POSTAL CODE"}
                    placeholder={"Postal Code"}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Divider sx={{ my: 3, mx: 2 }} />

          <Stack
            mb={4}
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
          >
            <Stack sx={{ width: "80%", mt: 2 }}>
              <Typography
                sx={{ color: "var(--secondery-color)", fontWeight: "bold" }}
              >
                USER INFORMATION
              </Typography>
              <Stack
                mt={3}
                direction={"row"}
                flexWrap={"wrap"}
                rowGap={2}
                columnGap={3}
                sx={{ px: { xs: 0, lg: 1.5 } }}
              >
                <Stack gap={1} sx={{ width: "100%" }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: "bold",
                      color: "var(--text-color)",
                    }}
                  >
                    <Stack gap={1} sx={{ width: "100%" }}></Stack>
                    ABOUT ME
                  </Typography>
                  <Typography
                    component={"textarea"}
                    placeholder={
                      "A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                    }
                    rows={5}
                    sx={{
                      resize: "none",
                      px: 3,
                      py: 1.5,
                      fontSize: 18,
                      transition: ".3s",
                      border: "3px solid transparent",
                      outline: "none",
                      ":focus": {
                        borderColor: "#344cf0",
                        boxShadow: "0 5px 5px rgba(52,76,240, 70%)",
                      },
                      boxShadow: "0 5px 5px rgba(0,0,0, 30%)",
                      borderRadius: 1,
                    }}
                  />
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                sx={{ flexWrap: "wrap" }}
                alignItems={"center"}
                gap={3}
                p={1.5}
              ></Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* Left Sife  */}
      <Stack
        sx={{
          width: { sm: "100%", lg: "30%" },
          bgcolor: "#FFF",
          borderRadius: 2,
          pt: 13,
          mt: 8,
          position: "relative",
          boxShadow: "0 0 10px rgba(0,0,0, 20%)",
        }}
      >
        {/* Avatar */}
        <Stack
          sx={{
            position: "absolute",
            top: -70,
            left: "50%",
            width: 150,
            height: 150,
            transform: "translateX(-50%)",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src={require("../../assets/img/team-2-800x800.jpg")}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Stack>
        {/* Cotent  */}
        <Stack
          direction={"row"}
          alignContent={"center"}
          justifyContent={"space-around"}
          mb={10}
        >
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
        <Stack
          alignItems={"center"}
          alignContent={"center"}
          justifyContent={"center"}
          gap={1.5}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 20,
              color: "var(--text-color)",
              textAlign: "center",
            }}
          >
            Jenna Stones
          </Typography>
          <Stack mt={1.5} direction={"row"} alignItems={"center"} gap={1.5}>
            <Place sx={{ color: "var(--secondery-color)" }} />
            <Typography
              sx={{
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
        <Stack sx={{ px: 5, mb: 3 }}>
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
        <Typography
          sx={{
            color: "var(--blue-color)",
            cursor: "pointer",
            textAlign: "center",
            fontSize: 18,
            fontWeight: 100,
            mb: 2
          }}
        >
          Show more
        </Typography>
      </Stack>
    </Stack>
  );
}

const InputWrapper = ({ children }) => {
  return (
    <Stack sx={{ width: { xs: "100%", md: "calc((100% / 2) - 20px)" } }}>
      {children}
    </Stack>
  );
};

export const MainInput = ({ label, placeholder }) => {
  return (
    <Stack gap={1} sx={{ width: "100%" }}>
      <Typography
        sx={{ fontSize: 14, fontWeight: "bold", color: "var(--text-color)" }}
      >
        {label}
      </Typography>
      <Typography
        component={"input"}
        placeholder={placeholder}
        sx={{
          px: 3,
          py: 1.3,
          transition: ".3s",
          border: "4px solid transparent",
          outline: "none",
          ":focus": {
            borderColor: "#344cf0",
            boxShadow: "0 5px 5px rgba(52,76,240, 60%)",
          },
          boxShadow: "0 5px 5px rgba(0,0,0, 10%)",
          borderRadius: 1,
        }}
      />
    </Stack>
  );
};

export default Setting;
