import {
  AppRegistrationOutlined,
  ConnectWithoutContact,
  Css,
  Javascript,
  Landscape, 
  Laptop,
  Login,
  Map,
  NextPlan,
  PersonRounded,
  Settings,
  SmartToySharp,
  Star,
  Style,
  TableChart,
  ViewSidebar,
} from "@mui/icons-material";
import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function SlideBar({ pos }) {
  const { pathname } = useLocation();
  const mainPath = pathname.slice(7);
  
  return (
    <Stack
      sx={{
        position: pos && "fixed",
        boxShadow: "10px 0 15px rgba(0,0,0, 10%)",
        bgcolor: "#FFF",
        width: 200,
        p: 3,
        height: "calc(100vh - 51px)",
        overflow: "auto",
      }}
    >
      <Link
        to={"/"}
        style={{ all: "unset", fontWeight: "bold", color: "var(--text-color)" }}
      >
        NOTUS REACT
      </Link>

      {/* first list (admin list) */}
      <Divider sx={{ mt: 3, mb: 3 }} />

      <Stack gap={3}>
        <Title label={"ADMIN LAYOUT PAGES"} />
        <ListWrapper>
          <ListLink
            icon={
              <Laptop
                sx={{
                  fontSize: 20,
                  transition: ".5s",

                  color:
                    mainPath === "dashboard"
                      ? "var(--blue-color)"
                      : "var(--secondery-color)",
                }}
              />
            }
            path={"dashboard"}
            label={"DASHBOARD"}
            mainPath={mainPath}
          />
          <ListLink
            icon={
              <Settings
                sx={{
                  fontSize: 20,
                  transition: ".5s",
                  color:
                    mainPath === "setting"
                      ? "var(--blue-color)"
                      : "var(--secondery-color)",
                }}
              />
            }
            path={"setting"}
            label={"SETTINGS"}
            mainPath={mainPath}
          />
          <ListLink
            icon={
              <TableChart
                sx={{
                  fontSize: 20,
                  transition: ".5s",

                  color:
                    mainPath === "tables"
                      ? "var(--blue-color)"
                      : "var(--secondery-color)",
                }}
              />
            }
            path={"tables"}
            label={"TABLES"}
            mainPath={mainPath}
          />
          <ListLink
            icon={
              <Map
                sx={{
                  fontSize: 20,
                  transition: ".5s",

                  color:
                    mainPath === "map"
                      ? "var(--blue-color)"
                      : "var(--secondery-color)",
                }}
              />
            }
            path={"map"}
            label={"MAPS"}
            mainPath={mainPath}
          />
        </ListWrapper>
      </Stack>

      {/* second list (auth List) */}
      <Divider sx={{ my: 3 }} />
      <Stack gap={3}>
        <Title label={"AUTH LAYOUT PAGES"} />
        <ListWrapper>
          <ListLink
            icon={
              <Login
                sx={{
                  fontSize: 20,
                  color: "var(--secondery-color)",
                }}
              />
            }
            path={"/auth/login"}
            label={"LOGIN"}
            mainPath={mainPath}
          />
          <ListLink
            icon={
              <AppRegistrationOutlined
                sx={{
                  fontSize: 20,
                  color: "var(--secondery-color)",
                }}
              />
            }
            path={"/auth/register"}
            label={"REGISTER"}
            mainPath={mainPath}
          />
        </ListWrapper>
      </Stack>

      {/* Third list (No Layout List) */}
      <Divider sx={{ my: 3 }} />
      <Stack gap={3}>
        <Title label={"NO LAYOUT PAGES"} />
        <ListWrapper>
          <ListLink
            icon={
              <Landscape
                sx={{
                  fontSize: 20,
                  color: "var(--secondery-color)",
                }}
              />
            }
            path={"/noLayout/landing"}
            label={" LANDING PAGE"}
            mainPath={mainPath}
          />
          <ListLink
            icon={
              <PersonRounded
                sx={{
                  fontSize: 20,
                  color: "var(--secondery-color)",
                }}
              />
            }
            path={"/noLayout/profile"}
            label={" PROFILE PAGE"}
            mainPath={mainPath}
          />
        </ListWrapper>
      </Stack>

      {/* Forth list (Documentation List) */}
      <Divider sx={{ my: 3 }} />
      <Stack gap={3}>
        <Title label={"DOCUMENTATION"} />
        <ListWrapper>
          <ListLink
            icon={
              <Style
                sx={{
                  fontSize: 20,
                  color: "var(--secondery-color)",
                }}
              />
            }
            path={"#"}
            label={"Style"}
            mainPath={mainPath}
          />
          <ListLink
            icon={
              <Css
                sx={{
                  fontSize: 20,
                  color: "var(--secondery-color)",
                }}
              />
            }
            path={"#"}
            label={"CSS Components"}
            mainPath={mainPath}
          />
          <ListLink
            icon={
              <SmartToySharp
                sx={{
                  fontSize: 20,
                  color: "var(--secondery-color)",
                }}
              />
            }
            path={"#"}
            label={"Angular"}
            mainPath={mainPath}
          />
          <ListLink
            icon={
              <Javascript
                sx={{
                  fontSize: 20,
                  color: "var(--secondery-color)",
                }}
              />
            }
            path={"#"}
            label={"Javascript"}
            mainPath={mainPath}
          />
          <ListLink
            icon={
              <NextPlan
                sx={{
                  fontSize: 20,
                  color: "var(--secondery-color)",
                }}
              />
            }
            path={"#"}
            label={"NextJS"}
            mainPath={mainPath}
          />
          <ListLink
            icon={
              <Star
                sx={{
                  fontSize: 20,
                  color: "var(--secondery-color)",
                }}
              />
            }
            path={"#"}
            label={"React"}
            mainPath={mainPath}
          />
          <ListLink
            icon={
              <ConnectWithoutContact
                sx={{
                  fontSize: 20,
                  color: "var(--secondery-color)",
                }}
              />
            }
            path={"#"}
            label={"Svelte"}
            mainPath={mainPath}
          />
          <ListLink
            icon={
              <ViewSidebar
                sx={{
                  fontSize: 20,
                  color: "var(--secondery-color)",
                }}
              />
            }
            path={"#"}
            label={"VueJS"}
            mainPath={mainPath}
          />
        </ListWrapper>
      </Stack>
    </Stack>
  );
}
const ListLink = ({ icon, path, label, mainPath, setShowMenu, closeMenu }) => {
  return (
    <Stack
      sx={{ cursor: "pointer" }}
      direction={"row"}
      alignItems={"center"}
      gap={1.5}
    >
      {icon}
      <Link
      onClick={() => closeMenu && setShowMenu(false)}
        to={path}
        style={{
          fontSize: 13,
          fontWeight: "bold",
          textDecoration: "none",
          color: mainPath === path ? "var(--blue-color)" : "var(--text-color)",
          transition: ".2s",
          cursor: "pointer !important",
        }}
        className="sliderLinkHover"
      >
        {label}
      </Link>
    </Stack>
  );
};

const ListWrapper = ({ children }) => {
  return <Stack sx={{ gap: 3 }}>{children}</Stack>;
};

const Title = ({ label }) => {
  return (
    <Typography
      sx={{ color: "var(--hover-color)", fontSize: 12, fontWeight: 700 }}
    >
      {label}
    </Typography>
  );
};

export default SlideBar;
