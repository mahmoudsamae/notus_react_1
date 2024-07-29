import {
  Avatar,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import React from "react";
import angularImg from "../../assets/img/angular.jpg";
import reactImg from "../../assets/img/react.jpg";
import sketchImg from "../../assets/img/sketch.jpg";
import vuejsImg from "../../assets/img/vue.jpg";
import bootstrapImg from "../../assets/img/bootstrap.jpg";
import team1 from "../../assets/img/team-1-800x800.jpg";
import team2 from "../../assets/img/team-2-800x800.jpg";
import team3 from "../../assets/img/team-3-800x800.jpg";
import team4 from "../../assets/img/team-4-470x470.png";
import { Lens, } from "@mui/icons-material";

function createData2(
  imgSrs,
  project,
  budget,
  state,
  stateColor,
  user,
  completion,
  completionColor,
  completionColorBG
) {
  return {
    imgSrs,
    project,
    budget,
    state,
    stateColor,
    user,
    completion,
    completionColor,
    completionColorBG,
  };
}

const cardRows = [
  createData2(
    bootstrapImg,
    "Argon Design System",
    "$2,500 USD",
    "pending",
    "#F97316",
    [team1, team2, team3, team4],
    60,
    "#EF4444",
    "#FECACA"
  ),
  createData2(
    angularImg,
    "Angular Now UI Kit PRO",
    "$1,800 USD	",
    "completed",
    "#10B981",
    [team1, team2, team3, team4],
    100,
    "#10B981",
    "#A2F6E6"
  ),
  createData2(
    sketchImg,
    "Black Dashboard Sketch",
    "$3,150 USD	",
    "delayed",
    "#EF4444",
    [team1, team2, team3, team4],
    73,
    "#EF4444",
    "#FECACA"
  ),
  createData2(
    vuejsImg,
    "React Material Dashboard",
    "$4,400 USD",
    "on schedule",
    "#14B8A6",
    [team1, team2, team3, team4],
    90,
    "#14B8A6",
    "#A2F6E6"
  ),
  createData2(
    reactImg,
    "Angular Now UI Kit PRO",
    "$2,200 USD",
    "completed",
    "#10B981",
    [team1, team2, team3, team4],
    100,
    "#10B981",
    "#A2F6E6"
  ),
];

function Tables() {
  // const [openList, setOpenList] = useState(false);

  return (
    <Stack mt={-10} gap={10} mb={10}>
      {/* first Tabel */}
      <MyTable cardRows={cardRows} />

      {/* second Tabel */}
      <MyTable
        cardRows={cardRows}
        bgcolor={"#0C4A6E"}
        headerColor={"#075985"}
      />
    </Stack>
  );
}

const MyTable = ({ cardRows, bgcolor, headerColor }) => {
  return (
    <Stack
      sx={{
        bgcolor: bgcolor ? bgcolor : "#FFF",
        boxShadow: "0 0 15px rgba(0,0,0, 30%)",
        borderRadius: 1,
        width: { xs: "90%" },
        mx: "auto",
      }}
    >
      <Typography
        sx={{
          my: 2,
          px: 2,
          color: bgcolor ? "#FFF" : "var(--text-color)",
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        Card Tables
      </Typography>
      <TableContainer component={Paper} sx={{overflow: "auto"}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: headerColor ? headerColor : "#F8FAFC" }}>
              <TableCell
                sx={{
                  fontSize: 14,
                  color: headerColor ? "#FFF" : "var(--hover-color)",
                  fontWeight: "bold",
                  borderColor: bgcolor && "var(--hover-color)",
                }}
              >
                PROJECT
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 14,
                  color: headerColor ? "#FFF" : "var(--hover-color)",
                  fontWeight: "bold",
                  borderColor: bgcolor && "var(--hover-color)",
                }}
              >
                BUDGET
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 14,
                  color: headerColor ? "#FFF" : "var(--hover-color)",
                  fontWeight: "bold",
                  borderColor: bgcolor && "var(--hover-color)",
                }}
              >
                STATUS
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 14,
                  color: headerColor ? "#FFF" : "var(--hover-color)",
                  fontWeight: "bold",
                  borderColor: bgcolor && "var(--hover-color)",
                }}
              >
                USERS
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 14,
                  color: headerColor ? "#FFF" : "var(--hover-color)",
                  fontWeight: "bold",
                  borderColor: bgcolor && "var(--hover-color)",
                }}
              >
                COMPLETION
              </TableCell>
              {/* <TableCell> </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody sx={{ bgcolor: bgcolor ? bgcolor : "#FFF" }}>
            {cardRows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontWeight: "bold",
                    borderColor: bgcolor && "var(--hover-color)",
                  }}
                >
                  <Stack
                    direction={"row"}
                    sx={{ color: bgcolor && "#FFF" }}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Avatar variant="circular" src={row.imgSrs} />
                    {row.project}
                  </Stack>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: bgcolor && "#FFF",
                    borderColor: bgcolor && "var(--hover-color)",
                  }}
                >
                  {row.budget}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: bgcolor && "#FFF",
                    borderColor: bgcolor && "var(--hover-color)",
                  }}
                >
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <Lens sx={{ color: row.stateColor, fontSize: 13 }} />
                    {row.state}
                  </Stack>
                </TableCell>
                <TableCell
                  sx={{ borderColor: bgcolor && "var(--hover-color)" }}
                >
                  <Stack direction={"row"} alignItems={"center"}>
                    {row?.user?.map((userImg, index) => (
                      <Stack ml={-2} key={index}>
                        <Avatar
                          src={userImg}
                          sx={{ border: "2px solid #CCC" }}
                        />
                      </Stack>
                    ))}
                  </Stack>
                </TableCell>
                <TableCell
                  sx={{ borderColor: bgcolor && "var(--hover-color)" }}
                >
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <Stack sx={{ color: bgcolor && "#FFF" }}>
                      {row.completion}%
                    </Stack>
                    <Stack
                      sx={{
                        bgcolor: row.completionColorBG,
                        position: "relative",
                        width: "100%",
                        height: 10,
                        borderRadius: 2,
                      }}
                    >
                      <Stack
                        sx={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bgcolor: row.completionColor,
                          width: `${row.completion}%`,
                          height: "100%",
                          borderRadius: 2,
                        }}
                      />
                    </Stack>
                  </Stack>
                </TableCell>
                {/* <TableCell align="right">
                    <Stack
                      sx={{ position: "relative", zIndex: 1000 }}
                      alignItems={"end"}
                      justifyContent={"end"}
                    >
                      <Menu sx={{cursor: "pointer"}} onClick={() => setOpenList(!openList)}/>
                      <Stack
                        justifyContent={"start"}
                        alignItems={"start"}
                        sx={{
                          position: "absolute",
                          bgcolor: "#FFF",
                          borderRadius: 2,
                          transition: ".3s",
                          width: openList ? 200 : 0,
                          height: openList ? 100 : 0,
                          top: 20,
                          right: 20,
                          p: openList ? 2 : 0,
                          overflow: "hidden",
                          gap: 2,
                          boxShadow: "0 0 15px rgba(0,0,0, 20%)",
                        }}
                      >
                        <Typography sx={{ cursor: "pointer" }}>
                          Action
                        </Typography>
                        <Typography sx={{ cursor: "pointer" }}>
                          Another action
                        </Typography>
                        <Typography sx={{ cursor: "pointer" }}>
                          Something ele here
                        </Typography>
                      </Stack>
                    </Stack>
                  </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Tables;
