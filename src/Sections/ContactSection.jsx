import {
  FacebookOutlined,
  GitHub,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <Stack mb={10}>
      <Container>
        <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 5, sm: 0 },
          }}
        >
          <Stack sx={{ alignItems: { xs: "Center", sm: "start" } }}>
            <Typography
              sx={{
                fontSize: 25,
                fontWeight: "bold",
                color: "var(--text-color)",
              }}
            >
              Let's keep in touch!
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                color: "var(--hover-color)",
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              Find us on any of these platforms, we respond 1-2 business days.
            </Typography>
            <Stack className="row" gap={1.5} mt={2}>
              <IconBox icon={<Twitter sx={{ color: "#38BDF8" }} />} />
              <IconBox icon={<FacebookOutlined sx={{ color: "#0284C7" }} />} />
              <IconBox icon={<Instagram sx={{ color: "#F477B9" }} />} />
              <IconBox icon={<GitHub sx={{ color: "#54515A" }} />} />
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ gap: { xs: 4, sm: 6, md: 8 } }}
          >
            <Stack>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "var(--text-color)",
                  fontSize: { xs: 14, sm: 15 },
                }}
              >
                USEFUL LINKS
              </Typography>
              <MyLink>About Us</MyLink>
              <MyLink>Blog</MyLink>
              <MyLink>Github</MyLink>
              <MyLink>Free Products</MyLink>
            </Stack>
            <Stack>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "var(--text-color)",
                  fontSize: { xs: 14, sm: 15 },
                }}
              >
                OTHER RESOURCES
              </Typography>
              <MyLink>MIT License </MyLink>
              <MyLink>Terms & Conditions</MyLink>
              <MyLink>Privacy Policy</MyLink>
              <MyLink>Contact Us</MyLink>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
const IconBox = ({ icon }) => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: "50%",
        bgcolor: "#FFF",
        boxShadow: "2px 8px 10px rgba(0,0,0, 10%)",
        cursor: "pointer"
      }}
    >
      {icon}
    </Stack>
  );
};

const MyLink = ({ children }) => {
  return (
    <Link
      className="linkHover"
      style={{
        all: "unset",
        color: "var(--hover-color)",
        transition: ".3s",
        cursor: "pointer",
      }}
    >
      {children}
    </Link>
  );
};

export default ContactSection;
