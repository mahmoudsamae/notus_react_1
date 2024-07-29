import {
  Apartment,
  ArrowDownward,
  ArrowUpward,
  ChatRounded,
  Close,
  Menu,
  Notifications,
  People,
  Percent,
  Search,
} from "@mui/icons-material";
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SlideBar from "../../components/SlideBar";
import { Link } from "react-router-dom";

function AdmainHeader() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Stack sx={{ boxShadow: "0 0 15px rgba(0,0,0, 20%)", width: "100%" }}>
      <Stack
        sx={{
          bgcolor: { md: "var(--blue-color)" },
          px: { xs: 2, sm: 4, md: 5 },
          py: 2,
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "start", md: "space-between" },
          alignItems: { md: "center" },
        }}
      >
        <Typography
          sx={{
            display: { xs: "none", md: "block" },
            fontSize: 18,
            color: "#FFF",
            fontWeight: "bold",
          }}
        >
          DASHBOARD
        </Typography>


        <Stack
          position={"relative"}
          direction={"row"}
          alignItems={"center"}
          sx={{ justifyContent: { xs: "space-between", md: "start" } }}
          gap={1}
        >
          {/* menu icon */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              color: "var(--text-color)",
              transition: ".3s"
            }}
            onClick={() => setShowMenu(!showMenu)}
          >
            {!showMenu ? <Menu /> : <Close />}
          </IconButton>

            {/* menu slider */}
          <Stack
            sx={{
              borderRadius: 2,
              position: "absolute",
              top: 50,
              boxShadow: "0 0 15px rgba(0,0,0,20%)",
              transition: ".5s",
              height: showMenu ? 700 : 0,
              overflow: "hidden",
              bgcolor: "#FFF",
            }}
          >
            <SlideBar />
          </Stack>

          {/* search Input */}
          <Stack
            sx={{
              width: 180,
              height: 40,
              borderRadius: 2,
              position: "relative",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Typography
              component={"input"}
              placeholder="Search here..."
              sx={{
                outline: "none",
                borderRadius: 0.5,
                border: "none",
                fontSize: 11,
                pl: 3.5,
                height: "100%",
                "::placeholder": { color: "var(--secondery-color)" },
              }}
            />
            <Search
              sx={{
                position: "absolute",
                left: 5,
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--secondery-color)",
                fontSize: 17,
              }}
            />
          </Stack>

          <Stack>
            <Link
              to={"/"}
              style={{
                all: "unset",
                cursor: "pointer",
                fontWeight: 500,
                color: "var(--text-color)",
              }}
              className="displayLink"
            >
              NOTUS REACT
            </Link>
          </Stack>

          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Notifications
              sx={{ display: { md: "none" }, color: "var(--hover-color)" }}
            />
            <Avatar src={require("../../assets/img/team-1-800x800.jpg")} />
          </Stack>
        </Stack>
      </Stack>

      <Stack
        sx={{
          px: { xs: 2, sm: 4, md: 5 },
          bgcolor: "var(--blue-color)",
          flexDirection: "row",
          gap: 3,
          pt: 7,
          pb: 18,
          flexWrap: "wrap",
        }}
      >
        <DetailBox
          icon={<ChatRounded />}
          label={"TRAFFIC"}
          value={"350,897"}
          circleColor={"#EF4444"}
          dirIcon={<ArrowUpward sx={{ color: "#22B981", fontSize: 18 }} />}
          percent={"3.48%"}
          percentColor={"#22B981"}
          sliceDaty={"Since last month"}
        />
        <DetailBox
          icon={<Apartment />}
          label={"NEW USERS"}
          value={"3.48%"}
          circleColor={"#F97316"}
          dirIcon={<ArrowDownward sx={{ color: "#EF445D", fontSize: 18 }} />}
          percent={"3.48%"}
          percentColor={"#EF445D"}
          sliceDaty={"Since last week"}
        />
        <DetailBox
          icon={<People />}
          label={"SALES"}
          value={"924"}
          circleColor={"#EC4899"}
          dirIcon={<ArrowDownward sx={{ color: "#F97342", fontSize: 18 }} />}
          percent={"1.10%"}
          percentColor={"#F97342"}
          sliceDaty={"Since yesterday"}
        />
        <DetailBox
          icon={<Percent />}
          label={"PERFORMANCE"}
          value={"49,65%"}
          circleColor={"#0EA5E9"}
          dirIcon={<ArrowUpward sx={{ color: "#22B981", fontSize: 18 }} />}
          percent={"12%"}
          percentColor={"#22B981"}
          sliceDaty={"Since last month"}
        />
      </Stack>
    </Stack>
  );
}

const DetailBox = ({
  icon,
  circleColor,
  label,
  value,
  dirIcon,
  percentColor,
  percent,
  sliceDaty,
}) => {
  return (
    <Stack
      sx={{
        bgcolor: "#FFF",
        p: 2,
        borderRadius: 1,
        width: {
          xs: "100%",
          md: "calc((100% / 2) - 50px)",
          lg: "calc((100% / 4) - 50px)",
        },
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack>
          <Typography
            sx={{
              color: "var(--secondery-color)",
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            {label}
          </Typography>
          <Typography
            sx={{ color: "var(text-color)", fontWeight: 700, fontSize: 19 }}
          >
            {value}
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: 45,
            height: 45,
            borderRadius: "50%",
            bgcolor: circleColor,
            justifyContent: "center",
            alignItems: "center",
            color: "#FFF",
          }}
        >
          {icon}
        </Stack>
      </Stack>
      <Stack direction={"row"} alignItems={"Center"} mt={2}>
        {dirIcon}
        <Typography sx={{ ml: 0.5, color: percentColor, fontSize: 13 }}>
          {percent}
        </Typography>
        <Typography
          sx={{ fontSize: 13, ml: 1, color: "var(--secondery-color)" }}
        >
          {sliceDaty}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AdmainHeader;
