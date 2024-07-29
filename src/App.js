import Admin from "./Pages/1-Admin/Admin";

import Auth from "./Pages/2-Auth/Auth";
import NoLayout from "./Pages/3-NoLayout/NoLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { IconButton, Stack } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import { useEffect, useState } from "react";

function App() {
  const [moveTop, setMoveTop] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if(window.scrollY > 500){
        setMoveTop(true);
      }else{
        setMoveTop(false);
      }
    })
  }, []);
  const move2Top = () => {
    window.scrollTo(0,0);
  }

  return (
    <Stack sx={{ overflow: "hidden" }}>
      <Stack
        sx={{
          opacity: moveTop ? 1 : 0,
          transition: ".3s",
          position: "fixed",
          bottom: {xs: 20, sm: 30},
          right: {xs: 10, sm: 30},
          zIndex: 50000,
        }}
      >
        <IconButton
          onClick={() => move2Top()}
          sx={{
            bgcolor: "var(--blue-color)",
            ":hover": { bgcolor: "var(--blue-color)" },
          }}
        >
          <ArrowUpward sx={{ color: "#FFF", fontSize: {xs: 20, sm: 30} }} />
        </IconButton>
      </Stack>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/noLayout/*" element={<NoLayout />} />
        </Routes>
      </Router>
    </Stack>
  );
}

export default App;
