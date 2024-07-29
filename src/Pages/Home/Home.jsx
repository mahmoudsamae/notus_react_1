import { Stack } from "@mui/material";
import HeroSection from "../../Sections/HeroSection";
import Header from "../../components/Header";
import ContentSection from "../../Sections/ContentSection";

function Home() {
  return (
    <Stack>
      <Stack sx={{ width: "100%", height: "100%", display: {xs: "none", sm: "flex"} }}>
        <img
          src={require("../../assets/img/pattern_react.png")}
          style={{
            position: "absolute",
            width: "60%",
            height: "100%",
            alignSelf: "end",
            objectFit: "cover",
          }}
          alt=""
        />
      </Stack>
      <Header />
      <HeroSection />
      <ContentSection />
    </Stack>
  );
}

export default Home;
