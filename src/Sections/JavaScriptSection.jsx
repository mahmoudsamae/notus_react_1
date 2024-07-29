import { Stack, Typography } from "@mui/material";
import React from "react";
import { LanguageSection } from "../Sections/ContentSection";
import { Javascript, NextPlan, NightlightRoundSharp, PriorityHighSharp, SevenKPlus, VerifiedUser } from "@mui/icons-material";

function JavaScriptSection() {
  return (
    <Stack sx={{flexDirection: {xs: "column", md: "row", }}} gap={12}>
      <Stack direction={"row"} alignItems={"center"} gap={4}  sx={{justifyContent: {xs: "center", sm: "start"}, flexWrap:{xs: "wrap", md: "nowrap"}}}>
        <Stack alignItems={"center"} gap={2} sx={{mt: {xs: 0, md: -10}}}>
          <JavascriptBox
            label={"Svelte"}
            icon={<SevenKPlus />}
            color={"#DC2626"}
          />
          <JavascriptBox
            label={"React JS"}
            icon={<PriorityHighSharp />}
            color={"#0EA5E9"}
          />
          <JavascriptBox
            label={"Next JS"}
            icon={<NextPlan />}
            color={"#334155"}
          />
        </Stack>
        <Stack alignItems={"center"} gap={2}>
          <JavascriptBox
            label={"JavaScript"}
            icon={<Javascript />}
            color={"#EAB308"}
          />
          <JavascriptBox
            label={"Angular"}
            icon={<NightlightRoundSharp />}
            color={"#B91C1C"}
          />
          <JavascriptBox
            label={"Vue.js"}
            icon={<VerifiedUser />}
            color={"#10B981"}
          />
        </Stack>
      </Stack>
      <Stack justifyContent={"end"} sx={{pt: {xs: 0, md: 10}}}>
        <LanguageSection
          icon={<Javascript sx={{ color: "var(--title-color)" }} />}
          title={"Javascript  Components"}
          desc={
            "In order to create a great User Experience some components require JavaScript. In this way you can manipulate the elements on the page and give more options to your users."
          }
          desc2={
            "We created a set of Components that are dynamic and come to help you."
          }
          btns={[
            "ALERTS",
            "DROPDOWNS",
            "MENUS",
            "MODALS",
            "NAVBARS",
            "POPOVERS",
            "TABS",
            "TOOLTIPS",
          ]}
        />
      </Stack>
    </Stack>
  );
}
const JavascriptBox = ({icon, label, color}) => {
  return(
    <Stack sx={{width: 220, height: 120, bgcolor: color, alignItems:"center", justifyContent: "center", gap: 1.5, borderRadius: 2}}>
      <Stack sx={{bgcolor: "#FFF", borderRadius: "50%", width: 50, height: 50, }} justifyContent={"center"} alignItems={"center"}>{icon}</Stack>
      <Typography color={"#FFF"} fontWeight={400}>{label}</Typography>
    </Stack>
  )
}

export default JavaScriptSection;
