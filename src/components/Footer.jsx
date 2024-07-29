import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

function Footer({ list, listColor, bgcolor }) {
  return (
    <Stack sx={{ bgcolor: bgcolor && bgcolor }}>
      <Container>
        <Stack
          alignItems={"center"}
          sx={{
            borderTop: ".2px solid #D7DFE9",
            borderColor: listColor ? "var(--text-color)" : "D7DFE9",
            justifyContent: list ? "space-between" : "center",
            flexDirection: { xs: "column", sm: "row" },
            my: { xs: 1, sm: 0 },
          }}
        >
          <Typography
            color={"var(--hover-color)"}
            sx={{ my: { xs: 1, sm: 3 } }}
            fontSize={12}
          >
            Copyright © 2024 Notus React by Creative Tim.
          </Typography>
          {list && (
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={3}
              sx={{ gap: { xs: 3, sm: 2, md: 3 } }}
            >
              <Link
                to={""}
                style={{
                  all: "unset",
                  cursor: "pointer",
                  color: listColor ? listColor : "var(--text-color)",
                  fontWeight: 500,
                  fontSize: 12,
                }}
              >
                Creative Tim
              </Link>
              <Link
                to={""}
                style={{
                  all: "unset",
                  cursor: "pointer",
                  color: listColor ? listColor : "var(--text-color)",
                  fontWeight: 500,
                  fontSize: 12,
                }}
              >
                About Us
              </Link>
              <Link
                to={""}
                style={{
                  all: "unset",
                  cursor: "pointer",
                  color: listColor ? listColor : "var(--text-color)",
                  fontWeight: 500,
                  fontSize: 12,
                }}
              >
                Blog
              </Link>
              <Link
                to={""}
                style={{
                  all: "unset",
                  cursor: "pointer",
                  color: listColor ? listColor : "var(--text-color)",
                  fontWeight: 500,
                  fontSize: 12,
                }}
              >
                MIT License
              </Link>
            </Stack>
          )}
        </Stack>
      </Container>
    </Stack>
  );
}

export default Footer