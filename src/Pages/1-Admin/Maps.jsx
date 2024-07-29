import { Stack } from "@mui/material";
import React from "react";

function Maps() {
  return (
    <Stack
      mt={-10}
      gap={10}
      mb={10}
      sx={{
        bgcolor: "#FFF",
        width: "92%",
        mx: "auto",
        borderRadius: 2,
        height: 500,
        boxShadow: "0 0 10px rgba(0,0,0, 20%)",
      }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <div style={{width: "100%", height: "100%"}}>
        <iframe
          title="notus-map"
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lattakia+(notus%20map)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
    </Stack>
  );
}

export default Maps;
