import { Stack } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Landing from "./Landing";
import Footer from "../../components/Footer";
import Profile from "./Profile";

function NoLayout() {
  const { pathname } = useLocation();
  const mainPath = pathname.slice(10);
  console.log(mainPath);

  return (
    <Stack>
      {mainPath === "Landing" ? <Landing /> : mainPath === "profile" ? <Profile /> : <Landing /> }
      <Footer bgcolor={"#E2E8F0"} />
    </Stack>
  );
}

export default NoLayout;
