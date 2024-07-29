import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";



  function createData(name, visitor, users, rate, dir) {
    return { name, visitor, users, rate, dir };
  }

  const rows = [
    createData("/argon/", "4,569", "340", "46,53%", "top"),
    createData("/argon/index.html", "3,985", "319", "46,53%", "down"),
    createData("/argon/charts.html", "3,513", "294", "36,49%", "down"),
    createData("/argon/tables.html", "2,050", "147", "50,87%", "top"),
    createData("/argon/profile.html", "1,795", "190", "46,53%", "down"),
  ];

    function createData2(name, visitor, percent, color, bgcolor) {
      return { name, visitor, percent, color, bgcolor };
    }

  const trafficRows = [
    createData2("Facebook", "1,480", 60, "#EF4A4D", "#FECACA"),
    createData2("Facebook", "5,480", 70, "#19B981", "#A7F3D0"),
    createData2("Google", "4,807", 80, "#A855F7", "#E9D5FF"),
    createData2("Instagram", "3,678", 75, "#0EA5E9", "#BAE6FD"),
    createData2("twitter", "2,645", 30, "#f58d16", "#FED7AA"),
  ];


function Dashboard() {
  const chart1 = {
    option: {
      chart: {
        id: "basic-bar",
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        labels: {
          show: true,
          floating: true,
          style: {
            color: "#FFF",
          },
        },
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        color: "#0EA5E9",
        data: [65, 75, 62, 44, 57, 68, 75],
      },
      {
        name: "series-2",
        color: "#FFF",
        data: [40, 67, 82, 73, 57, 60, 88],
      },
    ],
  };

  const chart2 = {
    option: {
      chart: {
        id: "basic-bar",
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [""],
      },
    },
    series: [
      {
        name: "series-1",
        color: "#ED64A6",
        colors: ["#FF0000", "#E91E63"],
        data: [30, 77, 55, 33, 100, 45, 12],
      },
      {
        name: "series-2",
        color: "#4C51BF",
        data: [28, 68, 85, 72, 10, 5, 88],
      },
    ],
  };

  return (
    <Stack gap={15} pb={8}>
      <Stack
        alignItems={"center"}
        sx={{
          px: { xs: 2, sm: 4, md: 5 },
          mt: -10,
          gap: 3,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Stack
          sx={{
            bgcolor: "#000",
            borderRadius: 1,
            width: { xs: "100%", md: "55%", lg: "67%" },
          }}
        >
          <Stack px={2} pt={2} gap={1}>
            <Typography sx={{ color: "#FFF", fontSize: 13 }}>
              OVERVIEW
            </Typography>
            <Typography
              sx={{ color: "#FFF", fontSize: 20, fontWeight: "bold" }}
            >
              Sales value
            </Typography>
          </Stack>
          <Chart
            options={chart1.option}
            series={chart1.series}
            type="line"
            width={"97%"}
            height={330}
          />
        </Stack>
        <Stack
          sx={{
            bgcolor: "#FFF",
            boxShadow: "0 0 15px rgba(0,0,0, 30%)",
            borderRadius: 1,
            width: { xs: "100%", md: "45%", lg: "calc((100% - 67%))" },
          }}
        >
          <Stack px={2} pt={2} gap={1}>
            <Typography sx={{ color: "var(--hover-color)", fontSize: 13 }}>
              PERFORMANCE
            </Typography>
            <Typography
              sx={{
                color: "var(--text-color)",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Total orders
            </Typography>
          </Stack>
          <Chart
            options={chart2.option}
            series={chart2.series}
            type="bar"
            width={"100%"}
            height={330}
          />
        </Stack>
      </Stack>
      <Stack
        sx={{
          px: { xs: 2, sm: 4, md: 5 },
          mt: -10,
          gap: 3,
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Stack
          sx={{
            overflow: "hidden",
            bgcolor: "#FFF",
            boxShadow: "0 0 15px rgba(0,0,0, 30%)",
            borderRadius: 1,
            width: { xs: "100%", lg: "67%" },
          }}
        >
          <TableHeader label={"Page visits"} />
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: "#F8FAFC" }}>
                  <TableCell sx={{fontSize: 12}}>PAGE NAME </TableCell>
                  <TableCell sx={{fontSize: 12}}>VISITORS</TableCell>
                  <TableCell sx={{fontSize: 12}}>UNIQUE USERS</TableCell>
                  <TableCell sx={{fontSize: 12}}>BOUNCE RATE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontWeight: "bold" }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.visitor}</TableCell>
                    <TableCell align="left">{row.users}</TableCell>
                    <TableCell align="left">
                      <Stack direction={"row"} alignItems={"center"} gap={2}>
                        {row.dir === "top" ? (
                          <ArrowUpward
                            sx={{ fontSize: 18, color: "#19B981" }}
                          />
                        ) : (
                          <ArrowDownward
                            sx={{ fontSize: 18, color: "#EF4A4D" }}
                          />
                        )}
                        {row.rate}
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
        <Stack
          sx={{
            bgcolor: "#FFF",
            boxShadow: "0 0 15px rgba(0,0,0, 30%)",
            borderRadius: 1,
            overflowX: "auto",
            width: { xs: "100%", lg: "calc((100% - 67%))" },
          }}
        >
          <TableHeader label={"Social traffic"} />
          <TableContainer sx={{ width: "100%" }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: "#F8FAFC" }}>
                  <TableCell sx={{fontSize: 12}}>PAGE NAME </TableCell>
                  <TableCell sx={{fontSize: 12}}>VISITORS</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {trafficRows.map((row,index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontWeight: "bold" }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell>{row.visitor}</TableCell>
                    <TableCell>
                      <Stack direction={"row"} gap={2} alignItems={"center"}>
                        <Typography>{row.percent}%</Typography>
                        <Stack sx={{position: "relative", width: 100, height: 8, borderRadius: 2, bgcolor: row.bgcolor, overflow: "hidden"}} >
                          <Stack sx={{position: "absolute", top: 0, left: 0, height: "100%", width: row.percent, bgcolor: row.color, borderRadius: 2}} />
                        </Stack>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </Stack>
  );
}

const TableHeader = ({label}) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={3}
      py={2}
    >
      <Typography sx={{ color: "var(--text-color)", fontWeight: 700 }}>{label}</Typography>
      <Stack sx={{ px: 2, py: .8, color: "#FFF", fontWeight: 700, bgcolor: "#6366F1", borderRadius: 1.5, fontSize: 12 }}>SEE ALL </Stack>
    </Stack>
  );
}

export default Dashboard;
