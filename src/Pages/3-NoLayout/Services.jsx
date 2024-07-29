import { ExpandCircleDown, Grade } from '@mui/icons-material';
import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { MainInput } from '../1-Admin/Setting';

function Services() {
  return (
    <Stack
      sx={{
        py: 12,
        bgcolor: "#1E293B",
        mt: { xs: -25, md: -20 },
        clipPath: {
          xs: "polygon(0 2%, 100% 0%, 100% 98%, 0% 100%)",
          sm: "polygon(0 4%, 100% 0%, 100% 95%, 0% 100%)",
          md: "polygon(0 5%, 100% 0%, 100% 94%, 0% 100%)",
        },
      }}
    >
      <Container>
        <Stack>
          <Stack
            sx={{
              width: { xs: "100%", sm: "80%", md: "70%", lg: "50%" },
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 35,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Build something
            </Typography>
            <Typography
              sx={{ textAlign: "center", fontSize: 20, color: "#879EB7" }}
            >
              Put the potentially record low maximum sea ice extent tihs year
              down to low ice. According to the National Oceanic and Atmospheric
              Administration, Ted, Scambos.
            </Typography>
          </Stack>
          <Stack
            mt={10}
            gap={3}
            direction={"row"}
            alignItems={"center"}
            // justifyContent={"space-between"}
            sx={{ justifyContent: { xs: "center", sm: "space-between" } }}
            flexWrap={"wrap"}
          >
            <ServiceBox
              icon={<ExpandCircleDown sx={{ color: "#1E293B" }} />}
              title={"Excelent Services"}
              label={
                "Some quick example text to build on the card title and make up the bulk of the card's content."
              }
            />
            <ServiceBox
              icon={<Grade sx={{ color: "#1E293B" }} />}
              title={"Excelent Services"}
              label={
                "Some quick example text to build on the card title and make up the bulk of the card's content."
              }
            />
            <ServiceBox
              icon={<Grade sx={{ color: "#1E293B" }} />}
              title={"Excelent Services"}
              label={
                "Some quick example text to build on the card title and make up the bulk of the card's content."
              }
            />
          </Stack>
          <Stack>
            <Stack
              sx={{
                bgcolor: "#E2E8F0",
                px: 4,
                py: 3,
                mt: { xs: 2, sm: 5, md: 8, lg: 10 },
                mb: 10,
                mx: "auto",
                width: { xs: "85%", sm: "75%", md: "60%", lg: "45%" },
                borderRadius: 2,
              }}
            >
              <Stack mb={1}>
                <Typography sx={{ color: "var(--text-color)", fontSize: 25 }}>
                  Want to work with us?
                </Typography>
                <Typography sx={{ color: "var(--hover-color)" }}>
                  Complete this form and we will get back to you in 24 hours.
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 16,
                  my: 1,
                  color: "var(--hover-color)",
                  textAlign: "center",
                }}
              ></Typography>
              <Stack gap={2}>
                <MainInput label={"FULL NAME"} placeholder={"Full Name"} />
                <MainInput label={"EMAIL"} placeholder={"Email"} />
                <Stack>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: "bold",
                      color: "var(--text-color)",
                    }}
                  >
                    MESSAGE
                  </Typography>
                </Stack>
                <Typography
                  component={"textarea"}
                  sx={{
                    transition: ".3s",
                    border: "4px solid transparent",
                    outline: "none",
                    ":focus": {
                      borderColor: "#344cf0",
                      boxShadow: "0 5px 5px rgba(52,76,240, 60%)",
                    },
                    resize: "none",
                    width: "calc(100% - 10px)",
                    borderRadius: 2,
                    boxShadow: "0 5px 5px rgba(0,0,0, 10%)",
                  }}
                  rows={5}
                />
              </Stack>
              <Stack
                textAlign={"center"}
                sx={{
                  mb: 2,
                  textAlign: "center",
                  bgcolor: "#1E293B",
                  py: 1.8,
                  borderRadius: 1,
                  mt: 3,
                  cursor: "pointer",
                  transition: ".1s",
                  ":active": { bgcolor: "var(--text-color)" },
                  width: 200,
                  mx: "auto"
                }}
              >
                <Typography
                  sx={{ fontWeight: 700, color: "#FFF", fontSize: 14 }}
                >
                  SEND MESSAGE
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

const ServiceBox = ({icon, title, label}) => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      gap={2}
      sx={{ width: 300 }}
    >
      <Stack
        sx={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          bgcolor: "#FFF",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </Stack>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          color: "#FFF",
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ textAlign: "center", color: "#879EB7" }}>
        {label}
      </Typography>
    </Stack>
  );
}

export default Services