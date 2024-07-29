import React, { useState } from "react";
import { DocumentScannerOutlined, Download, FacebookRounded, GitHub, Menu, Twitter } from "@mui/icons-material";
import { Container, Divider, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function Header({ bgcolor }) {
  const [showList, setShowList] = useState(false);
  const [modilShowList, setMobilShowList] = useState(false);

  return (
    <Stack
      sx={{
        bgcolor: bgcolor ? bgcolor : "#FFF",
        position: "fixed",
        zIndex: 8000,
        top: 0,
        left: 0,
        width: "100%",
        borderBottom:
          bgcolor !== "transparent" && "1px solid var(--secondery-color)",
      }}
    >
      <Container>
        <Stack
          sx={{ height: 75 }}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          position={"relative"}
        >
          <Stack direction={"row"} alignItems={"center"} gap={2.5}>
            <Link
              to={"/"}
              style={{
                all: "unset",
                fontWeight: 600,
                cursor: "pointer",
                color: bgcolor && "#FFF",
              }}
              fontWeight={600}
            >
              NOTUS REACT
            </Link>
            <Stack className="row" gap={1}>
              <DocumentScannerOutlined
                sx={{ fontSize: 18, color: bgcolor && "#FFF" }}
              />
              <Typography
                fontWeight={500}
                sx={{
                  transition: ".3s",
                  ":hover": { color: "var(--hover-color)", cursor: "pointer" },
                  color: bgcolor && "#FFF",
                }}
                fontSize={12}
              >
                DOCS
              </Typography>
            </Stack>
          </Stack>

          {/* right side  */}
          <Stack
            sx={{ display: { xs: "none", md: "flex" } }}
            direction={"row"}
            alignItems={"center"}
            gap={1}
          >
            <SectionList
              showList={showList}
              setShowList={setShowList}
              bgcolor={bgcolor}
            />

            <IconButton>
              <FacebookRounded
                sx={{
                  color: bgcolor ? "#FFF" : "var( --secondery-color)",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
            <IconButton>
              <Twitter
                sx={{
                  color: bgcolor ? "#FFF" : "var( --secondery-color)",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
            <IconButton>
              <GitHub
                sx={{
                  color: bgcolor ? "#FFF" : "var( --secondery-color)",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
            <Stack
              sx={{
                bgcolor: "var(--blue-color)",
                py: 0.8,
                px: 2,
                borderRadius: 1.2,
                cursor: "pointer",
              }}
              gap={0.7}
              direction={"row"}
              alignItems={"center"}
            >
              <Download
                sx={{
                  color: "var(--blue-color)",
                  fontSize: 10,
                  p: 0.4,
                  borderRadius: "50%",
                  bgcolor: "#FFF",
                }}
              />
              <Typography fontSize={12} color={"#FFF"} fontWeight={"bold"}>
                DOWNLOAD
              </Typography>
            </Stack>
          </Stack>
          <IconButton
            onClick={() => setMobilShowList(!modilShowList)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <Menu sx={{ fontSize: 30, color: bgcolor && "#FFF" }} />
          </IconButton>
          <Stack
            sx={{
              display: { xs: "flex", md: "none" },
              transition: ".5s",
              opacity: modilShowList ? 1 : 0,
              bgcolor: "#FFF",
              position: "absolute",
              top: 77,
              left: 0,
              width: "100%",
            }}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
          >
            <SectionList
              showList={showList}
              setShowList={setShowList}
              bgcolor={bgcolor}
            />
            <IconButton>
              <FacebookRounded
                sx={{ color: "var( --secondery-color)", borderRadius: "50%" }}
              />
            </IconButton>
            <IconButton>
              <Twitter
                sx={{ color: "var( --secondery-color)", borderRadius: "50%" }}
              />
            </IconButton>
            <IconButton>
              <GitHub
                sx={{ color: "var( --secondery-color)", borderRadius: "50%" }}
              />
            </IconButton>

          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

const SectionList = ({ setShowList, showList, bgcolor }) => {
  return (
    <Stack sx={{ position: "relative", mr: 0.5, mt: 0.5}} >
      <Typography
        onClick={() => setShowList(!showList)}
        sx={{
          cursor: "pointer",
          transition: ".3s",
          ":hover": { color: "var(--hover-color)" },
          color: { xs: "#000", md: bgcolor && "#FFF" },
        }}
      >
        DEMO PAGES
      </Typography>
      <Stack
        sx={{
          transition: ".3s",
          p: showList && 2,
          width: 110,
          position: "absolute",
          top: 30,
          left: -10,
          height: showList ? "auto" : 0,
          overflow: "hidden",
          bgcolor: "#FFF",
          boxShadow: "0 0 10px rgba(0,0,0, 10%)",
        }}
        gap={1}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: 13,
            color: "var(--secondery-color)",
          }}
        >
          Admin Layout
        </Typography>
        <MyLink
          path={"/admin/dashboard"}
          name={"Dashboard"}
          setShowList={setShowList}
        />
        <MyLink
          path={"/admin/setting"}
          name={"Setting"}
          setShowList={setShowList}
        />
        <MyLink
          path={"/admin/tables"}
          name={"Tables"}
          setShowList={setShowList}
        />
        <MyLink path={"/admin/map"} name={"Maps"} setShowList={setShowList} />
        <Divider
          sx={{
            height: 2,
            width: "100%",
            bgcolor: "var(--text--color)",
          }}
        />
        <Typography sx={{ fontWeight: "700", fontSize: 13, color: "#94a3b8" }}>
          Auth Layout
        </Typography>
        <MyLink path={"/auth/login"} name={"login"} setShowList={setShowList} />
        <MyLink
          path={"/auth/register"}
          name={"register"}
          setShowList={setShowList}
        />
        <Divider
          sx={{
            height: 2,
            width: "100%",
            bgcolor: "var(--text--color)",
          }}
        />
        <Typography sx={{ fontWeight: "700", fontSize: 13, color: "#94a3b8" }}>
          No Layout
        </Typography>
        <Link
          to={"/noLayout/landing"}
          style={{
            all: "unset",
            cursor: "pointer",
            fontSize: 16,
            color: "var(--text-color)",
          }}
        >
          landing
        </Link>
        <Link
          to={"/noLayout/profile"}
          style={{
            all: "unset",
            cursor: "pointer",
            fontSize: 16,
            color: "var(--text-color)",
          }}
        >
          Profile
        </Link>
      </Stack>
    </Stack>
  );
};

const MyLink = ({ path, name, setShowList}) => {
  return (
    <Link
      onClick={() =>
        path !== "/noLayout/Landing" && path !== "/noLayout/profile" & setShowList(false)
      }
      to={path}
      style={{
        all: "unset",
        cursor: "pointer",
        fontSize: 16,
        color: "var(--text-color)",
      }}
    >
      {name}
    </Link>
  );
};

export default Header;
